import { Modal } from './components/Modal';
import { GridContainer } from './components/GridContainer';
import { Header } from './components/Header';
import { Recommended } from './components/Recommended';
import { ProductsCategories } from './components/ProductsCategories';
import { AboutUs } from './components/AboutUs';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Modal />

      <GridContainer>
        <Header />
      </GridContainer>

      <GridContainer id="products">
        <Recommended />
      </GridContainer>

      <hr className="mb-[96px] border-0 md:mb-[120px]" />

      <GridContainer id="store">
        <ProductsCategories />
      </GridContainer>

      <hr className="mb-[96px] border-0 md:mb-[120px] xl:md:mb-[128px]" />

      <GridContainer>
        <img
          className="col-span-full h-[200px] w-full object-cover object-bottom md:h-[400px] xl:h-[460px]"
          src="../images/background-macro.png"
          alt=""
        />
      </GridContainer>

      <hr className="mb-[48px] border-0 md:mb-[56px] " />

      <GridContainer>
        <AboutUs />
      </GridContainer>

      <hr className="mb-[104px] border-0 md:mb-[120px]" />

      <GridContainer>
        <Footer />
      </GridContainer>

      <hr className="mb-[64px] border-0 xl:mb-[120px]" />
    </>
  );
}

export default App;
