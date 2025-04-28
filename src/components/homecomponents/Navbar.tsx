import Image from "next/image";
import Link from "next/link";
import AvatarMenu from "../AvatarMenu/AvatarMenu";


const navRoutes = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Classes",
    path: "/classes"
  },
  {
    name: "Tutors",
    path: "/tutors"
  },

];


const Navbar = () => {


  return (
    <div className="sticky top-0 z-50">
      <div className=" bg-white/80 w-full px-10 py-8 shadow-lg backdrop-blur-md">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center gap-5">
          <Image 
            src={'https://r.mobirisesite.com/1252901/assets/images/g8a76ea9448036ea7c8e3e8556170-h_m7qbhjee.png'} 
            alt="logo" 
            width={50} 
            height={50} 
            className="rounded-full"
          />
          <p className="text-xl font-semibold">TurtorLink</p>
          </div>

          <div className="md:flex items-center lg:gap-20 gap-6 hidden">
            {navRoutes.map((route, index) => (
              <Link key={index} href={route.path} className="font-semibold text-lg">
                {route.name}
              </Link>
            ))}
             <AvatarMenu/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
