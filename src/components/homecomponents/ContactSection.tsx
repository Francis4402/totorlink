"use client"

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { toast } from 'sonner'
import { z } from 'zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { formSchema } from '@/schemas/schemas'
import { send } from '@/lib/email'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'


const contactcards = [
  {
    title: "Phone",
    detail: "+1-800-555-0199"
  },
  {
    title: "Email",
    detail: "support@tutorsplatform.com"
  },
  {
    title: "Address",
    detail: "Chittagong Bangladesh"
  },
  {
    title: "Working Hours",
    detail: "Mon-Fri: 9am - 6pm"
  }
]



const ContactSection = () => {

  const [isSubmitting, setIsSubmitting] = useState(false)


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast.success("Message sent!")

    form.reset()
    setIsSubmitting(false)
    send(values);
  }

  return (
    <div className='container mx-auto md:px-0 px-5'>
      <div className="w-full max-w-2xl mx-auto py-8 px-4 md:px-6 bg-white rounded-2xl shadow-lg">
        <div className="space-y-2 mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Get In Touch Today</h2>
          <p className="text-muted-foreground">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="What is this regarding?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tell us how we can help..." className="min-h-32 resize-y" {...field} />
                  </FormControl>
                  <FormDescription>Please provide as much detail as possible.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="animate-pulse">Sending...</span>
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </Form>
      </div>

      <div className='flex flex-col justify-center items-center mt-20'>
        <h1 className='text-5xl font-bold'>Contact Us</h1>

        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-10 py-20'>
              {
                contactcards.map((data, index) => {
                  return (
                    <Card key={index} className='flex flex-col gap-4 shadow-lg p-10 rounded-lg bg-white'>
                      <CardHeader>
                        <CardTitle>
                          <p className='text-xl'>{data.title}</p>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{data.detail}</p>
                      </CardContent>
                    </Card>
                  )
                })
              }
        </div>
      </div>
    </div>
  )
}

export default ContactSection