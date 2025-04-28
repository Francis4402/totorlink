/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { loginSchema } from "./loginvalidation";
import { useState } from "react";

import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/button";
import { loginUser, reCaptchaTokenVerification } from "@/services/AuthServices";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import RegisterForm from "../register/RegisterForm";


const LoginForm = () => {

    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);


    const form = useForm({
        resolver: zodResolver(loginSchema),
    });

    const [reCaptchaStatus, setRecaptchaStatus] = useState(false);


    const { formState: {isSubmitting} } = form;

    const handleRecaptcha = async (value:string | null) => {
        try {
            const res = await reCaptchaTokenVerification(value!);
            if (res?.success) {
                setRecaptchaStatus(true);
            }
        } catch (err: any) {
            console.error(err);
        }
    }

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const res = await loginUser(data);
            if(res?.success) {
                toast.success(res?.message);

                window.location.reload();
            } else {
                toast.error(res?.message);
            }
        } catch (err: any) {
            console.error(err);
        }
    }
  return (
    <>
        <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
            {/* <div className="flex items-center space-x-4 ">

                <div>
                    <h1 className="text-xl font-semibold">Login</h1>
                    <p className="font-extralight text-sm text-gray-600">Welcome back!</p>
                </div>
            </div> */}
            <button onClick={() => setIsLoginOpen(true)} className="font-semibold bg-amber-400 hover:bg-amber-500 duration-200 cursor-pointer text-white px-10 py-4 rounded-full">
                Login
            </button>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Login</DialogTitle>
                    <DialogDescription>WelCome Back!</DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <FormField control={form.control} name="email" render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" {...field} value={field.value || ""} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )} />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                <Input type="password" {...field} value={field.value || ""} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />


                        <div className="flex mt-3 w-full">
                            <ReCAPTCHA
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY || ''}
                            onChange={handleRecaptcha}
                            className="mx-auto"
                            />
                        </div>

                        <DialogFooter>
                            <Button
                                    disabled={reCaptchaStatus ? false : true}
                                    type="submit"
                                    className="mt-5 w-full"
                                >
                                    {isSubmitting ? "Logging...." : "Login"}
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
                <p className="text-sm text-gray-600 text-center my-3 flex gap-4 items-center justify-center">
                    Do not have any account ?
                    <Button variant={"ghost"} size={"sm"} onClick={() => {setIsLoginOpen(false); setIsRegisterOpen(true);}}>
                        Register
                    </Button>
                </p>

            </DialogContent>
            
        </Dialog>

        <RegisterForm isRegisterOpen={isRegisterOpen} setIsRegisterOpen={() => setIsRegisterOpen(false)} isLoginOpen={() => {setIsRegisterOpen(false); setIsLoginOpen(true);}} />
    </>
  )
}

export default LoginForm