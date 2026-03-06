import type { TaskAction , Task } from "./Type";
import { Actions } from "./TaskActions";

export const TaskReducer = (state: any, action: TaskAction) => {

    const updateHistory = (currentState: any) => {
        return {
            ...currentState,
            history : [
                {
                    tasks : state.tasks,
                    filter : state.filter,
                    searchTerm : state.searchTerm
                },
                ...state.history
            ].slice(0,10)
        }   
    }

    switch(action.type){
        case Actions.ADD_TASK:
            const newTask : Task ={
                id : Date.now().toString(),
                title: action.payload.title,
                description:action.payload.description,
                isCompleted:false,
                priority:action.payload.priority,
                createdAt : new Date()
            }
            return updateHistory({
                ...state,
                tasks:[...state.tasks,newTask]
            })

        case Actions.DELETE_TASK :
           return updateHistory({
                ...state,
                 tasks:state.tasks.filter((task:Task) => task.id !== action.payload)
     })
        
        case Actions.TOGGLE_TASK : 
            return updateHistory({
                ...state,
            tasks:state.tasks.map((task:Task) => task.id === action.payload ? {...task, isCompleted : !task.isCompleted} : task)
            })
        
            case Actions.DELETE_ALL:
                return updateHistory({
                    ...state,
                    tasks : [],
                })
        case Actions.EDIT_TASK : 
                return updateHistory({
                    ...state,
                    tasks:state.tasks.map((task:Task) => task.id === action.payload.id ? {...task,...action.payload} : task)
                })
        case Actions.FILTER_TASK: 
            return updateHistory({
                ...state,
                filter : action.payload
            })
        case Actions.UNDO_TASK:
                if (state.history.length > 0) {
                    const previous = state.history[0]
                return {
                    ...previous,
                    history: state.history.slice(1)
                }
            }
                return state
        default :
            throw new Error(`Unknown  action:${action.type}`)
    }
}