import { ACTIONTYPE, Task } from '@/app/interfaces'
import { TasksDispatchContext } from '@/app/providers/tasks'
import { useContext } from 'react'
import { FaEdit, FaStar, FaTrash, FaCheckCircle } from 'react-icons/fa'

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
    function taskEditHandler() {}

    return (
        <div className=" m-4 p-2 border-[1px] border-slate-200 rounded-lg flex items-center bg-white bg-opacity-50">
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
                    id="edit_task"
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
        </div>
    )
}

export default Task
