


const cardplans = [
    {
        "title": "Basic",
        "price": "$4.99/mo",
        "description": "Access to basic features and a limited number of sessions."
    },
    {
        "title": "Standard",
        "price": "$9.99/mo",
        "description": "More sessions, more subjects, and priority support. Get in!"
    },
    {
        "title": "Premium",
        "price": "$19.99/mo",
        "description": "Everything in Standard plus unlimited sessions and priority support. Get in!"
    },
    {
        "title": "Ultimate",
        "price": "$29.99/mo",
        "description": "Everything in Premium plus unlimited sessions and priority support. Get in!"
    }
]

const PricingSection = () => {
  return (
    <div className='py-10 flex flex-col justify-center items-center gap-20'>
        <h1 className='text-6xl font-bold'>Pricing Plans</h1>

        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-10'>
            {
                cardplans.map((card, index) => {
                    return (
                        <div key={index} className='flex flex-col gap-5 rounded-4xl shadow-2xl'>
                            <div className="bg-amber-400 text-white px-10 py-4 rounded-t-2xl">
                                <h2 className='text-4xl font-bold'>{card.title}</h2>
                                <p className='text-xl font-semibold'>{card.price}</p>
                            </div>

                            <div className="px-8 py-8 w-full flex flex-col gap-10">
                                <p className='text-2xl'>{card.description}</p>
                                <button className="bg-amber-400 hover:bg-amber-500 duration-200 cursor-pointer text-white py-4 text-2xl font-semibold rounded-full">
                                    Choose Plan
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default PricingSection