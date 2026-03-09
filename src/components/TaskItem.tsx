import { useContext, useState } from "react"
import TaskContext from "../context/TaskContext"
import type { Task } from "../context/Type"
import Model from "./Model"
import EditTask from "./EditTask"
import DeleteAlert from "./DeleteAlert"
import ViewTask from "./ViewTask"
import { CircleCheckBig , Trash2 ,SquarePen ,Eye } from 'lucide-react';

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
                      <button onClick={()=>toggleTask(props.task.id)} className={`rounded-sm hover:bg-green-100  hover:cursor-pointer hover:text-green-700 ${props.task.isCompleted ? " text-green-700" : ""}`}>
                          <CircleCheckBig strokeWidth={1.5}  />
                      </button>
                      <button onClick={()=>setIsDeleteAlert(true)} className="rounded-sm hover:bg-red-100   hover:cursor-pointer hover:text-red-700 ">
                          <Trash2 strokeWidth={1.5} />
                      </button>
                       <Model isOpen={isDeleteAlert} onClose={() => setIsDeleteAlert(false)} title="Delete Task" showCloseButton={true}>
                             <DeleteAlert taskID={props.task.id} alertMsg="Are you sure you want to delete this task?" onClose={() => setIsDeleteAlert(false)}/>
                      </Model>
                      <button onClick={()=>setIsEdit(true)} className="rounded-sm hover:bg-yellow-100   hover:cursor-pointer hover:text-yellow-700 ">
                            <SquarePen strokeWidth={1.5} />
                      </button>
                      <Model isOpen={isEdit} onClose={() => setIsEdit(false)} title="Update Task" showCloseButton={true}>
                              <EditTask task={props.task} onClose={() => setIsEdit(false)}/>
                      </Model>
                  </div>
                  <div className="flex items-center justify-end ">
                    <div className="flex gap-2 items-center text-blue-700 cursor-pointer hover:text-blue-900 hover:bg-sky-200 bg-sky-100 rounded-md px-2 py-1 text-sm"
                    onClick={()=>setIsViewModel(true)}>
                      View
                      <Eye strokeWidth={1.5} />
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