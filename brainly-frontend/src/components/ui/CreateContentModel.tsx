import { Button } from "./Button"
import { CrossIcon } from "../../icons/CrossIcon"
import { Input } from "./Input"

export function CreateContentModel({open , onClose}) {
    return (
        <div>           
            {open && <div className="w-screen h-screen top-0 left-0 flex justify-center fixed bg-slate-400 opacity-50">
                    <div className="flex flex-col justify-center">
                            <span className="rounded border-2 bg-white min-h-100 min-w-120">
                                <div className="cursor-pointer flex mr-3 mt-2 justify-end" onClick={onClose}>
                                    <CrossIcon size={"lg"}/>
                                </div>  
                                <Input placeholder="Hello" onChange={() => {}} />     
                                <Input placeholder="Hello" onChange={() => {}} />    
                                <div className="flex justify-center">
                                    <Button 
                                        text="Submit"
                                        variant="primary"
                                        size="lg"
                                        onClick={() => {}}
                                    />   
                                </div>    
                            </span>
                    </div>
            </div>}
        </div>
    )
}

