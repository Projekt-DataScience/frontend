import {Layer} from "../../../interfaces/layer"
import { Group } from "../../../interfaces/group"

export interface Answer {
    id: number,
    audit_id: number,
    question_id: number,
    answer: string,
    comment: string,
    description: string,
    assigned_group: Group,
    assigned_layer: Layer
}