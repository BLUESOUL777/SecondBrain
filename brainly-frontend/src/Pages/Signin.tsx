import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
export function Signin(){
    return(
        <div className="bg-slate-200 top-0 left-0 w-screen min-h-screen flex justify-center items-center">
            <div className="bg-white  rounded-md border-2 max-w-72 max-h-96">
                <div className="text-3xl flex justify-center mt-2">
                    Signin
                </div>
                <div>
                    <Input placeholder="Username" />
                    <Input placeholder="Password" />
                </div>
                <div className="flex justify-center m-4 ">
                    <Button text="Signin" variant="secondary" size="md" fullWidth={true} loading={false}/>
                </div>
            </div>
        </div>
    )
}