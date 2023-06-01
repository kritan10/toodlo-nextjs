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
                        className="w-full p-1 rounded-md border-2 border-alt"
                        {...register('title')}
                    />
                </div>
                <div className="py-2">
                    <h2 className="inline-block pr-2 font-semibold">
                        Deadline
                    </h2>
                    <input
                        id="deadline-today"
                        className="ml-5 mr-1"
                        {...register('deadline')}
                        type="radio"
                        value="today"
                        checked
                    />
                    <label htmlFor="deadline-today">Today</label>
                    <input
                        id="deadline-tommorow"
                        className="ml-5 mr-1"
                        {...register('deadline')}
                        type="radio"
                        value="tomorrow"
                    />
                    <label htmlFor="deadline-tommorow">Tommorow</label>
                    <input
                        id="deadline-week"
                        className="ml-5 mr-1"
                        {...register('deadline')}
                        type="radio"
                        value="week"
                    />
                    <label htmlFor="deadline-week">A Week</label>
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
                        className="mx-5 bg-slate-300 px-3 py-1"
                        type="submit"
                        value="Add"
                    />
                    <button
                        type="button"
                        onClick={() => setModal(false)}
                        className="bg-slate-300 px-3 py-1"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </Modal>
    )
}

export default TaskDialog
