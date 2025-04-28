import { Users } from 'lucide-react'
import React from 'react'

const UserAvatars = [
    {
        "text": "This platform changed my study game!",
        "image": <Users/>,
        "name": "Emily R."
    },
    {
        "text": "I found the best math tutor here!",
        "image": <Users/>,
        "name": "James T."
    },
    {
        "text": "Booking sessions is a breeze!",
        "image": <Users/>,
        "name": "Sarah L."
    },
    {
        "text": "Tutors are super helpful and fun!",
        "image": <Users/>,
        "name": "Michael B."
    },
    {
        "text": "I love managing my learning schedule!",
        "image": <Users/>,
        "name": "Jessica K."
    },
    {
        "text": "This site is a lifesaver for students!",
        "image": <Users/>,
        "name": "David W."
    }
]

const Testimonial = () => {
  return (
    <div className='py-20 container mx-auto md:px-0 px-5'>
        <div className='bg-green-600 p-10 flex flex-col gap-10 justify-center items-center text-center rounded-4xl'>
            <h1 className='text-6xl font-bold text-white'>Find Your Perfect Tutor Today!</h1>

            <button className='bg-amber-400 hover:bg-amber-500 duration-200 cursor-pointer px-10 py-4 rounded-full text-white text-2xl font-semibold'>Get Started</button>
        </div>

        <div className='py-10 flex flex-col justify-center items-center'>
            <h1 className='text-6xl font-bold'>Cheers!</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-20'>
                {
                    UserAvatars.map((info, index) => {
                        return (
                            <div key={index} className='flex flex-col gap-5 justify-center items-center'>
                                <p className='text-xl'>{info.text}</p>
                                <div className='p-8 rounded-full bg-gray-200 w-fit'>
                                    {info.image}
                                </div>
                                <p className='text-2xl font-semibold'>{info.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Testimonial