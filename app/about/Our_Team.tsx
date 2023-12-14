import { members } from "@/constants"

const Our_Team = () => {
    return (
        <section className='h-fit flex flex-col justify-center items-center py-20'>
            <div className='md:w-[60%] sm:w-[70%] w-[80%]'>
                <span className='md:text-base text-xs'>Our Team</span>
                <h2 className=' md:text-[3rem] sm:text-[2.5rem] text-[1.7rem] my-4'>The men behind the sin</h2>
                <p className='text-base leading-8'> Our team is comprised of individuals who bring a wealth of experience, creativity, and dedication to the table. Together, we are united by a shared vision of empowering founders and fostering a vibrant community. Get to know the faces behind Fundflit.</p>
            </div>
            <div className=" flex xs:flex-nowrap flex-wrap xl:gap-10 md:gap-5 xs:gap-4 gap-2 items-center sm:justify-center justify-between mt-10 xl:px-24 px-8">
                {members.map((member) => (
                    <div key={member.id} className="xs:w-[25%] w-[47%] mb-10">
                        <div className="md:h-[20rem] sm:h-[12rem] h-[11rem] w-full">
                            <img src={member.imgUrl} alt="" className="object-cover rounded-xl h-full w-full" />
                        </div>
                        <p className=" md:text-[1.75rem] md:mb-2 mb-0 sm:mt-10 mt-6">{member.name}</p>
                        <small className=" md:text-[1.25rem] text-gray-30">{member.position}</small>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Our_Team