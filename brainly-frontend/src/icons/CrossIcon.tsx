interface CrossIconProps{
  size : "sm" | "md" | "lg"
}

const sizeStyles = {
  "sm" : "size-6",
  "md" : "size-8",
  "lg" : "size-10"
}
export const CrossIcon = (props: CrossIconProps)=>{
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
    stroke-width="1.5" stroke="currentColor" className={`${sizeStyles[props.size]}`}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
)}