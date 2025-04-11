interface PlusIconProps{
    size : "sm" | "md" | "lg"
}

const sizeStyles = {
    "sm" : "size-3 mx-1",
    "md" : "size-5 mx-1",
    "lg" : "size-6 mx-1"
}

export const PlusIcon = (props: PlusIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`${sizeStyles[props.size]}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>

    )
}
