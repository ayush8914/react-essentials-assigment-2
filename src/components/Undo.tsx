import { useContext } from 'react'
import TaskContext from '../context/TaskContext'
import { RotateCcw } from 'lucide-react';

function Undo() {
    const {undoTask} : any = useContext(TaskContext)
  return (
    <div>
        <div className="flex gap-1 cursor-pointer bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-300"
        onClick={()=>undoTask()}>
                    <RotateCcw/>
                    Undo
            </div>
    </div>
  )
}

export default Undo