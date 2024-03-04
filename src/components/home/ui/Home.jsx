import Banner from "./Banner";
import Caracter from "./Caracter";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Project from "./Project";
import Use from "./Use";
import VideoSection from "./VideoSection";


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <VideoSection/>
            <Project/>
            <Use/>
            <Caracter/>
            <Footer/>
        </div>
    );
};

export default Home;