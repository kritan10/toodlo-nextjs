'use client'

import { useContext } from 'react'
import Modal from 'react-modal'
import { useForm } from 'react-hook-form'
import { TasksDispatchContext } from '@/app/providers/tasks'
import { ACTIONTYPE, Task } from '@/app/interfaces'

Modal.setAppElement('#add-task')

interface IFormInput {
    title: string
    category: string
    deadline: string
}

function TaskDialog({
    modal,
    setModal,
}: {
    modal: boolean
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const { register, handleSubmit } = useForm<IFormInput>()
    const taskDispatcher = useContext(TasksDispatchContext) as (
        action: ACTIONTYPE
    ) => Task[] | null
    function onSubmit(data: IFormInput) {
        taskDispatcher({
            type: 'addTask',
            payload: {
                id: Date.now().toString(),
                title: data.title,
                category: data.category,
                deadline: data.deadline,
                isCompleted: false,
                isImportant: false,
            },
        })
        setModal(false)
        console.log(data)
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
            <form onSubmit={handleSubmit(onSubmit)}>
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
                        {...register('title')}
                        required
                    />
                </div>
                <div className="py-2">
                    <h2 className="inline-block pr-2 font-semibold">
                        Deadline
                    </h2>

                    <label>
                        <input
                            className="ml-5 mr-1"
                            {...register('deadline')}
                            type="radio"
                            value="today"
                            checked
                        />
                        Today
                    </label>

                    <label>
                        <input
                            className="ml-5 mr-1"
                            {...register('deadline')}
                            type="radio"
                            value="tomorrow"
                        />
                        Tommorow
                    </label>

                    <label>
                        <input
                            className="ml-5 mr-1"
                            {...register('deadline')}
                            type="radio"
                            value="week"
                        />
                        A Week
                    </label>
                </div>
                <div className="py-2">
                    <label className="pr-4 font-semibold">Category</label>
                    <select className="p-2" {...register('category')}>
                        <option defaultChecked>My Day</option>
                        <option>Personal</option>
                        <option>Projects</option>
                    </select>
                </div>
                <div className="my-2 flex justify-end">
                    <input
                        className="mx-5 bg-main bg-opacity-90 text-bg rounded-md px-5 py-1.5 cursor-pointer hover:opacity-75 transition-opacity"
                        type="submit"
                        value="Add"
                    />
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
