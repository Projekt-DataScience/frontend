export interface AnswerByQuestion {
    green: [
        {
            id: number,
            audit_id: number,
            question_id: number,
            answer: string,
            comment: string,
            reason: {
                description: string
            },
        }
    ],
    yellow: [
        {
            id: number,
            audit_id: number,
            question_id: number,
            answer: string,
            comment: string,
            reason: {
                description: string
            },
        }
    ],
    red: [
        {
            id: number,
            audit_id: number,
            question_id: number,
            answer: string,
            comment: string,
            reason: {
                description: string
            },
        }
    ]
}