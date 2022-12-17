import { defineStore } from "pinia";
import axios from 'axios';
import { Audit } from "../interfaces/audit";
import { User } from "../../../interfaces/user";
import { AnswerReason } from "../interfaces/answerReason"
import authHeader from "../../../services/auth-header";

export const useAudit = defineStore('Audit', {
    state: () => ({
        audit: {} as Audit,
        currentAuditID: 0,
        currentAuditActive: false,
        currentUser: 3,
        audited_user_id: 0,
        audited_user: {} as User,
        reasons: [] as AnswerReason[],
        openAudits: [] as Audit[]

    }),
    actions: {
        async fetchAudit() {
            try {
                const data = await axios.get(
                    import.meta.env.VITE_GW_AUDIT_URL + "lpa_audit/" + this.currentAuditID,
                    authHeader()
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
                    import.meta.env.VITE_GW_AUDIT_URL + "lpa_answer/reason", 
                    authHeader()
                );
                this.reasons = data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        async fetchUser() {

            try {
                const data = await axios.get(
                    "http://localhost:80/api/user_management/user/" + this.currentUser,
                    authHeader()
                );
                this.audited_user = data.data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        updateAnswersByID(currentQuestionID: number, emojyType: string, description: string, comment: string) {
            if (this.audit.answers.length !== 0) {
                for (let i = 0; i < this.audit.answers.length; i++) {
                    if (this.audit.answers[i].question_id == currentQuestionID) {
                        this.audit.answers[i].answer = emojyType;
                        this.audit.answers[i].description = description;
                        this.audit.answers[i].comment = comment;
                        i = this.audit.answers.length;
                    } else if (i == this.audit.answers.length - 1) {
                        this.audit.answers.push({
                            id: this.audit.answers.length,
                            audit_id: this.audit.id,
                            question_id: currentQuestionID,
                            answer: emojyType,
                            comment: comment,
                            description: description,
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
                    comment: comment,
                    description: description,
                    assigned_layer: this.audit.assigned_layer,
                    assigned_group: this.audit.assigned_group
                })
            }
        },
        async fetchOpenAudits(){
            try {
                const data = await axios.get(
                    import.meta.env.VITE_GW_AUDIT_URL + "lpa_audit/open/" + this.currentUser,
                    authHeader()
                );
                this.openAudits = data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        startNewAudit(audited_user_id: number, currentAuditID: number){
            this.audited_user_id = audited_user_id;
            this.currentAuditID = currentAuditID;
            this.currentAuditActive = true;
        },
        finishAudit() {
            // alle nicht verwendeten comments und descriptions löschen
            this.currentAuditActive = false;
        }
    }
}
)