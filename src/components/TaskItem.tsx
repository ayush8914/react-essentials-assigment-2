import { useContext, useState } from "react"
import TaskContext from "../context/TaskContext"
import type { Task } from "../context/Type"
import Model from "./Model"
import EditTask from "./EditTask"
import DeleteAlert from "./DeleteAlert"
import ViewTask from "./ViewTask"

function TaskItem(props: {
  task : Task
}) {
  const [isEdit, setIsEdit] = useState(false)
  const [isDeleteAlert, setIsDeleteAlert] = useState(false)
  const [isViewModel, setIsViewModel] = useState(false);
  const {toggleTask} : any = useContext(TaskContext);

  return (
    <div className={`shadow-md p-5 rounded-md hover:bg-gray-100 hover:-translate-y-1 ${props.task.isCompleted ? "bg-gray-800/10" : ""}`}>
        <div key={props.task.id} className="flex justify-between">
                <div className="flex flex-col">
                    <div className="flex gap-4 mb-3">
                          <h1 className={`font-semibold ${props.task.isCompleted ? "line-through" : ""}`}>{props.task.title.length > 40 ? props.task.title.slice(0, 40) + "..." : props.task.title}</h1>
                          <span className={`${props.task.priority === "low" ? "bg-green-100 text-green-800" : props.task.priority === "medium" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"} text-xs font-semibold mr-2 px-2.5 py-0.5 rounded h-fit`}>
                              {props.task.priority}
                          </span>
                    </div>
                    <span className={`${props.task.isCompleted ? "line-through" : ""}`}>
                        {props.task.description.length > 100 ? props.task.description.slice(0, 100) + "..." : props.task.description}
                    </span>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="flex items-start gap-3">
                      <button onClick={()=>toggleTask(props.task.id)} className={`rounded-sm hover:bg-green-100 hover:p-1 hover:cursor-pointer hover:text-green-700 ${props.task.isCompleted ? " text-green-700" : ""}`}>
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                      </button>
                      <button onClick={()=>setIsDeleteAlert(true)} className="rounded-sm hover:bg-red-100 hover:p-1 hover:cursor-pointer hover:text-red-700 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                      </button>
                       <Model isOpen={isDeleteAlert} onClose={() => setIsDeleteAlert(false)} title="Delete Task" showCloseButton={true}>
                             <DeleteAlert taskID={props.task.id} alertMsg="Are you sure you want to delete this task?" onClose={() => setIsDeleteAlert(false)}/>
                      </Model>
                      <button onClick={()=>setIsEdit(true)} className="rounded-sm hover:bg-yellow-100 hover:p-1 hover:cursor-pointer hover:text-yellow-700 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                      </button>
                      <Model isOpen={isEdit} onClose={() => setIsEdit(false)} title="Update Task" showCloseButton={true}>
                              <EditTask task={props.task} onClose={() => setIsEdit(false)}/>
                      </Model>
                  </div>
                  <div className="flex items-center justify-end ">
                    <div className="flex gap-2 items-center text-blue-700 cursor-pointer hover:text-blue-900 hover:bg-sky-200 bg-sky-100 rounded-md px-2 py-1 text-sm"
                    onClick={()=>setIsViewModel(true)}>
                      View
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    </div>
                    <Model title="View Details" showCloseButton={true} isOpen={isViewModel} onClose={() => setIsViewModel(false)} >
                          <ViewTask task={props.task}/>
                    </Model>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default TaskItem