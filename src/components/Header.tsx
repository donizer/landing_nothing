import { HeaderMenuBar } from './HeaderMenuBar';

export const Header = () => {
  return (
    <>
      <div className="bg-lady-with-phone col-span-full flex h-[100dvh] w-full flex-col justify-between bg-cover bg-center px-[20px] md:px-[72px] xl:px-[120px]">
        <HeaderMenuBar phone />

        <h1 className="font-space-grotesk text-dark-grey mb-[40px] text-[36px] font-bold leading-[100%] md:mb-[65px] md:w-[392px] md:text-[48px] xl:w-[498px] xl:text-[56px] xl:mb-[92px]">
          Bring joy back to the everyday
        </h1>
      </div>
    </>
  );
};
