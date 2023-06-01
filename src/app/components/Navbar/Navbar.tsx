'use client'

import Image from 'next/image'
import { TaskFilter } from '@/app/interfaces'
import { FilterContext, FilterSetterContext } from '@/app/providers/taskFilter'
import { useContext } from 'react'

function Navbar() {
    const taskCategories: TaskFilter[] = [
        TaskFilter.AllTasks,
        TaskFilter.MyDay,
        TaskFilter.Important,
        TaskFilter.Personal,
        TaskFilter.Project,
        TaskFilter.Completed,
    ]

    const currentTaskFilter = useContext(FilterContext)

    const setTaskFilter = useContext(FilterSetterContext) as React.Dispatch<
        React.SetStateAction<TaskFilter>
    >

    return (
        <div className="w-[25%] h-screen bg-alt overflow-scroll p-4">
            <Image
                src="/logo.png"
                alt="Toodlo"
                width={200}
                height={200}
                className="block mx-auto"
            />
            <nav className="p-2">
                {taskCategories.map((taskFilter, index) => (
                    <button
                        key={index}
                        onClick={() => setTaskFilter(taskFilter)}
                        className={`block w-full p-2 my-1 text-left rounded-md hover:bg-text hover:bg-opacity-10 ${
                            currentTaskFilter === taskFilter
                                ? ' bg-text bg-opacity-10'
                                : ''
                        }`}
                    >
                        {taskFilter}
                    </button>
                ))}
            </nav>
        </div>
    )
}

export default Navbar
