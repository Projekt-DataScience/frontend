import { Question } from "./question"
import { Answer } from "./answer"
import { User } from "../../../interfaces/user"
import { Group } from "../../../interfaces/group"
import { Layer } from "../../../interfaces/layer"

export interface PlannedAudit {
    id: number,
    auditor: User,
    group: Group,
    layer: Layer,
    question_count: number,
    recurrence_type: string,
    values: string[]
}