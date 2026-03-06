import TaskContext from "./TaskContext"
import { useMemo, useReducer, type ReactNode} from "react"
import { TaskReducer } from "./TaskReducer"
import { initialState } from "../db"
import { Actions } from "./TaskActions"
import type { Task , Filter } from "../context/Type"

function TaskContextProvider({children}: {children: ReactNode}) {
  const [state, dispatch] = useReducer(TaskReducer,initialState)

  const addTask = (task: {
    title: string,
    description: string,
    priority: string,
  }) => {
    dispatch({type: Actions.ADD_TASK,payload:task})
   
  }

  const deleteTask = (id : string) => {
    dispatch({type: Actions.DELETE_TASK,payload:id})
  }

  const editTask = (task : {
    id : string,
    title : string,
    description : string,
    priority : string
  }) => {
      console.log(task)
      dispatch({type: Actions.EDIT_TASK,payload:task})
  }

  const deleteAll = () => {
    dispatch({type: Actions.DELETE_ALL, payload: null})
  }

  const toggleTask = (id: string)=>{
      dispatch({type: Actions.TOGGLE_TASK,payload:id})
  }

  const filterTask = (filter : Filter) => {
    dispatch({type: Actions.FILTER_TASK,payload:filter})
  }

  const undoTask = () => {
    dispatch({type: Actions.UNDO_TASK,payload:null})
  }

   const taskStats = {
        total : state.tasks.length,
        completed : state.tasks.filter((task : Task) => task.isCompleted).length,
        pending : state.tasks.filter((task : Task)=> !task.isCompleted).length
    }
  
    const filteredTasks = useMemo(() => {
      console.log("filtered tasks")
      if(state.filter === "all") return state.tasks;
      if(state.filter === "completed") return state.tasks.filter((task : Task) => task.isCompleted);
      if(state.filter === "pending") return state.tasks.filter((task : Task) => !task.isCompleted);
      return state.tasks;
    },[state.tasks,state.filter] )


  const value :any = {
        tasks : filteredTasks,
        filter : state.filter,
        searchTerm : state.searchTerm,
        history : state.history,
        taskStats,
        addTask,
        deleteTask,
        editTask,
        deleteAll,
        toggleTask,
        filterTask,
        undoTask
  }

  return (
    <TaskContext.Provider value={value}>
        {children}
    </TaskContext.Provider>
  )
}

export default TaskContextProvider