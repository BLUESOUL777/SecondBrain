import { SidebarItem } from "./SidebarItem";
import { PlusIcon } from "../../icons/PlusIcon";
import { YouTubeIcon } from "../../icons/YoutubeIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
export function Sidebar(){
    return(
        <div className="bg-white border-1 rounded fixed top-0 left-0 h-screen max-w-80">
            <SidebarItem startIcon={<PlusIcon size={"lg"} />} text="Second Brain" />
            <SidebarItem startIcon={<YouTubeIcon size={"lg"} />} text="Youtube" />
            <SidebarItem startIcon={<TwitterIcon size={"lg"} />} text="Twitter" />
        </div>
    )
}