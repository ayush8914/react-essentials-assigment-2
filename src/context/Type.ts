export type TaskAction = {type: string, payload: any}

export type Priority = "low" | "medium" | "high"

export type Filter = "all" | "completed" | "pending"

export type Task = {
    id : string,
    title:string,
    description:string,
    isCompleted : boolean,
    priority : Priority,
    createdAt : Date
}