
function ViewTask(props : any) {
  return (
    <div className="rounded-md p-1 text-md">
        <div>
            <div className="flex justify-between items-start border-b px-2 py-1 border-gray-200">
                <p className='mb-1 text-gray-600  pt-2'>
                    <span className="font-bold">Task</span> : {props.task.title}
                </p>
                <span className={`${props.task.priority === "low" ? "bg-green-100 text-green-800" : props.task.priority === "medium" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"} text-xs font-semibold mr-2 px-2.5 py-0.5 rounded h-fit`}>
                              {props.task.priority}
                </span>
            </div>
            <p className='mb-2 text-gray-600 p-2'>
               <span className="font-bold">Description</span>: {props.task.description}
            </p> 
        </div>
    </div>
  )
}

export default ViewTask