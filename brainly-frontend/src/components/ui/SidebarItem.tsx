import { ReactElement } from "react"

interface SidebarItemProps {
    startIcon:ReactElement,
    text:String,
}

export function SidebarItem({startIcon , text}){
    return (
        <div className="max-h-20 text-3xl p-5 flex justify-center items-center min-w-100 max-w-100 rounded m-5 bg-red-200">
            {startIcon} {text}
        </div>
    )
}