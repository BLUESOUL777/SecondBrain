import { SidebarItem } from "./SidebarItem";
import { PlusIcon } from "../../icons/PlusIcon";
export function Sidebar(){
    return(
        <div className="bg-white border-1 rounded fixed top-0 left-0 h-screen min-w-100">
            <SidebarItem startIcon={<PlusIcon size={"lg"} />} text="Twitter" />
        </div>
    )
}