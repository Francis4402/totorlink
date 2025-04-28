
import Image from "next/image";
import Marquee from "react-fast-marquee";

const imagesmarquee = [
    {
        "image": "/images/1.jpg",
    },
    {
        "image": "/images/2.jpg",
    },
    {
        "image": "/images/3.jpg",
    },
    {
        "image": "/images/4.jpg",
    },
    {
        "image": "/images/5.jpg",
    },
    {
        "image": "/images/6.jpg",
    },
    {
        "image": "/images/7.jpg",
    },
    {
        "image": "/images/8.jpg",
    },
    {
        "image": "/images/9.jpg",
    },
    {
        "image": "/images/10.jpg",
    },
    {
        "image": "/images/11.jpg",
    },
]

const MarqueeSection = () => {


  return (
    <div className="flex flex-col items-center justify-center gap-10 overflow-hidden">
      <div className="w-full overflow-hidden relative">
        <Marquee loop={0} speed={200} className="text-5xl h-20 font-bold px-10">
          Manage your learning like a pro! * Connect with top-notch tutors instantly!...
        </Marquee>
      </div>

      <div className="bg-[url('/images/3.jpg')] bg-center bg-cover w-full h-96 justify-center items-center flex">
            <h1 className="text-6xl font-semibold text-white">Get Best Guides for your needs</h1>
      </div>

      <Marquee loop={0} speed={100} pauseOnHover={true} className="flex overflow-hidden">
        {
            imagesmarquee.map((i, index) => {
                return (
                    <div key={index} className="w-62 h-52 m-5 bg-blue-400 flex justify-center items-center rounded-2xl">
                        <Image src={i.image} alt="image" className="w-full h-full object-cover rounded-2xl" width={2639} height={2153} />
                    </div>
                )
            })
        }
      </Marquee>

      <Marquee loop={0} speed={100} pauseOnHover={true} direction="right" className="flex overflow-hidden">
        {
            imagesmarquee.map((i, index) => {
                return (
                    <div key={index} className="w-62 h-52 m-5 bg-blue-400 flex justify-center items-center rounded-2xl">
                        <Image src={i.image} alt="image" className="w-full h-full object-cover rounded-2xl" width={2639} height={2153} />
                    </div>
                )
            })
        }
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
