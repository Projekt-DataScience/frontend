import {User, Layer, Group} from "../../../libraries/interfaces"

export interface PlannedAudit {
    id: number,
    auditor: User,
    group: Group,
    layer: Layer,
    question_count: number,
    recurrence_type: string,
    values: string[]
}