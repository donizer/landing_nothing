import { CategoryItem } from './CategoryItem';
import { StylishButton } from './StylishButton';

export const ProductsCategories = () => {
  return (
    <>
      <h2 className="col-span-2 col-start-2 font-space-grotesk text-[32px] font-bold text-dark-grey md:col-span-6 md:col-start-2 xl:text-[40px]">
        Browse Nothing products by category
      </h2>

      <hr className="col-span-full mb-[48px] border-0" />

      <CategoryItem title="All products">
        <a
          className="object-cover transition-all hover:scale-[102%] md:col-span-2 md:h-[184px] md:object-top xl:h-[324px]"
          href="#"
        >
          <img
            className="h-square1/2 w-full rounded object-cover md:col-span-2 md:h-[184px] md:object-top xl:h-[324px]"
            src="images/parrots.png"
            alt="123"
          />
        </a>
        <a
          className="object-cover transition-all hover:scale-[102%] md:h-[184px] md:object-top xl:h-[324px]"
          href="#"
        >
          <img
            className="h-square1/2 w-full rounded object-cover md:h-[184px] md:object-top xl:h-[324px]"
            src="images/ear-buds-case-hand.png"
            alt="123"
          />
        </a>
      </CategoryItem>

      <hr className="col-span-full mb-[40px] border-0" />

      <CategoryItem title="Audio">
        <a
          className="object-cover transition-all hover:scale-[102%] md:h-[184px] md:object-top xl:h-[324px]"
          href="#"
        >
          <img
            className="h-square1/2 w-full rounded bg-[#E5E6E8] object-cover  md:h-[184px] xl:h-[324px]"
            src="images/ear-bud.png"
            alt="123"
          />
        </a>

        <a
          className="object-cover transition-all hover:scale-[102%] md:col-span-2 md:h-[184px] md:object-top xl:h-[324px]"
          href="#"
        >
          <img
            className="h-square1/2 w-full rounded object-cover md:col-span-2 md:h-[184px] md:object-top xl:h-[324px]"
            src="images/ear-buds-hand.png"
            alt="123"
          />
        </a>
      </CategoryItem>

      <hr className="col-span-full mb-[40px] border-0" />

      <CategoryItem title="Accessories">
        <a
          className="object-cover transition-all hover:scale-[102%] md:col-span-2 md:h-[184px] md:object-top xl:h-[324px]"
          href="#"
        >
          <img
            className="h-square1/2 w-full rounded object-cover md:col-span-2 md:h-[184px] md:object-center xl:h-[324px]"
            src="images/phone-on-table.png"
            alt="123"
          />
        </a>
        <a
          className="object-cover transition-all hover:scale-[102%] md:h-[184px] md:object-top xl:h-[324px]"
          href="#"
        >
          <img
            className="h-square1/2 w-full rounded bg-[#E5E6E8] object-cover md:h-[184px] xl:h-[324px]"
            src="images/charger.png"
            alt="123"
          />
        </a>
      </CategoryItem>

      <hr className="col-span-full mb-[40px] border-0 md:mb-[56px]" />

      <div className="col-span-2 col-start-2 md:col-span-6 md:col-start-2 xl:col-span-4 xl:col-start-2">
        <StylishButton>View all</StylishButton>
      </div>
    </>
  );
};
