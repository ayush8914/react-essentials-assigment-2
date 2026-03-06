import  { useContext } from 'react'
import TaskContext  from '../context/TaskContext'

function Stats() {
    const {taskStats, filterTask, filter} : any = useContext(TaskContext)

  return (
    <div>
        <div className="flex gap-4 text-sm">
            <div onClick={()=>filterTask("all")} className={`bg-gray-100 px-4 py-2  rounded-full hover:bg-gray-300 hover:cursor-pointer hover:text-gray-900 ${filter === "All" ? "bg-gray-300 text-gray-900" : ""}`}>
                Total ({taskStats.total})
            </div>
            <div onClick={()=>filterTask("completed")} className={`bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-300 hover:cursor-pointer hover:text-gray-900 ${filter === "Completed" ? "bg-gray-300 text-gray-900" : ""}`}>
                Completed ({taskStats.completed})
            </div>
            <div onClick={()=>filterTask("pending")} className={`bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-300 hover:cursor-pointer hover:text-gray-900 ${filter === "Pending" ? "bg-gray-300 text-gray-900" : ""}`}>
                Pending ({taskStats.pending})
            </div>
        </div>
    </div>
  )
}

export default Stats