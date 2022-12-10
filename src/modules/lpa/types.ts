export interface Questions {
    id: number,
    title: string,
    description: string,
    category: string,
    layer: number,
    group: string
}

export interface StructuredQuestions {
    id: number,
    title: string,
    description: string,
    listItems: any
}