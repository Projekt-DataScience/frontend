import { defineStore } from "pinia";
import axios from 'axios';
import { authHeader } from "../../../libraries/services";
import { AuditAnalytics } from "../interfaces/auditAnalytics";
import { AuditAnalyticsPerGroup } from "../interfaces/auditAnalyticsPerGroup";

export interface ApexBarChart {
    name: string,
    data: number[]
}

export const useAnalytics = defineStore('Analytics', {
    state: () => ({
        auditLast6Months: [] as AuditAnalytics[],
        auditLast6MonthsSeries: [] as ApexBarChart[],
        auditPerGroupLast6Months: [] as AuditAnalyticsPerGroup[],
        auditPerGroupLast6MonthsSeries: [] as ApexBarChart[],
        testAuditLast6Months: [
            {
              month: 12,
              year: 2022,
              num_green: 6,
              num_yellow: 4,
              num_red: 3,
              percent_green: 0.46153846153846156,
              percent_yellow: 0.3076923076923077,
              percent_red: 0.23076923076923078,
            },
            {
              month: 11,
              year: 2022,
              num_green: 10,
              num_yellow: 3,
              num_red: 0,
              percent_green: 0.46153846153846156,
              percent_yellow: 0.3076923076923077,
              percent_red: 0.23076923076923078,
            },
            {
              month: 10,
              year: 2022,
              num_green: 12,
              num_yellow: 5,
              num_red: 2,
              percent_green: 0.46153846153846156,
              percent_yellow: 0.3076923076923077,
              percent_red: 0.23076923076923078,
            },
            {
              month: 9,
              year: 2022,
              num_green: 10,
              num_yellow: 2,
              num_red: 0,
              percent_green: 0.46153846153846156,
              percent_yellow: 0.3076923076923077,
              percent_red: 0.23076923076923078,
            },
            {
              month: 8,
              year: 2022,
              num_green: 6,
              num_yellow: 4,
              num_red: 3,
              percent_green: 0.46153846153846156,
              percent_yellow: 0.3076923076923077,
              percent_red: 0.23076923076923078,
            },
            {
              month: 7,
              year: 2022,
              num_green: 7,
              num_yellow: 4,
              num_red: 3,
              percent_green: 0.46153846153846156,
              percent_yellow: 0.3076923076923077,
              percent_red: 0.23076923076923078,
            },
          ] as AuditAnalytics[],
        testAuditLast6MonthsSeries: [] as ApexBarChart[],
    }),
    actions: {
        async fetchTestAuditLast6Months(){
            // append green values
            var tmp = [] as number[];
            for (let i = 0; i < this.testAuditLast6Months.length; i++){
                tmp.push(this.testAuditLast6Months[i].num_green);
            }
            this.testAuditLast6MonthsSeries.push(
                {
                    name: "Grün",
                    data: tmp
                }
            );
            // append yellow values
            var tmp = [] as number[];
            for (let i = 0; i < this.testAuditLast6Months.length; i++){
                tmp.push(this.testAuditLast6Months[i].num_yellow);
            }
            this.testAuditLast6MonthsSeries.push(
                {
                    name: "Gelb",
                    data: tmp
                }
            );
            // append red values
            var tmp = [] as number[];
            for (let i = 0; i < this.testAuditLast6Months.length; i++){
                tmp.push(this.testAuditLast6Months[i].num_red);
            }
            this.testAuditLast6MonthsSeries.push(
                {
                    name: "Rot",
                    data: tmp
                }
            );
        },
        async fetchAuditLast6Months() {
            try {
                const response = await axios.get(
                    import.meta.env.VITE_GW_AUDIT_URL + "analytics/audits",
                    authHeader()
                );
                this.auditLast6Months = response.data;

                // fill auditLast6MonthsSeries Array
                this.auditLast6MonthsSeries = []
                if(this.auditLast6Months.length === 0){
                    this.auditLast6MonthsSeries = [
                        {
                            name: 'Grün',
                            data: [0, 0, 0, 0, 0, 0,]
                        },
                        {
                            name: 'Gelb',
                            data: [0, 0, 0, 0, 0, 0,]
                        },
                        {
                            name: 'Rot',
                            data: [0, 0, 0, 0, 0, 0,]
                        }
                    ]
                }else{
                    // append green values
                    var tmp = [] as number[];
                    for (let i = 0; i < this.auditLast6Months.length; i++){
                        tmp.push(this.auditLast6Months[i].num_green);
                    }
                    this.auditLast6MonthsSeries.push(
                        {
                            name: "Grün",
                            data: tmp
                        }
                    );
                    // append yellow values
                    var tmp = [] as number[];
                    for (let i = 0; i < this.auditLast6Months.length; i++){
                        tmp.push(this.auditLast6Months[i].num_yellow);
                    }
                    this.auditLast6MonthsSeries.push(
                        {
                            name: "Gelb",
                            data: tmp
                        }
                    );
                    // append red values
                    var tmp = [] as number[];
                    for (let i = 0; i < this.auditLast6Months.length; i++){
                        tmp.push(this.auditLast6Months[i].num_red);
                    }
                    this.auditLast6MonthsSeries.push(
                        {
                            name: "Rot",
                            data: tmp
                        }
                    );
                }
            } catch (error) {
                console.log(error);
            }
        },
        async fetchAuditPerGroupLast6Months() {
            try {
                const response = await axios.get(
                    import.meta.env.VITE_GW_AUDIT_URL + "analytics/groups",
                    authHeader()
                );
                this.auditPerGroupLast6Months = response.data;

                // fill auditLast6MonthsSeries Array
                this.auditPerGroupLast6MonthsSeries = []
                if(this.auditPerGroupLast6Months.length === 0){
                    this.auditPerGroupLast6MonthsSeries = [
                        {
                            name: 'Grün',
                            data: [0, 0, 0, 0, 0, 0,]
                        },
                        {
                            name: 'Gelb',
                            data: [0, 0, 0, 0, 0, 0,]
                        },
                        {
                            name: 'Rot',
                            data: [0, 0, 0, 0, 0, 0,]
                        }
                    ]
                }else{
                    // append green values
                    var tmp = [] as number[];
                    for (let i = 0; i < this.auditPerGroupLast6Months.length; i++){
                        tmp.push(Math.round(this.auditPerGroupLast6Months[i].percent_green * 100));
                    }
                    this.auditPerGroupLast6MonthsSeries.push(
                        {
                            name: "Grün",
                            data: tmp
                        }
                    );
                    // append yellow values
                    var tmp = [] as number[];
                    for (let i = 0; i < this.auditPerGroupLast6Months.length; i++){
                        tmp.push(Math.round(this.auditPerGroupLast6Months[i].percent_yellow * 100));
                    }
                    this.auditPerGroupLast6MonthsSeries.push(
                        {
                            name: "Gelb",
                            data: tmp
                        }
                    );
                    // append red values
                    var tmp = [] as number[];
                    for (let i = 0; i < this.auditPerGroupLast6Months.length; i++){
                        tmp.push(Math.round(this.auditPerGroupLast6Months[i].percent_red * 100));
                    }
                    this.auditPerGroupLast6MonthsSeries.push(
                        {
                            name: "Rot",
                            data: tmp
                        }
                    );
                }
            } catch (error) {
                console.log(error);
            }
        },
    }
}
)
