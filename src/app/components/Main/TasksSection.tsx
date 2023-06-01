'use client'

import MyTask from './Task'
import { useContext } from 'react'
import { TasksContext } from '@/app/providers/tasks'
import { FilterContext } from '@/app/providers/taskFilter'
import filterTasks from '@/app/utils/filterTasks'

function TasksSection() {
    const allTasks = useContext(TasksContext)
    const taskFilter = useContext(FilterContext)

    var tasks
    if (allTasks !== null) {
        tasks = filterTasks(allTasks, taskFilter)
    } else {
        tasks = null
    }

    return (
        <div className="mt-10">
            {tasks === null || tasks.length === 0 ? (
                <p className="border-2 opacity-50 rounded-md p-16 text-center">
                    + Start by adding a task
                </p>
            ) : (
                tasks.map((task) => {
                    return <MyTask key={task.id} task={task} />
                })
            )}
        </div>
    )
}

export default TasksSection
