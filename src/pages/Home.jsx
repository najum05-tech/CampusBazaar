import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories.jsx";
import FeaturedProducts from "../components/FeaturedProducts.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import WhyCampusBazaar from "../components/WhyCampusBazaar.jsx";
import Stats from "../components/Stats.jsx";
import SellCTA from "../components/SellCTA.jsx";
import Footer from "../components/Footer.jsx";



function Home() {
    return (
        <>
            <Navbar />

            <main>
                 <Hero />
                 <Categories />
                 <FeaturedProducts />
                 <HowItWorks />
                 <WhyCampusBazaar />
                 <Stats />
                 <SellCTA />
                 <Footer/>
            </main>
        </>
    );
}

export default Home;