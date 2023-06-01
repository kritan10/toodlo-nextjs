'use client'

import { createContext, useEffect, useReducer } from 'react'
import { ACTIONTYPE, Task } from '../interfaces'

//creating context
export const TasksContext = createContext<Task[] | null>(null)
export const TasksDispatchContext = createContext(null as unknown)

//reducer state and function
const initialTasks: Task[] | null = null
// const initialTasks: Task[] | null = [
//     {
//         id: '1',
//         category: 'My Day',
//         deadline: 'Today',
//         isCompleted: false,
//         isImportant: false,
//         title: 'Buy potato',
//     },
//     {
//         id: '2',
//         category: 'Project',
//         deadline: 'Today',
//         isCompleted: false,
//         isImportant: false,
//         title: 'Complete task',
//     },
//     {
//         id: '3',
//         category: 'My Day',
//         deadline: 'A Week',
//         isCompleted: false,
//         isImportant: false,
//         title: 'Do homework',
//     },
// ]
const tasksReducer = (
    tasks: Task[] | null,
    action: ACTIONTYPE
): Task[] | null => {
    if (action.type === 'fetchTasks') {
        return action.payload
    }

    if (tasks === null) {
        if (action.type === 'addTask') {
            return [action.payload]
        }
        return null
    }

    switch (action.type) {
        case 'addTask':
            return [...tasks, action.payload]

        case 'editTask':
            const editTaskIndex = tasks.findIndex(
                (task) => task.id === action.payload.id
            )
            const editedTask = { ...tasks[editTaskIndex] }
            editedTask.title = action.payload.title
            tasks[editTaskIndex] = editedTask
            return [...tasks]

        case 'deleteTask':
            return [...tasks.filter((task) => task.id !== action.payload)]

        case 'starTask':
            const starTaskIndex = tasks.findIndex(
                (task) => task.id === action.payload
            )
            const starUpdatedTask = { ...tasks[starTaskIndex] }
            starUpdatedTask.isImportant = !starUpdatedTask.isImportant
            tasks[starTaskIndex] = starUpdatedTask
            return [...tasks]

        case 'completeTask':
            const completeTaskIndex = tasks.findIndex(
                (task) => task.id === action.payload
            )
            const completeUpdatedTask = { ...tasks[completeTaskIndex] }
            completeUpdatedTask.isCompleted = !completeUpdatedTask.isCompleted
            tasks[completeTaskIndex] = completeUpdatedTask
            return [...tasks]
        default:
            return tasks
    }
}

export default function TasksProvider({
    children,
}: {
    children: React.ReactNode
}) {
    useEffect(() => {}, [])
    const [tasksState, dispatch] = useReducer(tasksReducer, initialTasks)

    useEffect(() => {
        const savedTasks =
            localStorage.getItem('tasks') === null
                ? null
                : (JSON.parse(localStorage.getItem('tasks')!) as Task[])
        console.log(savedTasks)
        dispatch({ type: 'fetchTasks', payload: savedTasks })
        console.log('Works')
    }, [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasksState))
        console.log('Works')
    }, [tasksState])

    return (
        <TasksContext.Provider value={tasksState}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    )
}
