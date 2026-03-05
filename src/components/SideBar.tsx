import MenuItem from "./MenuItem"
import { useContext } from "react"
import TaskContext from "../context/TaskContext"

function SideBar(props : {
    handleToggle : () => void
    isSidebarOpen : boolean
}) {

const {taskStats, filterTask} : any = useContext(TaskContext)

  return (
    <>
        {props.isSidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 lg:hidden"
          onClick={props.handleToggle}
        />
      )}
    <div className="border-r border-gray-300  h-screen p-5 pr-3 w-full">
        <div className="flex flex-row justify-between items-center border-b border-gray-200 pb-3">
            <div className="flex gap-2 items-center justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
                </svg>

                <div className="text-xl flex items-center"> 
                    Task Manager
                </div>

            </div>
            <div className="flex flex-row justify-end" onClick={() => props.handleToggle()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-500 hover:text-gray-800">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
        <div className="mt-10 flex flex-col gap-2">
           <MenuItem menuName={"All Tasks"} itemCount={taskStats.total} onClick={() => filterTask("all")} />
           <MenuItem menuName={"Completed"} itemCount={taskStats.completed} onClick={() => filterTask("completed")} />
           <MenuItem menuName={"Pending"} itemCount={taskStats.pending} onClick={() => filterTask("pending")} />
        </div>
    </div>
    </>
  )
}

export default SideBar