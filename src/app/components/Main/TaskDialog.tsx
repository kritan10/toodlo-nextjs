'use client'

import { useContext, useState } from 'react'
import Modal from 'react-modal'
import { TasksDispatchContext } from '@/app/providers/tasks'
import { ACTIONTYPE, Task } from '@/app/interfaces'
import { TaskFilter } from '@/app/interfaces'

Modal.setAppElement('#add-task')

function TaskDialog({
    modal,
    setModal,
}: {
    modal: boolean
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const [title, setTitle] = useState('')
    const [deadline, setDeadline] = useState('')
    const [category, setCategory] = useState('')

    const taskDispatcher = useContext(TasksDispatchContext) as (
        action: ACTIONTYPE
    ) => Task[] | null

    function onSubmitHandler() {
        taskDispatcher({
            type: 'addTask',
            payload: {
                id: Date.now().toString(),
                title: title,
                category: category,
                deadline: deadline,
                isCompleted: false,
                isImportant: false,
            },
        })
        setModal(false)
    }
    return (
        <Modal
            isOpen={modal}
            onRequestClose={() => setModal(false)}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    transform: 'translate(-50%, -50%)',
                },
            }}
        >
            <form>
                <h1 className="pb-5 text-xl font-bold font-['Barlow']">
                    Add Task
                </h1>
                <div className="py-2 flex items-center">
                    <label htmlFor="task-title" className="pr-4 font-semibold">
                        Title
                    </label>
                    <input
                        id="task-title"
                        className="w-full px-3 py-1.5 rounded-md border-2 border-alt"
                        placeholder="e.g. buy groceries"
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="py-2">
                    <h2 className="inline-block pr-2 font-semibold">
                        Deadline
                    </h2>

                    <label>
                        <input
                            onChange={(e) => {
                                setDeadline(e.target.value)
                            }}
                            className="ml-5 mr-1"
                            type="radio"
                            checked={deadline === 'today'}
                            value="today"
                        />
                        Today
                    </label>

                    <label>
                        <input
                            onChange={(e) => {
                                setDeadline(e.target.value)
                            }}
                            className="ml-5 mr-1"
                            type="radio"
                            checked={deadline === 'tomorrow'}
                            value="tomorrow"
                        />
                        Tommorow
                    </label>

                    <label>
                        <input
                            onChange={(e) => {
                                setDeadline(e.target.value)
                            }}
                            className="ml-5 mr-1"
                            type="radio"
                            checked={deadline === 'week'}
                            value="week"
                        />
                        A Week
                    </label>
                </div>
                <div className="py-2">
                    <label className="pr-4 font-semibold">Category</label>
                    <select
                        className="p-2"
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value)
                        }}
                    >
                        <option value={TaskFilter.MyDay}>My Day</option>
                        <option value={TaskFilter.Personal}>Personal</option>
                        <option value={TaskFilter.Project}>Projects</option>
                    </select>
                </div>
                <div className="my-2 flex justify-end">
                    <button
                        className="mx-5 bg-main bg-opacity-90 text-bg rounded-md px-5 py-1.5 cursor-pointer hover:opacity-75 transition-opacity"
                        type="button"
                        onClick={onSubmitHandler}
                    >
                        Add
                    </button>
                    <button
                        type="button"
                        onClick={() => setModal(false)}
                        className="border-2 border-slate-300 rounded-md px-3 py-1.5 cursor-pointer hover:bg-red-200 hover:border-red-200 transition"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </Modal>
    )
}

export default TaskDialog
