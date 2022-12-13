import { defineStore } from "pinia";
import axios from 'axios';
import { Audit } from "../interfaces/audit";
import { User } from "../../../interfaces/user"

export const useAudit = defineStore('Audit', {
    state: () => ({
        audit: {
            due_date: "2022-12-22T00:00:00",
            complete_datetime: "",
            recurrent_audit: false,
            audited_user_id: 1,
            audited_user: {
                supervisor_id: 1,
                last_name: "Stahl",
                password_hash: "",
                company_id: 1,
                layer_id: 1,
                id: 1,
                first_name: "Josef",
                email: "josef@test.de",
                profile_picture_url: "",
                role_id: 3,
                group_id: 1
            },
            assigned_group_id: 1,
            id: 1,
            duration: 0,
            created_by_user_id: 1,
            auditor_user_id: 1,
            assigned_layer_id: 1,
            assigned_group: {
                company_id: 1,
                group_name: "Fertigung",
                id: 1
            },
            assigned_layer: {
                id: 1,
                layer_name: "Werkstatt",
                company_id: 1,
                layer_number: 0
            },
            created_by_user: {
                supervisor_id: 1,
                last_name: "Stahl",
                password_hash: "",
                company_id: 1,
                layer_id: 1,
                id: 1,
                first_name: "Josef",
                email: "josef@test.de",
                profile_picture_url: "",
                role_id: 3,
                group_id: 1
            },
            auditor: {
                supervisor_id: 1,
                last_name: "Stahl",
                password_hash: "",
                company_id: 1,
                layer_id: 1,
                id: 1,
                first_name: "Josef",
                email: "josef@test.de",
                profile_picture_url: "testtesttest",
                role_id: 3,
                group_id: 1
            },
            questions: [
                {
                    question: "Tropft Öl oder Ähnliches aus der Maschine?",
                    description: "Tropft Öl oder Ähnliches aus der Maschine?",
                    layer_id: 1,
                    id: 59,
                    category_id: 4,
                    group_id: 1,
                    layer: {
                        id: 1,
                        layer_name: "Werkstatt",
                        company_id: 1,
                        layer_number: 0
                    },
                    group: {
                        company_id: 1,
                        group_name: "Fertigung",
                        id: 1
                    },
                    category: {
                        category_name: "Qualität",
                        id: 4
                    }
                },
            ],
            answers: [],
        } as Audit,
        currentAudit: 1,
        audited_user_id: 1,
        audited_user: {
            supervisor_id: 1,
            last_name: 'Seliger',
            password_hash: '',
            company_id: 1,
            layer_id: 1,
            id: 1,
            first_name: 'Raphael',
            email: '',
            profile_picture_url: 'string',
            role_id: 1,
            group_id: 1
        } as User
    }),
    getters: {
        getListItems() {

        }
    },
    actions: {
        async fetchAudit() {
            /*try {
                const data = await axios.get(
                    "http://localhost:80/api/audit/lpa_audit/" + 1
                );
                this.audit = data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }*/
        },
        /*async fetchUser() {
            try {
                const data = await axios.get(
                    "http://localhost:3000/dataUserByID"
                );
                this.audited_user = data.data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },*/
        updateAnswersByID(currentQuestionID: number, emojyType: string) {
            for (let i = 0; i < this.audit[0].answers.length; i++) {
                if (this.audit[0].answers[i].question_id == currentQuestionID) {
                    this.audit[0].answers[i].answer = emojyType;
                    i = this.audit[0].answers.length;
                } else if (i == this.audit[0].answers.length - 1) {
                    this.audit[0].answers.push({
                        id: this.audit[0].answers.length,
                        audit_id: this.audit[0].id,
                        question_id: currentQuestionID,
                        answer: emojyType,
                        comment: "",
                        description: "",
                        assigned_layer: this.audit[0].assigned_layer,
                        assigned_group: this.audit[0].assigned_group
                    })
                }
            }
        },
        updateAnswersCommentByID(currentQuestionID: number, comment: string, description: string) {

        },
        finishAudit() {
            // alle nicht verwendeten comments und descriptions löschen
        }
    }
}
)