export default {
  getTestNode() {
    let data = [
      {
        key: 'Hello'
      }, // two node data, in an Array
      {
        key: 'World!'
      }
    ]

    return data
  },

  getTestLink() {
    let data = [
      {
        from: 'Hello',
        to: 'World!'
      }
    ] // one link data, in an Array

    return data
  },
  getData() {
    let data = {
      copiesArrays: true,
      copiesArrayObjects: true,
      nodeDataArray: [
        {
          key: 1,
          jobName: 'd_tel_malware_stream_mb3_s3_2_s3',
          scriptToRun: 'sonic_s3_to_s3.ksh',
          createdBy: 'skulkarni',
          application: 'Telemetry',
          subApplication: 'Malware stream MB3',
          applicationType: 'OS',
          taskType: 'Job',
          status: 'Success'
        },
        {
          key: 2,
          jobName: 'd_qu_tel_malware_stream_mb3_load_work_table',
          scriptToRun: 'malware_stream_mb3_qu_run_hql.ksh',
          createdBy: 'skulkarni',
          application: 'Telemetry',
          subApplication: 'Malware stream MB3',
          applicationType: 'OS',
          taskType: 'Job',
          status: 'Success'
        },
        {
          key: 3,
          jobName: 'd_qu_tel_malware_stream_mb3_load_core_table',
          scriptToRun: 'malware_stream_mb3_qu_run_hql.ksh',
          createdBy: 'skulkarni',
          application: 'Telemetry',
          subApplication: 'Malware stream MB3',
          applicationType: 'OS',
          taskType: 'Job',
          status: 'Success'
        },
        {
          key: 4,
          jobName: 'd_qu_tel_malware_stream_mb3_get_data_s32hdfs',
          scriptToRun: 'malware_stream_mb3_qu_get_data_s32hdfs.ksh',
          createdBy: 'skulkarni',
          application: 'Telemetry',
          subApplication: 'Malware stream MB3',
          applicationType: 'OS',
          taskType: 'Command',
          status: 'Success'
        },
        {
          key: 5,
          jobName: 'd_qu_tel_malware_stream_mb3_refresh_metadata',
          scriptToRun: 'malware_stream_mb3_qu_execute_impala_on_cdh.ksh',
          createdBy: 'skulkarni',
          application: 'Telemetry',
          subApplication: 'Malware stream MB3',
          applicationType: 'OS',
          taskType: 'Command',
          status: 'Success'
        },
        {
          key: 6,
          jobName: 'd_qu_tel_malware_stream_mb3_delete_raw_files',
          scriptToRun: 'malware_stream_mb3_qu_remove_files_on_s3.ksh',
          createdBy: 'skulkarni',
          application: 'Telemetry',
          subApplication: 'Malware stream MB3',
          applicationType: 'Job',
          taskType: 'Command',
          status: 'Running'
        },
        {
          key: 7,
          jobName: 'BIM_d_tel_malware_stream_mb3',
          scriptToRun: 'NA',
          createdBy: 'skulkarni',
          application: 'Telemetry',
          subApplication: 'Malware stream MB3',
          applicationType: 'BIM',
          taskType: 'Command',
          status: 'Waiting'
        },
        {
          key: 8,
          jobName: 'd_qu_tel_malware_stream_mb3_load_work_malware_mb3_machine',
          scriptToRun: 'malware_stream_mb3_qu_run_hql.ksh',
          createdBy: 'rdamodaran',
          application: 'Telemetry',
          subApplication: 'Malware stream MB3',
          applicationType: 'OS',
          taskType: 'Job',
          status: 'Waiting'
        },
        {
          key: 9,
          jobName: 'd_qu_tel_malware_stream_mb3_load_core_malware_mb3_machine',
          scriptToRun: 'malware_stream_mb3_qu_run_hql.ksh',
          createdBy: 'rdamodaran',
          application: 'Telemetry',
          subApplication: 'Malware stream MB3',
          applicationType: 'OS',
          taskType: 'Job',
          status: 'Waiting'
        },
        {
          key: 10,
          jobName: 'd_qu_tel_malware_stream_mb3_load_core_mb3_machine_weekly',
          scriptToRun: 'malware_stream_mb3_qu_run_hql.ksh',
          createdBy: 'rdamodaran',
          application: 'Telemetry',
          subApplication: 'Malware stream MB3',
          applicationType: 'OS',
          taskType: 'Job',
          status: 'Waiting'
        },
        {
          key: 11,
          jobName: 'd_qu_tel_malware_stream_mb3_load_core_mb3_machine_weekly',
          scriptToRun: 'malware_stream_mb3_qu_run_hql.ksh',
          createdBy: 'rdamodaran',
          application: 'Telemetry',
          subApplication: 'Malware stream MB3',
          applicationType: 'OS',
          taskType: 'Job',
          status: 'Waiting'
        },
        {
          key: 12,
          jobName: 'd_qu_tel_malware_stream_mb3_qu_2_athena',
          scriptToRun: 'malware_stream_mb3_qu_2_athena.ksh',
          createdBy: 'rdamodaran',
          application: 'Telemetry',
          subApplication: 'Malware stream MB3',
          applicationType: 'OS',
          taskType: 'Job',
          status: 'Waiting'
        },
        {
          key: 13,
          jobName: 'd_qu_tel_mal_strm_mb3_cosmos_rule_culling_data_publish',
          scriptToRun: 'cosmos_pub_rule_cul_report.ksh',
          createdBy: 'rdamodaran',
          application: 'Telemetry',
          subApplication: 'Malware stream MB3',
          applicationType: 'OS',
          taskType: 'Job',
          status: 'Waiting'
        }
      ],
      linkDataArray: [
        {
          from: 1,
          to: 2
        },
        {
          from: 2,
          to: 3
        },
        {
          from: 2,
          to: 4
        },
        {
          from: 3,
          to: 5
        },
        {
          from: 3,
          to: 9
        },
        {
          from: 5,
          to: 9
        },
        {
          from: 4,
          to: 6
        },
        {
          from: 6,
          to: 7
        },
        {
          from: 7,
          to: 8
        },
        {
          from: 8,
          to: 9
        },
        {
          from: 9,
          to: 10
        },
        {
          from: 10,
          to: 11
        },
        {
          from: 11,
          to: 12
        },
        {
          from: 12,
          to: 13
        }
      ]
    }

    return data
  },
  getLink() {
    let data = [
      {
        from: 1,
        to: 2
      },
      {
        from: 2,
        to: 3
      },
      {
        from: 2,
        to: 4
      },
      {
        from: 3,
        to: 5
      },
      {
        from: 3,
        to: 9
      },
      {
        from: 5,
        to: 9
      },
      {
        from: 4,
        to: 6
      },
      {
        from: 6,
        to: 7
      },
      {
        from: 7,
        to: 8
      },
      {
        from: 8,
        to: 9
      },
      {
        from: 9,
        to: 10
      },
      {
        from: 10,
        to: 11
      },
      {
        from: 11,
        to: 12
      },
      {
        from: 12,
        to: 13
      }
    ]

    return data
  },
  getNode() {
    let data = [
      {
        key: 1,
        jobName: 'd_tel_malware_stream_mb3_s3_2_s3',
        scriptToRun: 'sonic_s3_to_s3.ksh',
        createdBy: 'skulkarni',
        application: 'Telemetry',
        subApplication: 'Malware stream MB3',
        applicationType: 'OS',
        taskType: 'Job',
        status: 'Success'
      },
      {
        key: 2,
        jobName: 'd_qu_tel_malware_stream_mb3_load_work_table',
        scriptToRun: 'malware_stream_mb3_qu_run_hql.ksh',
        createdBy: 'skulkarni',
        application: 'Telemetry',
        subApplication: 'Malware stream MB3',
        applicationType: 'OS',
        taskType: 'Job',
        status: 'Success'
      },
      {
        key: 3,
        jobName: 'd_qu_tel_malware_stream_mb3_load_core_table',
        scriptToRun: 'malware_stream_mb3_qu_run_hql.ksh',
        createdBy: 'skulkarni',
        application: 'Telemetry',
        subApplication: 'Malware stream MB3',
        applicationType: 'OS',
        taskType: 'Job',
        status: 'Success'
      },
      {
        key: 4,
        jobName: 'd_qu_tel_malware_stream_mb3_get_data_s32hdfs',
        scriptToRun: 'malware_stream_mb3_qu_get_data_s32hdfs.ksh',
        createdBy: 'skulkarni',
        application: 'Telemetry',
        subApplication: 'Malware stream MB3',
        applicationType: 'OS',
        taskType: 'Command',
        status: 'Success'
      },
      {
        key: 5,
        jobName: 'd_qu_tel_malware_stream_mb3_refresh_metadata',
        scriptToRun: 'malware_stream_mb3_qu_execute_impala_on_cdh.ksh',
        createdBy: 'skulkarni',
        application: 'Telemetry',
        subApplication: 'Malware stream MB3',
        applicationType: 'OS',
        taskType: 'Command',
        status: 'Success'
      },
      {
        key: 6,
        jobName: 'd_qu_tel_malware_stream_mb3_delete_raw_files',
        scriptToRun: 'malware_stream_mb3_qu_remove_files_on_s3.ksh',
        createdBy: 'skulkarni',
        application: 'Telemetry',
        subApplication: 'Malware stream MB3',
        applicationType: 'Job',
        taskType: 'Command',
        status: 'Running'
      },
      {
        key: 7,
        jobName: 'BIM_d_tel_malware_stream_mb3',
        scriptToRun: 'NA',
        createdBy: 'skulkarni',
        application: 'Telemetry',
        subApplication: 'Malware stream MB3',
        applicationType: 'BIM',
        taskType: 'Command',
        status: 'Waiting'
      },
      {
        key: 8,
        jobName: 'd_qu_tel_malware_stream_mb3_load_work_malware_mb3_machine',
        scriptToRun: 'malware_stream_mb3_qu_run_hql.ksh',
        createdBy: 'rdamodaran',
        application: 'Telemetry',
        subApplication: 'Malware stream MB3',
        applicationType: 'OS',
        taskType: 'Job',
        status: 'Waiting'
      },
      {
        key: 9,
        jobName: 'd_qu_tel_malware_stream_mb3_load_core_malware_mb3_machine',
        scriptToRun: 'malware_stream_mb3_qu_run_hql.ksh',
        createdBy: 'rdamodaran',
        application: 'Telemetry',
        subApplication: 'Malware stream MB3',
        applicationType: 'OS',
        taskType: 'Job',
        status: 'Waiting'
      },
      {
        key: 10,
        jobName: 'd_qu_tel_malware_stream_mb3_load_core_mb3_machine_weekly',
        scriptToRun: 'malware_stream_mb3_qu_run_hql.ksh',
        createdBy: 'rdamodaran',
        application: 'Telemetry',
        subApplication: 'Malware stream MB3',
        applicationType: 'OS',
        taskType: 'Job',
        status: 'Waiting'
      },
      {
        key: 11,
        jobName: 'd_qu_tel_malware_stream_mb3_load_core_mb3_machine_weekly',
        scriptToRun: 'malware_stream_mb3_qu_run_hql.ksh',
        createdBy: 'rdamodaran',
        application: 'Telemetry',
        subApplication: 'Malware stream MB3',
        applicationType: 'OS',
        taskType: 'Job',
        status: 'Waiting'
      },
      {
        key: 12,
        jobName: 'd_qu_tel_malware_stream_mb3_qu_2_athena',
        scriptToRun: 'malware_stream_mb3_qu_2_athena.ksh',
        createdBy: 'rdamodaran',
        application: 'Telemetry',
        subApplication: 'Malware stream MB3',
        applicationType: 'OS',
        taskType: 'Job',
        status: 'Waiting'
      },
      {
        key: 13,
        jobName: 'd_qu_tel_mal_strm_mb3_cosmos_rule_culling_data_publish',
        scriptToRun: 'cosmos_pub_rule_cul_report.ksh',
        createdBy: 'rdamodaran',
        application: 'Telemetry',
        subApplication: 'Malware stream MB3',
        applicationType: 'OS',
        taskType: 'Job',
        status: 'Waiting'
      }
    ]

    return data
  }
}
