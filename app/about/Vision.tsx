import { BiSolidBadgeCheck } from "react-icons/bi";

const Vision = () => {
  const items = [
    {
      product: "Connect with a Global Community",
    },
    {
      product: "Transparency at Every Step",
    },
    {
      product: "Innovate with Confidence",
    },
    {
      product: "Future-Proof Your Dreams",
    },
  ];

  return (
    <section className=" flex md:flex-row flex-col lg:gap-20 gap-14 pb-28 mb:pt-10 pt-0 lg:px-20 md:px-10 px-7 justify-center items-center">
      <div className="xl:w-[35%] md:w-[42%] h-[28rem]">
        <img
          src="/assets/about-img4.png"
          alt=""
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="lg:w-[47%] md:w-[50%]">
        <h2 className="w-full md:text-[3rem] sm:text-[2.5rem] text-[1.8rem] mb-5">
          Fundflit <br /> value proposition
        </h2>
        <p className="text-base leading-8">
          At Fundflit, we transcend traditional crowdfunding; we usher in a new
          era of possibilities with the power of Web5 technology. Our platform
          stands as a beacon for startup founders and investors seeking more
          than just a funding platform—it's a dynamic ecosystem where dreams
          take flight and communities flourish.
        </p>
        <div className="w-full flex flex-wrap justify-start gap-5 mt-8">
          {items.map((item) => (
            <div key={item.product} className="flex w-[47%] ">
              <BiSolidBadgeCheck size={18} className=" text-coral-green mr-3" />
              <p className=" md:text-base text-sm">{item.product}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
