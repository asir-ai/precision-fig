import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Services from "./components/Services";
import CardComp from "./components/CardComp";
import Carousel1 from "./components/Carousel1";
import AboutUs from "./components/AboutUs";
import Review from "./components/Review";
import Comment from "./components/Comment";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-(--gray) sm:items-start">
        <Hero/>

        <Banner/>

        <Services/>

        <CardComp/>

        <Carousel1/>

        <AboutUs/>

        <Review/>
      </main>
    </div>
  );
}
