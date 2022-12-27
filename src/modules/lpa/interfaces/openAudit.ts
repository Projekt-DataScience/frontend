import { User } from "../../../interfaces/user"
import { Group } from "../../../interfaces/group"
import { Layer } from "../../../interfaces/layer"
import { Question } from "./question"
import { Answer } from "./answer"

export interface OpenAudit {
    id: number,
    due_date: string,
    complete_datetime: string,
    duration: number,
    recurrent_audit: boolean,
    created_by_user: User,
    audited_user: number,
    auditor: User,
    assigned_group: Group,
    assigned_layer: Layer,
    questions: Question[],
    answers: Answer[]

}