<template>
    <!-- Connection Table -->
    <v-layout>
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="connectionList.length > 0 ? connectionList : connections"
        hide-actions
        item-key="name"
        class="elevation-1 Configure__Table"
      >
        <template v-slot:headers="props">
          <tr>
            <th
              v-for="header in props.headers"
              :key="header.text"
              @click="changeSort(header.value)">
              <!-- <v-icon>mdi-arrow-up</v-icon> -->
              {{ header.text }}
            </th>
            <th>Action</th>
          </tr>
        </template>
        <template v-slot:items="props">
            <td class="text-xs-center">{{ props.item.name }}</td>
            <td class="text-xs-center">
              {{ format(props.item.created_at, 'DD-MMM-YYYY') }}
            </td>
            <td class="text-xs-center">
              <v-menu bottom left>
                <template v-slot:activator="{ on }">
                  <v-btn
                    flat
                    icon
                    @click="setSelectedConnectionId(props.item.id)">
                    <v-icon v-on="on">mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-tile 
                    :id="props.item.id" 
                    @click="
                      toggleDialogState()
                      setFormAction('Edit')
                      getConnectionForm({ configId: selectedConnectionId, tempId: templateGroupId }) ">
                    <v-list-tile-action>
                      <v-icon>mdi-lead-pencil</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title >
                      Edit
                    </v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile 
                    @click="deleteConnection({ configId: selectedConnectionId })">
                    <v-list-tile-action>
                      <v-icon> mdi-delete</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>Delete</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </td>
        </template>
      </v-data-table>
    </v-layout>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import { format } from 'date-fns'
export default {
    data() {
        return {
            format,
            selected: [],
            pagination: {
              sortBy: "name"
            },
            headers: [
                { text: 'Connection Name', value: 'name' },
                { text: 'Created Date', value: 'date', align: 'right' }
            ],
            connections: [
                { name: 'Demo_Connection_1', created_at: '2019-06-08T19:38:58.533852' },
                { name: 'Demo_Connection_2', created_at: '2019-06-10T06:56:16.150041' }
            ]
        }
    },
    computed: {
      ...mapState("config", {
        selectedConnectionId: "selectedConnectionId",
        s3FormInput: "s3FormInput"
      })
    },
    methods: {
      ...mapMutations('common', {
        toggleDialogState: 'toggleDialogState'
      }),
      ...mapMutations('config', {
        setFormAction: 'setFormAction',
        setSelectedConnectionId: "setSelectedConnectionId"
      }),
      ...mapActions("config", {
        deleteConnection: "deleteConnection",
        getConnectionForm: "getConnectionForm"
      }),
      changeSort(column) {
          if (this.pagination.sortBy === column) {
              this.pagination.descending = !this.pagination.descending
          } else {
              this.pagination.sortBy = column
              this.pagination.descending = false
          }
      }
    },
    props: {
        connectionList: Array,
        templateGroupId: String
    }
}
</script>