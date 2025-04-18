import { ReactElement } from "react"

interface SidebarItemProps {
    startIcon:ReactElement,
    text:String,
}

export function SidebarItem({startIcon , text}){
    return (
        <div className="max-h-20 text-3xl p-5 flex justify-center items-center min-w-70 rounded m-5 bg-white">
            {startIcon} {text}
        </div>
    )
}