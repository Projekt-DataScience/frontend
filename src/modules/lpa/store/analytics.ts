import { defineStore } from "pinia";
import axios from 'axios';
import authHeader from "../../../services/auth-header";
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
        auditPerGroupLast6MonthsSeries: [] as ApexBarChart[]
    }),
    actions: {
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
