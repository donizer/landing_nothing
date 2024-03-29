export const Recommended = () => {
  return (
    <>
      <hr className="col-span-full mb-[64px] border-0 md:mb-[120px]" />

      <h2 className="col-span-2 col-start-2 font-space-grotesk text-[32px] font-bold text-dark-grey ">
        Recommended
      </h2>

      <hr className="col-span-full mb-[64px] border-0 md:mb-[56px]" />

      <div className="col-span-2 col-start-2 md:col-span-6 md:col-start-2 xl:col-span-4 xl:col-start-2">
        <a href="#">
          <img
            className="h-square w-full rounded object-cover object-top transition-all duration-200 hover:scale-[102%] md:h-[600px] xl:h-[324px]"
            src="images/phone.png"
            alt="phone image"
          />
        </a>

        <hr className="my-[12px] border-0" />

        <h3 className="font-space-grotesk text-[18px] font-bold leading-[140%]">
          Phone (1)
        </h3>

        <hr className="my-[4px] border-0" />

        <p className="font-space-mono xl:w-[280px]">
          <span className="xl:hidden">
            Designed with instinct, to bring joy back to the everyday.
          </span>
          Through the Glyph Interface, a perfected OS and exceptional dual
          camera. All startlingly fast.
        </p>

        <hr className="my-[6px] border-0" />

        <p className="font-space-grotesk font-bold leading-[140%]">$ 499.00</p>
      </div>

      <hr className="col-span-full mb-[64px] border-0 md:mb-[56px] xl:hidden" />

      <div className="col-span-2 col-start-2 md:col-span-6 md:col-start-2 xl:col-span-4 xl:col-start-6">
        <a href="#">
          <img
            className="h-square w-full rounded object-cover object-top transition-all duration-200 hover:scale-[102%] md:h-[600px] xl:h-[324px]"
            src="images/ear-buds-case.png"
            alt="phone image"
          />
        </a>

        <hr className="my-[12px] border-0" />

        <h3 className="font-space-grotesk text-[18px] font-bold leading-[140%]">
          Ear (2)
        </h3>

        <hr className="my-[4px] border-0" />

        <p className="font-space-mono xl:w-[280px]">
          Perfecting the path from artist to ear. So that music sounds just as
          it was intended.
        </p>

        <hr className="my-[6px] border-0" />

        <p className="font-space-grotesk font-bold leading-[140%]">$ 149.00</p>
      </div>

      <hr className="col-span-full mb-[64px] border-0 md:mb-[56px] xl:hidden" />

      <div className="col-span-2 col-start-2 md:col-span-6 md:col-start-2 xl:col-span-4 xl:col-start-10">
        <a href="#">
          <img
            className=" h-square w-full rounded object-cover object-top transition-all duration-200 hover:scale-[102%] md:h-[600px] xl:h-[324px]"
            src="images/ear-buds-stick.png"
            alt="phone image"
          />
        </a>

        <hr className="my-[12px] border-0" />

        <h3 className="font-space-grotesk text-[18px] font-bold leading-[140%]">
          Ear (stick)
        </h3>

        <hr className="my-[4px] border-0" />

        <p className="font-space-mono xl:w-[280px]">
          Tech you can’t feel. Leaving just space for sound to come to life.
          Powered by custom sound technology.
        </p>

        <hr className="my-[6px] border-0" />

        <p className="font-space-grotesk font-bold leading-[140%]">$ 119.00</p>
      </div>
    </>
  );
};
