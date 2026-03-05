import React from 'react'
import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import Button from './Button';

function DeleteAlert(props : any) {
    const {deleteTask, deleteAll} : any = useContext(TaskContext)

    const handleDelete = () => {
    if(props.isDeleteAll){
        deleteAll();
    }
    else{
        deleteTask(props.taskID);
    }
      props.onClose();
    }
  return (
    <div>
        <p className='mb-3 text-xl text-gray-600'>{props.alertMsg}</p>
        <div className="flex gap-3">
            <Button label="Delete" bgColor="bg-red-500" bgColorHover="hover:bg-red-600" onClick={handleDelete}/>
            <Button label="Cancel" bgColor="bg-gray-400" bgColorHover="hover:bg-gray-600" onClick={props.onClose}/>
        </div>
    </div>
  )
}

export default DeleteAlert