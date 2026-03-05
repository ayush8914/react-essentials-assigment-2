export const initialState = {
    tasks:[
         {
    id: 1,
    title: "Refactor Task Reducer",
    description: "Clean up reducer logic and fix undo history bug",
    completed: true,
    priority: "high",
    createdAt: "2026-01-20T09:15:00.000Z"
  },
  {
    id: 2,
    title: "Implement Undo Feature",
    description: "Allow reverting last task action using state snapshots",
    completed: false,
    priority: "low",
    createdAt: "2026-01-21T14:30:00.000Z"
  },
  {
    id: 3,
    title: "Add Task Search",
    description: "Filter tasks by title and description in real time",
    completed: false,
    priority: "medium",
    createdAt: "2026-01-22T08:45:00.000Z"
  }
    ],
    filter : "all",
    searchTerm:'',
    isLoading : false,
    history : []
};