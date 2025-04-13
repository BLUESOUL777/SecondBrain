import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { useRef } from "react";
import { BACKEND_URL } from "./config";
import axios from "axios";

export function Signup() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function handleSignup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        if (username && password) {
            await axios.post(`${BACKEND_URL}/api/v1/signup`, {
                data: {
                    username,
                    password
                }
            });
        }
    }

    return (
        <div className="bg-slate-200 top-0 left-0 w-screen min-h-screen flex justify-center items-center">
            <div className="bg-white  rounded-md border-2 max-w-72 max-h-96">
                <div className="text-3xl flex justify-center mt-2">
                    Signup
                </div>
                <div>
                    <Input ref={usernameRef} placeholder="Username" />
                    <Input ref={passwordRef} placeholder="Password" />
                </div>
                <div className="flex justify-center m-4 ">
                    <Button text="Signup" variant="secondary" size="md" fullWidth={true} loading={false}/>
                </div>
            </div>
        </div>
    );
}