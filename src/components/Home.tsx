import AppBar from "./AppBar"
import SideBar from "./SideBar"
import { useState, useEffect} from "react";
import TaskList from "./TaskList";
import Model  from "./Model";
import CreateTask from "./CreateTask";
import Button from "./Button";
import DeleteAlert from "./DeleteAlert";
import Stats from "./Stats";

function Home() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [isDeleteAllModelOpen, setIsDeleteAllModelOpen] = useState(false);

useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth >= 1024) {
            setIsSideBarOpen(true);
        } else {
            setIsSideBarOpen(false);
        }
    }
        handleResize();
        window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize) };
 
}, []);


  return (
    <div >
        <div className="flex flex-row">
            <div className={`top-0 left-0 z-30 transform transition-transform duration-300 ease-in-out h-screen w-full max-w-3/5 sm:max-w-1/3 lg:max-w-1/6 ${isSideBarOpen ? "translate-x-0 bg-white fixed sm:relative" : "-translate-x-full fixed sm:fixed"}`}>
                <SideBar handleToggle={()=>setIsSideBarOpen(!isSideBarOpen)} isSidebarOpen={isSideBarOpen}/>
            </div>
            <div className={`w-full`}>
                <div>
                    <AppBar handleToggle={()=>setIsSideBarOpen(!isSideBarOpen)} isSideBarOpen={isSideBarOpen}/>
                    <div className="pl-6 pt-6 pr-6 flex justify-between">
                        <div>
                            <Stats />
                        </div>
                        <div className="flex gap-4">
                             <div className="h-fit w-fit">
                                <Button  label="Create Task" bgColor="bg-gray-700" bgColorHover="hover:bg-gray-800" onClick={() => setIsModelOpen(true)} />
                                <Model isOpen={isModelOpen} onClose={() => setIsModelOpen(false)} title="Create Task" showCloseButton={true}>
                                    <CreateTask onClose={() => setIsModelOpen(false)}/>
                                </Model>
                             </div>
                             <div className="h-fit w-fit">
                                <Button  label="Delete All" bgColor="bg-red-400" bgColorHover="hover:bg-red-600" onClick={() => setIsDeleteAllModelOpen(true)} />
                                <Model isOpen={isDeleteAllModelOpen} onClose={() => setIsDeleteAllModelOpen(false)} title="Delete All" showCloseButton={true}>
                                    <DeleteAlert isDeleteAll={true} alertMsg={"Are you sure you want to delete all tasks?"} onClose={() => setIsDeleteAllModelOpen(false)}/>
                                </Model>
                             </div>
                        </div>
                    </div>
                        <div className="p-6">
                            <TaskList />
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home