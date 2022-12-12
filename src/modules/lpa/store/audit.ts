import { defineStore } from "pinia";
import axios from 'axios';
import { Audit } from "../interfaces/audit";
import { User } from "../../../interfaces/user"

export const useAudit = defineStore('Audit', {
    state: () => ({
        audit: [] as Audit[],
        currentAudit: 1,
        audited_user_id: 1,
        audited_user: [] as User[]
    }),
    getters: {
        getListItems(){
            
        }
    },
    actions: {
        async fetchAudit() {
            try {
                const data = await axios.get(
                    "http://localhost:3000/dataAuditByID"
                );
                this.audit = data.data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        async fetchUser() {
            try {
                const data = await axios.get(
                    "http://localhost:3000/dataUserByID"
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
                }else if(i == this.audit[0].answers.length-1){
                    this.audit[0].answers.push({
                        id: this.audit[0].answers.length,
                        audit_id: this.audit[0].id,
                        question_id: currentQuestionID,
                        answer: emojyType,
                        comment: "",
                        description: "",
                        layer: this.audit[0].assigned_layer,
                        group: this.audit[0].assigned_group
                    })
                }
            }
        },
        updateAnswersCommentByID(currentQuestionID: number, comment: string, description: string){

        },
        finishAudit(){
            // alle nicht verwendeten comments und descriptions löschen
        }
    }
}
)