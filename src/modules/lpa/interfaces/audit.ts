import { Question } from "./question"
import { Answer } from "./answer"
import {User, Layer, Group} from "../../../libraries/interfaces"

export interface Audit {
    answers: Answer[],
    assigned_group: Group,
    assigned_group_id: number
    assigned_layer: Layer,
    assigned_layer_id: number,
    audited_user: User,
    audited_user_id: number,
    auditor: User,
    auditor_user_id: number,
    complete_datetime: string,
    created_by_user: User,
    created_by_user_id: number,
    due_date: string,
    duration: number,
    id: number,
    questions: Question[],
    recurrent_audit: boolean
}