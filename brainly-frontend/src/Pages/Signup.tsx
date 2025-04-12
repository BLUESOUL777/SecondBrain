import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
export function Signup(){
    return(
        <div className="bg-white top-0 left-0 w-screen min-h-screen flex justify-center items-center">
            <div className="bg-slate-200 rounded-md border-2 max-w-72 max-h-96">
                <div className="text-3xl m-2 mr-1">
                    Signup
                </div>
                <div>
                    <Input placeholder="Username" onChange={() => {}}/>
                    <Input placeholder="Password" onChange={() => {}}/>
                </div>
                <div className="flex justify-center m-4 ">
                    <Button text="Signup" variant="secondary" size="md"/>
                </div>
            </div>
        </div>
    )
}