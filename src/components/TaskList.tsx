
import TaskContext from "../context/TaskContext"
import { useContext } from "react"
import TaskItem from "./TaskItem"

function TaskList() {
  const {tasks} : any = useContext(TaskContext)
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          tasks.map((task : any) =>(  <TaskItem task={task} key={task.id} />))}
    </div>
    {tasks.length === 0 && <p className="flex justify-center text-gray-600">No tasks found</p>}
  </>
  )
}

export default TaskList