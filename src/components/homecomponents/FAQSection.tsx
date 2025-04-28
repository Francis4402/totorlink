import React from 'react'
import { FaDiscord, FaFacebookF, FaInstagram } from 'react-icons/fa'

const FAQCards = [
    {
        "title": "How do i find a tutor?",
        "description": "Simply browse our extensive list of tutors, filter by subject and book a session that fits your schedule! Easy peasy!"
    },
    {
        "title": "Can tutors set their own hours?",
        "description": "Absolutely! Tutors can manage their availability to suit their lifestyle Flexibility is key!"
    },
    {
        "title": "What if i need to cancel?",
        "description": "No worries! Just give us a heads up 24 hours in advance, and you're good to go!"
    },
    {
        "title": "Are there any fees involved?",
        "description": "We keep it simple! A small fee applies for each session booked. Quality education at a fair price!"
    },
    {
        "title": "How do I become a tutor?",
        "description": "If you're passionate about teaching, apply on our site! Show us what you've got!"
    },
    
]

const FAQSection = () => {
  return (
    <div className='container mx-auto md:px-0 px-5'>
        <div className='flex flex-col justify-center items-center py-20'>
            <h1 className='text-5xl font-bold'>Frequently Asked Questions</h1>

            <div className='flex flex-col gap-10 mt-20'>
                {
                    FAQCards.map((fadata, index) => {
                        return (
                            <div key={index} className='shadow-xl rounded-4xl p-10 bg-gray-100 flex flex-col gap-5'>
                                <h1 className='text-4xl font-bold'>{fadata.title}</h1>
                                <p className='text-2xl'>{fadata.description}</p>
                            </div>
                        )
                    })
                }
            </div>


            <div className='mt-20 flex flex-col justify-center items-center gap-10'>
                <h1 className='text-6xl font-bold'>Join Our Community Now!</h1>
                <div className='flex gap-5'>
                    <FaFacebookF size={60} color='white' className='bg-blue-500 rounded-full p-4' />
                    <FaDiscord size={60} color='white' className='bg-blue-700 rounded-full p-4' />
                    <FaInstagram size={60} color='white' className='bg-amber-500 rounded-full p-4' />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default FAQSection