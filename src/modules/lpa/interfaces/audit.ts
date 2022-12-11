import { Question } from "./question"
import { Answer } from "./answer"
import { User } from "../../../interfaces/user"

export interface Audit {
    id: number,
    due_date: Date,
    duration: number,
    recurrent_audit: Boolean,
    questions: Question[],
    answers: Answer[],
    assigned_group: string,
    assigned_layer: string,
    auditor: User,
    created_by: User,
    audited_user: User
}