import Image from 'next/image'
import React from 'react'

const blogcards = [
    {
        "image": "/images/5.jpg",
        "title": "New Tutors Joining Weekly!",
        "date": "March 1, 2025",
        "description": "Meet our fresh batch of tutors ready to rock your learning world! Check them out and book a session today!"
    },
    {
        "image": "/images/3.jpg",
        "title": "Exciting Features Coming Soon!",
        "date": "February 25, 2025",
        "description": "Get ready for some mind-blowing features that will make learning even more fun! Stay tuned for updates!"
    },
    {
        "image": "/images/6.jpg",
        "title": "Student Success Stories Unveiled",
        "date": "February 20, 2025",
        "description": "Read about how our platform has transformed students lives. You could be next!"
    },
    {
        "image": "/images/4.jpg",
        "title": "Admin Tools for Better Management!",
        "date": "February 15, 2025",
        "description": "Admins can now manage users and content with ease. Keeping the platform safe and sound!"
    },
    
]

const Blogs = () => {
  return (
    <div className='container mx-auto md:px-0 px-5'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='md:text-6xl text-2xl font-semibold py-20'>Latest Updates</h1>
            
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-10'>
                {
                    blogcards.map((data,index) => {
                        return (
                            <div key={index} className='flex flex-col gap-5 rounded-4xl'>
                                <Image src={data.image} alt='i' width={800} height={800} className='rounded-2xl h-64 object-cover' />
                                <h1 className='text-4xl font-bold'>{data.title}</h1>
                                <p className='text-2xl'>{data.date}</p>
                                <p className='text-2xl'>Meet our fresh batch of tutors ready to rock your learning world! Check them out and book a session today!</p>
                                <button className='bg-amber-400 hover:bg-amber-500 cursor-pointer duration-200 w-fit px-10 py-3 rounded-full text-white text-2xl font-semibold'>Join</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Blogs