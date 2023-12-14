import { missions } from "@/constants"

const Our_Mission = () => {
  return (
    <section className=' h-fit flex flex-col justify-center items-center lg:px-20 md:px-10 px-5 p-20 '>
        <h2 className='lg:w-[80%] w-[90%] md:text-[3rem] sm:text-[2.2rem] text-[1.7rem] my-5 text-center'>Our mission and vision</h2>

        <div className="lg:w-[80%] w-[90%] flex flex-col items-center justify-between gap-5 mt-5 py-10 border-t-2 border-black-100">
            {missions.map((mission) => (
                <div key={mission.highlight} className=" w-full flex justify-center md:gap-8 gap-5 md:mb-0 mb-4">
                <div className="w-[45%]">
                   <p className="md:text-[2.5rem] sm:text-[2rem] text-[1.5rem]">Our <span className=" text-coral-green">{mission.highlight}</span></p>
                </div>
                <div className="w-[55%]">
                    <p className=" md:text-base text:sm md:leading-8 leading-6">{mission.detail}</p>
                </div>
            </div>
            ))}
        </div>
    </section>
  )
}

export default Our_Mission