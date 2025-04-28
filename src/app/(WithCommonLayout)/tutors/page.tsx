

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { IUser } from '@/types';
import { ArrowRight, ChartBar, Lock, Pen, Settings, User, Users } from 'lucide-react'
import Image from 'next/image';




const coursesInfo = [
  {
    icon: <Pen/>,
    title: "Passion",
    description: "Passion fuels our commitment to inspire, teach, and empower you to achieve your dreams.",
  },
  {
    icon: <Users/>,
    title: "Community",
    description: "Join a supportive community where learning thrives, connections grow, and success is shared.",
  },
  {
    icon: <Settings/>,
    title: "Commitment",
    description: "Commitment is our promise to provide unwavering support, quality education, and a path to your success.",
  },
  {
    icon: <ChartBar/>,
    title: "Growth",
    description: "Growth is at the heart of our mission, helping you evolve, learn, and achieve your fullest potential.",
  },
  {
    icon: <Lock/>,
    title: "Honesty",
    description: "Honesty is the foundation of trust, ensuring transparency, integrity, and genuine support in every step of your journey.",
  },
  {
    icon: <User/>,
    title: "Team Work",
    description: "Teamwork brings us together, combining strengths, ideas, and efforts to achieve shared success and excellence.",
  }
];

const studentImages = [
  {
    image: "/studentimages/1.jpg",
  },
  {
    image: "/studentimages/2.jpg",
  },
  {
    image: "/studentimages/3.webp",
  },
  {
    image: "/studentimages/4.jpg",
  }
]


const Tutors = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users?role=tutor`, {
    cache: "no-store",
  });

  const tutors = await res.json();
  

  return (
    <div>
      <div className="relative text-white flex flex-col justify-center items-center bg-[url('/images/4.jpg')] bg-center bg-cover w-full h-full">
          <div className="absolute inset-0 bg-blue-950/60"></div>

          <div className='py-32 space-y-4 relative z-10'>
            <h1 className='text-5xl font-semibold font-serif'>Our Tutors</h1>
            <div className='flex gap-2 justify-center items-center'>
              <p className=''>Home</p>
              <p><ArrowRight/></p>
              <p>Tutors</p>
            </div>
          </div>
      </div>

      <div className='container mx-auto md:px-0 px-5'>
          <div className='flex flex-col justify-center items-center text-center space-y-10 my-20'>
            <div className='space-y-4'>
              <p className='uppercase text-blue-900 font-semibold'>Our Tutors</p>
              <h1 className='text-4xl font-serif'>Meet Our Professional Tutors</h1>
            </div>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
              {
                tutors?.data?.map((tutor: IUser, index: number) => (
                  <Card key={index} className='w-[350px] p-0 hover:shadow-2xl hover:scale-105 cursor-pointer duration-300'>
                    <Image src={"/images/2.jpg"} alt='i' width={500} height={500} className='rounded-2xl' />
                    <CardHeader>
                      <CardTitle>{tutor.name}</CardTitle>
                      <CardDescription className='text-sm'>{tutor.email}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      
                    </CardContent>
                  </Card>
                ))
              }
            </div>
          </div>

          <div className='space-y-4'>
              <p className='uppercase text-blue-900 font-semibold'>Our Tutors</p>
              <h1 className='text-4xl font-serif'>Meet Our Professional Tutors</h1>
          </div>

          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-10'>
            {
              coursesInfo.map((course, index) => (
                <Card key={index}>
                    <CardHeader>
                      <p className='bg-blue-900 text-white p-4 rounded-full w-fit'>{course.icon}</p>
                    </CardHeader>

                    <CardContent>
                      <h1 className='text-2xl font-serif'>{course.title}</h1>
                      <p>{course.description}</p>
                    </CardContent>
                </Card>
              ))
            }
          </div>

          <div className='flex lg:flex-row flex-col my-20 gap-8 items-center justify-between bg-blue-900 text-white p-20 rounded-2xl'>
            <div className='flex flex-col gap-8 max-w-2xl'>
              <p className='uppercase tracking-widest'>GET STARTED</p>
                <h1 className='text-4xl font-serif'>Learn More Skills, Be More Competitive</h1>
                <p>Learning from a tutor helps you gain skills faster with personalized guidance, focused feedback, and structured support, making learning more efficient and effective.</p>

                <div className='flex gap-3'>
                  <button className='bg-white text-blue-900 px-5 py-2 rounded-full'>Get Started</button>
                  <button className='underline underline-offset-5'>Contact Us</button>
                </div>

                <div className='space-y-8'>
                  <div className='flex gap-5 items-center'>
                    <div className='flex items-center'>
                      {
                        studentImages.map((image, index) => (
                          <div key={index} className='rounded-full overflow-hidden w-fit -m-1'>
                            <Image src={image.image} alt='i' width={60} height={60} />
                          </div>
                        ))
                      }
                  </div>
                  <p>Trusted by more than 10.000 students</p>
                </div>
              </div>
            </div>

            <Image src={"/images/5.jpg"} alt='i' width={800} height={800} className='rounded-2xl' />
          </div>
      </div>
    </div>
  )
}

export default Tutors