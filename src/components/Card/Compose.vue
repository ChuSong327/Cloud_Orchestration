<template>
    <div class="Compose__Card">
        <v-layout row justify-space-around class="Compose__Canvas-Container" >
            <div>
                <h4 class="Compose__Palette-Title">Drag and Drop a Job Type</h4>
                <div id="PaletteDiv" style="width:180px; height: 400px; margin-right: 2px;"></div>
            </div>
            <div id="ComposeDiv" style="flex-grow: 1; height:60vh; border: dashed 1px lightgrey"></div>
        </v-layout>
        <div>
            <v-card class="Compose__Form" v-if="dialog">
                <FormsComposeJob 
                    :formType="formType"
                    :dialog="dialog"
                    :jobModel="jobModel"
                    :connectionList="connectionList"
                    :dummyList="dummyList"
                    :actionType="actionType"/>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat @click="toggleDialogState">Cancel</v-btn>
                    <v-btn 
                        color="primary" 
                        @click="
                            saveJob()
                            toggleDialogState()"
                    >Done</v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script>
import * as go from 'gojs'
import * as Robot from '@/utils/Robot'
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    data() {
        return {
            $: null,
            composeDiagram: null,
            composePalette: null,
            diagramModel: null,
            paletteModel: null,
            robot: null,
            scheduleName: "",
            formType: "",
            actionType: ["Move", "Copy", "Delete"],
            jobModel: {
                key: "",
                jobName: "",
                jobConnection: "",
                config_id: "",
                connectionName: "",
                jobSql: "",
                jobSource: "",
                jobTarget: "",
                status: "",
                provider: ""
            },
            dummyList: [
                {
                    id: 12345,
                    name: "connection1",
                },
                {
                    id: 67889,
                    name: "connection2"
                }
            ],
        }
    },
    computed: {
        ...mapState("common", {
            dialog: "dialog"
        }),
        // ...mapState("config", {
        //     connectionList: "connectionList"
        // })
    },
    methods: {
        ...mapMutations("common", {
            toggleDialogState: "toggleDialogState"
        }),
        // ...mapActions("config", {
        //     getConnectionList: "getConnectionList"
        // }),
        initDiagram() {
            this.composeDiagram =
                this.$(go.Diagram, "ComposeDiv", {
                    "undoManager.isEnabled": true
                })
            
            this.composeDiagram.layout =
                this.$(go.TreeLayout,
                    {    
                        arrangement: go.TreeLayout.ArrangementHorizontal,
                        angle: 90, 
                        layerSpacing: 35, 
                    }
                )
            
            this.composeDiagram.nodeTemplate = 
                this.$(go.Node, "Auto",
                    this.$(go.Shape, 
                        "RoundedRectangle",
                        { stroke: "#ffffff" },
                        { portId: "", fromLinkable: true, toLinkable: true, cursor: "pointer" },
                        new go.Binding("fill", "status", (status) => {
                            switch (status) {
                                case "Success":
                                    return "#4CAF50"
                                case "Running":
                                    return "#FDD835"
                                case "Waiting": 
                                    return  "rgba(64, 128, 255, 0.8)"
                                case "Failure":
                                    return "#f44336"
                                default: 
                                    return "#BDBDBD"

                            }
                        })
                    ),
                    this.$(go.Panel, "Horizontal", 
                        this.$(go.Panel, "Table", 
                            {
                                maxSize: new go.Size(150, 999),
                                margin: new go.Margin(10), // define each box's margin
                                defaultAlignment: go.Spot.Left,
                                
                            },
                            this.$(go.RowColumnDefinition, { column: 1, width: 4 }),
                            this.$(go.TextBlock,
                                {
                                    row: 0, column: 0,
                                    font:  "bold 12pt Roboto",
                                    stroke: "white",
                                    editable: false, 
                                    isMultiline: false,
                                    minSize: new go.Size(10, 16)
                                },
                                new go.Binding("text", "jobName").makeTwoWay()),
                            this.$(go.TextBlock,
                                {
                                    row: 1, column: 0,
                                    font: "bold 9pt Roboto",
                                    stroke: "white",
                                    editable: false, 
                                    isMultiline: false,
                                    minSize: new go.Size(10, 14),
                                    margin: new go.Margin(20, 0, 10, 0 ),

                                },
                                new go.Binding("text", "status", (v) => { return "Status: " + v })),
                            this.$(go.TextBlock, 
                                {
                                    row: 2, column: 0, 
                                    font: "bold 9pt Roboto",
                                    stroke: "white",
                                    editable: false, 
                                    isMultiline: false,
                                    // minSize: new go.Size(10, 14),
                                    margin: new go.Margin(0)
                                },
                                new go.Binding("text", "provider", (v) => { return "Provider: " + v }))
                        ), // end Table Panel
                    ), // end Horizontal Panel
                ) // end Node
            
            this.composeDiagram.linkTemplate =
                this.$(go.Link, { toShortLength: 6, toEndSegmentLength: 20 },
                    this.$(go.Shape,
                        { strokeWidth: 2 , stroke: "rgba(64, 128, 255, 0.8)"}),
                    this.$(go.Shape,  // arrowhead
                        { toArrow: "Triangle", fill: "rgba(64, 128, 255, 0.8)", stroke: "rgba(64, 128, 255, 0.8)", scale: 1 })
               )
            
            /** Add click event listener to each node */
            this.composeDiagram.addDiagramListener("ObjectSingleClicked", (node) => {
                const { data } = node.subject.part
                const nodeKey = data.key

                /* Compose form type is determined by provider type */
                this.formType = data.provider
               
                /** Open the compose form only when a job(node) is clicked.
                 * Close the compose form if a link is clicked.
                 */
                if (data.key) {
                    if(!this.dialog) {
                        this.toggleDialogState()
                    }
                } 

                /* Get config list from API based on provider type */
                // this.getConnectionList({ templateGroupId: data.configGroupId })

                /* Load the compose form with the clicked job's information from  */
                let currentJob = this.dataDiagramNode.filter( el => el.key === nodeKey )
                this.jobModel = currentJob[0]
            })

            /* Close the compose form when delete a job(node) */
            this.composeDiagram.addDiagramListener("selectionDeleted", (e) => {
                if(this.dialog) {
                     this.toggleDialogState()
                }
            })

             /**  
             * Load the existing nodes and links list to the diagram. 
             * If there is no node nor link, the diagram will be blank.
             * Notice: nodeDataArray and linkDataArray are in sync with dataDiagram.jobs and links
             * Changes in Diagram (add or remove a node/link) are automatically reflected in dataDiagram.jobs and links
            */
            this.diagramModel = this.$(go.GraphLinksModel)
            this.diagramModel.nodeDataArray = this.dataDiagramNode
            this.diagramModel.linkDataArray = this.dataDiagramLink
            this.composeDiagram.model = this.diagramModel
            this.robot = new Robot(this.composeDiagram)
        },
        initPalette() {
            this.composePalette = this.$(go.Palette, "PaletteDiv")
            this.composePalette.nodeTemplate = 
                this.$(go.Node, "Auto",
                    this.$(go.Shape, 
                        "RoundedRectangle",
                         { fill: "rgba(64, 128, 255, 0.8)", stroke: "#ffffff"}
                    ), // end Shape
                    this.$(go.TextBlock, 
                        {
                            font: "bold 10px Roboto",
                            stroke: "white",
                            alignment: go.Spot.Center,
                            text: "verticalAlignment: 'Center'",
                            // minSize: new go.Size(60, 30),
                            margin: new go.Margin(3)
                        },
                        new go.Binding("text", "provider").makeTwoWay()
                    ) // end TextBlock
                )// end Node
            
            this.paletteModel = this.$(go.Model)
            this.paletteModel.nodeDataArray = this.dataPalette
            this.composePalette.model = this.paletteModel
        }, 
        updateDiagram() {
            /* Clear current diagram */
            this.composeDiagram.div = null
            /* Reload the diagram with updated model*/
            this.initDiagram()
        },
        saveJob() {
            this.updateExistingJob(this.jobModel)
            this.updateDiagram()
        }
    },
    props: {
        dataDiagramNode: Array,
        dataDiagramLink: Array,
        dataPalette: Array,
        connectionList: Array,
        getConnectionList: Function,
        updateExistingJob: Function
    },
    created(){
        /* Initialize $ */
        this.$ = go.GraphObject.make 
    },
    mounted() {
        this.initDiagram()
        this.initPalette()
        this.scheduleName = this.$route.params.scheduleName
    },
    
}
</script>  