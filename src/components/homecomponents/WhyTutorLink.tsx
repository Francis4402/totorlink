import { CircleDollarSign, Puzzle, TrendingUp, Users } from "lucide-react"


const TCards = [
    {
        "Icon": <Users size={40} />,
        "title": "Student Power",
        "description": "Students can easily find and book sessions with top-notch tutors. Manage your learning like a boss and never miss a beat!"
    },
    {
        "Icon": <Puzzle size={40} />,
        "title": "Tutor Profiles",
        "description": "Tutors showcase their skills, subjects and availability. Choose the best match for your academic needs and preferences. No more guessing!"
    },
    {
        "Icon": <TrendingUp size={40}/>,
        "title": "Admin Control",
        "description": "Admin keep the platform running smoothly, ensuring quality and safety. They approve tutors and manage content like the superheroes they are!"
    },
    {
        "Icon": <CircleDollarSign size={40}/>,
        "title": "Flexible Scheduling",
        "description": "Book sessions that fit your chaotic life. Whether you're a night owl or an early bird, we've got you covered!"
    }
]

const WhyTutorLink = () => {
  return (
    <div className='flex flex-col gap-25 py-10'>
        <h1 className='lg:text-8xl md:text-7xl text-5xl'>Why TutorLink?</h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
            {
                TCards.map((card, index) => {
                    return (
                        <div key={index} className='flex flex-col gap-10 shadow-2xl rounded-2xl p-15 bg-gray-100'>
                            <div className='flex items-center gap-2'>
                                <div className="sm:block hidden">
                                    {card.Icon}
                                </div>
                                <h2 className='md:text-3xl text-2xl'>{card.title}</h2>
                            </div>
                            <p className='text-2xl'>{card.description}</p>
                        </div>
                    )
                })
            }
        </div>

        <div className="flex lg:flex-row flex-col gap-10 justify-between">
            <div className="flex lg:items-start items-center gap-4 w-full">
                <div className="bg-black/20 p-3 rounded-full w-fit h-fit">
                    <div className="bg-black p-2 rounded-full w-fit h-fit"></div>
                </div>
                <p className="text-xl">Join Us</p>
            </div>

            <h1 className="md:text-5xl text-2xl md:leading-16">Become part of a vibrant community where learning meets fun. Sign up today and take control of your educational experience!</h1>
        </div>

        <div>
            <h1 className="md:text-8xl text-5xl">Get Started</h1>
        </div>

        <div className="border border-gray-800 w-full"></div>

        <p className="text-2xl leading-10 max-w-2xl">Ready to take the plunge? Join TutorLink and connect with amazing tutors who can help you conquer your studies. Don&apos;t wait, the future is calling!</p>

        <button className="bg-amber-400 hover:bg-amber-500 duration-200 cursor-pointer px-10 py-4 rounded-full text-white text-2xl font-semibold w-fit">Sign Up</button>

        <div className="border border-gray-800 w-full"></div>
    </div>
  )
}

export default WhyTutorLink