
function AppBar(props:{
    handleToggle : () => void
    isSideBarOpen : boolean
}) {
  return (
    <div className="w-full shadow-sm p-4 text-xl flex items-center">
        <div className={`flex gap-3 ${props.isSideBarOpen ? "sm:hidden" : ""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${props.isSideBarOpen ? "sm:hidden" : ""}`}
            onClick={props.handleToggle}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
            <div >
                Task Manager
            </div>
        </div>
        <div className={`hidden ${props.isSideBarOpen ? "sm:block" : ""}`}>
            All Tasks
        </div>
    </div>
  )
}

export default AppBar