import { defineStore } from "pinia";
import axios from 'axios';
import { Audit } from "../interfaces/audit";
import { User } from "../../../interfaces/user"

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
        } as User
    }),
    getters: {
        getListItems() {

        }
    },
    actions: {
        async fetchAudit() {
            try {
                const data = await axios.get(
                    "http://localhost:80/api/audit/lpa_audit/" + 1
                );
                this.audit = data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        async fetchUser() {
            var token =   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJleHBpcmVzIjoxNjcwOTc0OTM5Ljc3MDA0NCwiY29tcGFueV9pZCI6MSwicm9sZSI6IndvcmtlciJ9.iC__ijHirm9WAHuLTxr48a9hX5MOh6EW27kj_zgO8Io"



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