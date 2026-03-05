import InputBox from "./InputBox"
import { useContext , useState } from "react"
import TaskContext from "../context/TaskContext"


function EditTask(props : any) {
  const [formData, setFormData] = useState({
    title : props.task.title,
    description : props.task.description,
    priority : props.task.priority 
  });
  const [error, setError] = useState({});
  const {editTask} : any = useContext(TaskContext);

  const validate = ()=>{
     const err : any = {};
     
     if(!formData.title) err.title = "Title is required";
     if(!formData.description) err.description = "Description is required";
     if(!formData.priority) err.priority = "Priority is required";

    setError(err);

    return Object.keys(err).length === 0
  }

  const handleEditTask = () => {
    if(!validate()) return;

    editTask({id: props.task.id,title: formData.title, description: formData.description, priority: formData.priority});
    props.onClose();

  }

  return (
    <div >
      <div className="border border-gray-300 w-full p-5 rounded-md flex flex-col">
          <InputBox label='Task Name'  placeHolder="Enter Task Name" value={formData.title.toString()} onChange={(e: any) => setFormData({
            ...formData,
            title : e.target.value
          })} />
          {error.title && (
          <p className="text-red-500 text-sm mb-2">{error.title}</p>
          )}
          <InputBox label="Task Description" placeHolder="Enter Task Description" value={formData.description}
          onChange={(e:any) => setFormData({...formData, description : e.target.value})} />
          {error.description && (
                <p className="text-red-500 text-sm mb-2">{error.description}</p>
          )}
          <label className="text-md font-sans font-semibold mb-2">Priority</label>
          <select className="border border-gray-300 rounded-sm px-3 py-1" value={formData.priority} onChange={(e:any) => setFormData({
            ...formData,
            priority : e.target.value
          })}>
            <option value="">Select Priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          {error.priority && (
                <p className="text-red-500 text-sm mb-2">{error.priority}</p>
          )}
          <div className="flex flex-row justify-center items-center mt-4">
              <button className="bg-gray-700 h-fit w-fit text-lg hover:bg-gray-800 text-white  py-2 px-4 rounded"
              onClick={handleEditTask}>Edit Task</button>
          </div>
      </div>
    </div>
  )
}

export default EditTask