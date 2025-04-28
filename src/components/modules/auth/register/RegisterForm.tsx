/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { registerUser } from '@/services/AuthServices';
import React from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// import { zodResolver } from '@hookform/resolvers/zod';
// import { registerSchema } from './registervalidation';


const RegisterForm = ({isRegisterOpen, setIsRegisterOpen, isLoginOpen }: {isRegisterOpen: boolean; setIsRegisterOpen: (isOpen: boolean) => void; isLoginOpen: () => void;}) => {


    // const [subjects, setSubjects] = useState([{ name: '', gradeLevel: '', category: '', description: '' }]);
    
    const form = useForm();


    const password = form.watch("password");
    const passwordConfirm = form.watch("passwordConfirm");
    const router = useRouter();

    const { setIsLoading } = useUser();

    const { formState: {isSubmitting} } = form;


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {

            const res = await registerUser(data);

            setIsLoading(true);
            if (res?.success) {
                toast.success(res?.message);
                router.push("/");
            } else {
                toast.error(res?.message);
            }
        } catch (err: any) {
            console.error(err);
        }

        console.log(data);

    }

    // const handleAddSubject = () => {
    //     setSubjects([...subjects, { name: '', gradeLevel: '', category: '', description: '' }]);
    // };

    // const handleRemoveSubject = (index: number) => {
    //     const newSubjects = subjects.filter((_, i) => i !== index);
    //     setSubjects(newSubjects);
    // };

    // const handleSubjectChange = (index: number, field: keyof typeof subjects[0], value: string) => {
    //     const newSubjects = [...subjects];
    //     newSubjects[index][field] = value;
    //     setSubjects(newSubjects);
    // };

  return (
    <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>


        <DialogContent>
            <DialogHeader>
                <DialogTitle>Register</DialogTitle>
                <DialogDescription>Please Register</DialogDescription>
            </DialogHeader>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">


                    <FormField control={form.control} name="name" render={({field}) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input {...field} value={field.value || ""} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )} />

                    <FormField control={form.control} name="email" render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" {...field} value={field.value || ""} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )} />




                    {/* <div className='flex justify-between'>
                        <FormField control={form.control} name='gender' render={({field}) => (
                            <FormItem>
                                <FormLabel>Gender</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Gender" />
                                        </SelectTrigger>
                                    </FormControl>

                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value='male'>Male</SelectItem>
                                            <SelectItem value='female'>Female</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )} />

                        <FormField
                            control={form.control}
                            name="dateofbirth"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Date of Birth</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[240px] justify-start text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div> */}

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

                    <FormField
                            control={form.control}
                            name="passwordConfirm"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                <Input type="password" {...field} value={field.value || ""} />
                                </FormControl>

                                {passwordConfirm && password !== passwordConfirm ? (
                                <FormMessage> Password does not match </FormMessage>
                                ) : (
                                <FormMessage />
                                )}
                            </FormItem>
                            )}
                        />

                        <FormField control={form.control} name='role' render={({field}) => (
                            <FormItem>
                                <FormLabel>Select Role</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select role" />
                                        </SelectTrigger>
                                    </FormControl>

                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value='student'>Student</SelectItem>
                                            <SelectItem value='tutor'>Tutor</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )} />

                    {/* <div className="mt-4">
                        <h3 className="text-lg font-semibold">Subjects</h3>
                        {subjects.map((subject, index) => (
                            <div key={index} className="border p-4 rounded-lg mb-4">
                                <FormItem>
                                    <FormLabel>Subject Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            value={subject.name}
                                            onChange={(e) => handleSubjectChange(index, 'name', e.target.value)}
                                        />
                                    </FormControl>
                                </FormItem>

                                <FormItem>
                                    <FormLabel>Grade Level</FormLabel>
                                    <FormControl>
                                        <Input
                                            value={subject.gradeLevel}
                                            onChange={(e) => handleSubjectChange(index, 'gradeLevel', e.target.value)}
                                        />
                                    </FormControl>
                                </FormItem>

                                <FormItem>
                                    <FormLabel>Category</FormLabel>
                                    <FormControl>
                                        <Input
                                            value={subject.category}
                                            onChange={(e) => handleSubjectChange(index, 'category', e.target.value)}
                                        />
                                    </FormControl>
                                </FormItem>

                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input
                                            value={subject.description}
                                            onChange={(e) => handleSubjectChange(index, 'description', e.target.value)}
                                        />
                                    </FormControl>
                                </FormItem>

                                <Button
                                    type="button"
                                    variant="destructive"
                                    onClick={() => handleRemoveSubject(index)}
                                    className="mt-2"
                                >
                                    Remove Subject
                                </Button>
                            </div>
                        ))}

                        <Button
                            type="button"
                            onClick={handleAddSubject}
                            className="mt-2"
                        >
                            Add Subject
                        </Button>
                    </div> */}

                    <DialogFooter>
                        <Button type="submit" className="mt-5 w-full">
                            {isSubmitting ? "Registering...." : "Register"}
                        </Button>
                    </DialogFooter>
                </form>
            </Form>
            <p className="text-sm text-gray-600 text-center my-3 flex gap-4 items-center justify-center">
                Already have an account ?

                <Button variant={"ghost"} size={"sm"} onClick={() => {setIsRegisterOpen(false); isLoginOpen();}}>
                    login
                </Button>
            </p>
        </DialogContent>
    </Dialog>
  )
}

export default RegisterForm