'use client'

import { ACTIONTYPE, Task } from '@/app/interfaces'
import { TasksDispatchContext } from '@/app/providers/tasks'
import { useContext, useRef, useState } from 'react'
import { FaEdit, FaStar, FaTrash, FaCheckCircle, FaSave } from 'react-icons/fa'

function Task({ task }: { task: Task }) {
    const taskDispatcher = useContext(TasksDispatchContext) as (
        action: ACTIONTYPE
    ) => Task[] | null

    function taskImportantHandler() {
        taskDispatcher({ type: 'starTask', payload: task.id })
    }
    function taskCompletedHandler() {
        taskDispatcher({ type: 'completeTask', payload: task.id })
    }
    function taskDeleteHandler() {
        taskDispatcher({ type: 'deleteTask', payload: task.id })
    }

    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [newTitle, setTitle] = useState<string>(task.title)
    const inputRef = useRef<HTMLInputElement>(null!)

    function taskEditHandler() {
        setIsEdit(true)
        setTimeout(() => {
            if (inputRef !== null && inputRef.current !== null) {
                inputRef.current.focus()
            }
        }, 1)
    }

    function taskEditSaveHandler() {
        taskDispatcher({
            type: 'editTask',
            payload: { id: task.id, title: newTitle },
        })
        setIsEdit(false)
    }

    return (
        <div className=" m-4 p-2 border-[1px] border-slate-200 rounded-lg flex items-center bg-white bg-opacity-50">
            {isEdit ? (
                <div className=" py-2 px-6 flex items-center justify-between w-full">
                    <input
                        ref={inputRef}
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                taskEditSaveHandler()
                            }
                        }}
                        value={newTitle}
                        className="mr-5 border-2 border-alt p-1 rounded-md"
                    />
                    <button onClick={taskEditSaveHandler}>
                        <FaSave
                            size="28"
                            className="icon-btn hover:bg-blue-100"
                            fill="#0ea5e9"
                        />
                    </button>
                </div>
            ) : (
                <>
                    <div className="mx-3">
                        <FaCheckCircle
                            fill={task.isCompleted ? '#65a30d' : ''}
                            onClick={taskCompletedHandler}
                            className={'icon-btn'}
                            size="24"
                        />
                    </div>
                    <div className="p-2">
                        <p
                            className={
                                task.isCompleted
                                    ? 'line-through mb-1'
                                    : 'font-semibold mb-1'
                            }
                        >
                            {task.title}
                        </p>
                        <p className="text-xs capitalize">
                            {task.isCompleted ? (
                                'Completed'
                            ) : (
                                <span>
                                    {task.deadline} - {task.category}
                                </span>
                            )}
                        </p>
                    </div>
                    <div className="flex w-[15%] justify-between mr-4 items-center ml-auto">
                        <FaEdit
                            onClick={taskEditHandler}
                            fill="#0ea5e9"
                            size="28"
                            className="icon-btn hover:bg-blue-100"
                        />

                        <FaTrash
                            onClick={taskDeleteHandler}
                            fill="#ef4444"
                            size="26"
                            className="icon-btn hover:bg-red-100"
                        />
                        <FaStar
                            onClick={taskImportantHandler}
                            size="28"
                            className={'icon-btn'}
                            fill={task.isImportant ? '#fbbf24' : ''}
                        />
                    </div>
                </>
            )}
        </div>
    )
}

export default Task
