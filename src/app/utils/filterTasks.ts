import { Task, TaskFilter } from '../interfaces'

export default function filterTasks(tasks: Task[], filter: TaskFilter): Task[] {
    switch (filter) {
        case TaskFilter.AllTasks:
            return [...tasks]
        case TaskFilter.MyDay:
            return [
                ...tasks.filter(
                    (task) => task.deadline.toLowerCase() === 'today'
                ),
            ]
        case TaskFilter.Important:
            return [...tasks.filter((task) => task.isImportant === true)]
        case TaskFilter.Personal:
            return [
                ...tasks.filter(
                    (task) => task.category.toLowerCase() === 'personal'
                ),
            ]

        case TaskFilter.Project:
            return [
                ...tasks.filter(
                    (task) => task.category.toLowerCase() === 'projects'
                ),
            ]
        case TaskFilter.Completed:
            return [...tasks.filter((task) => task.isCompleted === true)]

        default:
            return tasks
    }
}
