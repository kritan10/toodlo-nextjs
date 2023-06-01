'use client'

import MyTask from './Task'
import { useContext, useState } from 'react'
import { TasksContext } from '@/app/providers/tasks'
import { FilterContext } from '@/app/providers/taskFilter'
import filterTasks from '@/app/utils/filterTasks'
import { HashLoader } from 'react-spinners'

function TasksSection() {
    const allTasks = useContext(TasksContext)
    const taskFilter = useContext(FilterContext)
    const [isLoading, setIsLoading] = useState(true)

    var tasks
    if (allTasks !== null) {
        tasks = filterTasks(allTasks, taskFilter)
    } else {
        tasks = null
    }

    setTimeout(() => setIsLoading(false), 2000)

    return (
        <div className="mt-10">
            {isLoading ? (
                <div className="w-full h-[480px] grid place-items-center">
                    <HashLoader color="#4285f4" />
                </div>
            ) : (
                <>
                    {tasks === null || tasks.length === 0 ? (
                        <p className="border-2 opacity-50 rounded-md p-16 text-center">
                            + Start by adding a task
                        </p>
                    ) : (
                        tasks.map((task) => {
                            return <MyTask key={task.id} task={task} />
                        })
                    )}
                </>
            )}
        </div>
    )
}

export default TasksSection
