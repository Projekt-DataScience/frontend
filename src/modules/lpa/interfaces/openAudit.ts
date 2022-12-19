import { User } from "../../../interfaces/user"
import { Group } from "../../../interfaces/group"
import { Layer } from "../../../interfaces/layer"

export interface OpenAudit {
    id: number,
    created_by_user_id: User,
    auditor_user_id: User,
    assigned_layer: Layer,
    due_date: string,
    recurrent_audit: false,
    assigned_group: Group
}