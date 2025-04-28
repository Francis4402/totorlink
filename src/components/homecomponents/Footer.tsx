"use client"

import { footerEmailSchema } from '@/schemas/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { LibraryIcon, LocateIcon, Mail, PhoneIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Link from 'next/link';


const navlinks = [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/about",
    name: "About"
  },
  {
    path: "/classes",
    name: "Classes"
  },
  {
    path: "/tutors",
    name: "Tutors"
  }
]

const Footer = () => {

  const form = useForm({
    resolver: zodResolver(footerEmailSchema)
  });

  const { formState: {isSubmitting} } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className='bg-blue-950 flex flex-col text-white'>
      <div className='container mx-auto md:px-0 px-5'>
        <div className='flex md:flex-row flex-col md:gap-0 gap-5 justify-between w-full items-center py-10'>
            <div className='space-y-4'>
              <h1 className='text-2xl font-serif'>Subscribe to our newsletter</h1>
              <p className='text-gray-400'>15,000+ students Joined to tutorlink</p>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField control={form.control} name="email" render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <Input type='email' {...field} value={field.value || ""} placeholder='Your email' className='bg-white py-6 md:w-70' />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )} />

                <button type='submit' className='mt-5 w-fit cursor-pointer bg-blue-800 hover:bg-blue-600 duration-200 py-3 px-8 rounded-full'>
                  {isSubmitting ? "..." : "Submit"}
                </button>
              </form>
            </Form>
          </div>

          <div className='border border-gray-600'></div>

          <div className='flex flex-wrap gap-20 py-10'>
            <div className='flex flex-col max-w-lg gap-2 md:items-start items-center justify-center md:text-start text-center'>
              <div className='flex gap-2 items-center'>
                <LibraryIcon size={40} color='blue'/>
                <h1 className='text-3xl'>TutorLink</h1>
              </div>
              <p>TutorLink connects you with expert tutors for personalized learning. Whether it’s academics, languages, or professional skills, find the right tutor to help you achieve your goals quickly and effectively.</p>
            </div>

            <div className='flex flex-col gap-2'>
              <h1 className='text-xl font-serif'>Explore</h1>
              {
                navlinks.map((navl, index) => (
                  <Link key={index} href={navl.path}>{navl.name}</Link>
                ))
              }
            </div>

            <div className='flex flex-col gap-2'>
              <h1 className='text-xl font-serif'>Socials</h1>
              <p>Instagram</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className='text-2xl font-serif'>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                  <p className='flex gap-2 items-center'><LocateIcon/> Bangladesh, Chittagong, 7674 Stevie Burg</p>
                  <p className='flex gap-2 items-center'><PhoneIcon/> +1(234) 567 890 00</p>
                  <p className='flex gap-2 items-center'><Mail/> tutorlink@gmail.com</p>
              </CardContent>
            </Card>
          </div>
        </div>
    </div>
  )
}

export default Footer