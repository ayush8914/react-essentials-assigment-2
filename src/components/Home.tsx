import AppBar from "./AppBar"
import SideBar from "./SideBar"
import { useState } from "react";

function Home() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  return (
    <div>
        <div className="flex flex-row">
            <div className={`top-0 left-0 z-30 transform transition-transform duration-300 ease-in-out h-screen w-full max-w-3/5 sm:max-w-1/3 lg:max-w-1/6 ${isSideBarOpen ? "translate-x-0 bg-white fixed sm:relative" : "-translate-x-full fixed sm:fixed"}`}>
                <SideBar handleToggle={()=>setIsSideBarOpen(!isSideBarOpen)} isSidebarOpen={isSideBarOpen}/>
            </div>
            <div className={`w-full`}>
                <div>
                    <AppBar handleToggle={()=>setIsSideBarOpen(!isSideBarOpen)} isSideBarOpen={isSideBarOpen}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home