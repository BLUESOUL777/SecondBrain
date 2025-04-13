interface Inputprops{
    placeholder:string;
    ref?:any;
}

export function Input({ placeholder , ref}: Inputprops) {
    return(
        <div>
            <input 
                type="text"  
                placeholder={placeholder} 
                ref={ref}
                className="opacity-100 text-xl text-black border-2 rounded-md m-4 p-2" 
            />
        </div>
    )
}