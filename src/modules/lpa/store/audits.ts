import { defineStore } from "pinia";
import axios from 'axios';
import { Audit } from "../interfaces/audit";
import { User } from "../../../interfaces/user";
import { AnswerReason } from "../interfaces/answerReason"
import { Duration } from "../interfaces/duration";
import authHeader from "../../../services/auth-header";

export interface PushAnswer {
    question_id: number,
    answer_reason_id: number | null,
    comment: string,
    answer: number
}

export const useAudit = defineStore('Audit', {
    state: () => ({
        audit: {} as Audit,
        currentAuditID: 0,
        currentAuditActive: false,
        currentUser: 3,
        audited_user_id: 0,
        audited_user: {} as User,
        reasons: [] as AnswerReason[],
        openAudits: [] as Audit[],
        durations: [] as Duration[],
        employees: [] as User[],
        pushAnswer: [] as PushAnswer[]
    }),
    actions: {
        async fetchAudit() {
            try {
                const response = await axios.get(
                    import.meta.env.VITE_GW_AUDIT_URL + "lpa_audit/" + this.currentAuditID,
                    authHeader()
                );
                this.audit = response.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        async fetchReasons() {
            try {
                const response = await axios.get(
                    import.meta.env.VITE_GW_AUDIT_URL + "lpa_answer/reason",
                    authHeader()
                );
                this.reasons = response.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        async fetchUser() {

            try {
                const response = await axios.get(
                    import.meta.env.VITE_GW_USERMANAGEMENT_URL + "user/" + this.currentUser,
                    authHeader()
                );
                this.audited_user = response.data.data;
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
        updateDurations(context: string, duration: number) {
            this.durations.push({
                context: context,
                duration: duration
            })
        },
        async fetchOpenAudits() {
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
        startNewAudit(audited_user_id: number, currentAuditID: number) {
            this.audited_user_id = audited_user_id;
            this.currentAuditID = currentAuditID;
            this.currentAuditActive = true;
            this.durations = [];
        },
        async finishAudit() {
            // clear pushAnswers
            this.pushAnswer = []

            // delete all unused descriptions and comments
            for (let i = 0; i < this.audit.answers.length; i++) {
                if(this.audit.answers[i].answer === "green" || this.audit.answers[i].answer === "yellow"){
                    this.audit.answers[i].description = "";
                    this.audit.answers[i].comment = "";
                }
            }

            // generate push answer array
            for (let i = 0; i < this.audit.answers.length; i++) {
                // replace String with number
                var answer = 0;
                if(this.audit.answers[i].answer === "green"){
                    answer = 0;
                }else if(this.audit.answers[i].answer === "yellow"){
                    answer = 1;
                }else if (this.audit.answers[i].answer === "red"){
                    answer = 2;
                }else{
                    console.log("Nicht alle Antworten wurden beantwortet!");
                    return;
                }

                // replace answer_reason_id with integer
                var tmpReason: number | null = 0;
                if(this.audit.answers[i].answer !== "red"){
                    tmpReason = 0;
                }else{
                    tmpReason = parseInt(this.audit.answers[i].description);
                }

                // push new entry
                this.pushAnswer.push({
                    question_id: this.audit.answers[i].question_id,
                    answer_reason_id: tmpReason,
                    comment: this.audit.answers[i].comment,
                    answer: answer
                })
            }

            var body = {
                audited_user_id: this.audited_user.id,
                answers: this.pushAnswer,
                durations: this.durations
            }

            console.log(body);

            // fetch to gateway
            try {
                const response = await axios.post(
                    import.meta.env.VITE_GW_AUDIT_URL + 'lpa_audit/complete/'+this.audit.id, 
                    body,
                    authHeader()
                );
                console.log(response);
            } catch (error) {
                alert(error);
                console.log(error);
            }

            // audit reset
            this.currentAuditActive = false;
        },
        async fetchEmployees(group_id: number, layer_id: number){
            try {
                const data = await axios.get(
                    import.meta.env.VITE_GW_USERMANAGEMENT_URL + "groups/employee/" + group_id + "/" + layer_id,
                    authHeader()
                );
                this.employees = data.data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        }
    }
}
)