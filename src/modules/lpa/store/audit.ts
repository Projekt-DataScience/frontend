import { defineStore } from "pinia";
import axios from 'axios';
import { Audit } from "../interfaces/audit";
import { User } from "../../../interfaces/user";
import { AnswerReason } from "../interfaces/answerReason"

export const useAudit = defineStore('Audit', {
    state: () => ({
        audit: {} as Audit,
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
        } as User,
        reasons: [] as AnswerReason[],

    }),
    getters: {
        getListItems() {

        }
    },
    actions: {
        async fetchAudit() {
            try {
                const data = await axios.get(
                    import.meta.env.VITE_GW_AUDIT_URL + "lpa_audit/" + 6
                );
                this.audit = data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        async fetchReasons() {
            try {
                const data = await axios.get(
                    import.meta.env.VITE_GW_AUDIT_URL + "lpa_answer/reason"
                );
                this.reasons = data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        async fetchUser() {
            var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJleHBpcmVzIjoxNjcwOTc0OTM5Ljc3MDA0NCwiY29tcGFueV9pZCI6MSwicm9sZSI6IndvcmtlciJ9.iC__ijHirm9WAHuLTxr48a9hX5MOh6EW27kj_zgO8Io"

            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            try {
                const data = await axios.get(
                    "http://localhost:80/api/user_management/user/3",
                    config
                );
                this.audited_user = data.data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        updateAnswersByID(currentQuestionID: number, emojyType: string) {
            if (this.audit.answers.length !== 0) {
                for (let i = 0; i < this.audit.answers.length; i++) {
                    if (this.audit.answers[i].question_id == currentQuestionID) {
                        this.audit.answers[i].answer = emojyType;
                        i = this.audit.answers.length;
                    } else if (i == this.audit.answers.length - 1) {
                        this.audit.answers.push({
                            id: this.audit.answers.length,
                            audit_id: this.audit.id,
                            question_id: currentQuestionID,
                            answer: emojyType,
                            comment: "",
                            description: "",
                            assigned_layer: this.audit.assigned_layer,
                            assigned_group: this.audit.assigned_group
                        })
                    }
                }
            } else {
                this.audit.answers.push({
                    id: this.audit.answers.length,
                    audit_id: this.audit.id,
                    question_id: currentQuestionID,
                    answer: emojyType,
                    comment: "",
                    description: "",
                    assigned_layer: this.audit.assigned_layer,
                    assigned_group: this.audit.assigned_group
                })
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