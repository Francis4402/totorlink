import Image from "next/image"


const Profile = () => {
  return (
    <div>
      <div className="flex gap-10 justify-between">
        <Image src={'/images/1.jpg'} alt="i"  width={100} height={100} className="rounded-full" />

        
      </div>
    </div>
  )
}

export default Profile