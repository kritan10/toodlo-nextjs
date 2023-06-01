export interface Task {
    id: string
    title: string
    category: string
    deadline: string
    isCompleted: boolean
    isImportant: boolean
}

export type ACTIONTYPE =
    | { type: 'addTask'; payload: Task }
    | { type: 'editTask'; payload: Task }
    | { type: 'deleteTask'; payload: string }
    | { type: 'starTask'; payload: string }
    | { type: 'completeTask'; payload: string }

export enum TaskFilter {
    MyDay = 'My Day',
    Important = 'Important',
    Personal = 'Personal',
    Project = 'Projects',
    Completed = 'Completed',
    AllTasks = 'All Tasks'
}
