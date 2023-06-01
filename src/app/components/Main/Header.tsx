'use client'

import { useContext, useState } from 'react'
import TaskDialog from './TaskDialog'
import { FilterContext } from '@/app/providers/taskFilter'

function Header() {
    const [modal, setModal] = useState<boolean>(false)
    const currentTaskFilter = useContext(FilterContext)
    const today = new Date(Date.now())

    return (
        <>
            <div
                id="add-task"
                className="flex justify-between items-center p-2 pb-4 border-b-2"
            >
                <div>
                    <h1 className="text-xl font-bold">{currentTaskFilter}</h1>
                    <h2 className="text-sm opacity-75">
                        {today.toDateString()}
                    </h2>
                </div>
                <button
                    className="bg-main py-2 px-4 text-bg rounded-md hover:opacity-90 hover:translate-y-[-5%] hover:shadow-lg hover:shadow-blue-200 transition"
                    onClick={() => setModal(true)}
                >
                    Add Task +
                </button>
            </div>
            <TaskDialog modal={modal} setModal={setModal} />
        </>
    )
}

export default Header
