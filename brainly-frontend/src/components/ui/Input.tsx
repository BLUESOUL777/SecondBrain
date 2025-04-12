export function Input({onChange, placeholder}: {onChange: () => void, placeholder: string}) {
    return(
        <div>
            <input 
                type="text" 
                onChange={onChange} 
                placeholder={placeholder} 
                className="opacity-100 text-xl text-black border-2 rounded-md m-4 p-2" 
            />
        </div>
    )
}