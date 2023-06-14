import Featured from "../../Components/featured/Featured";
import Header from "../../Components/header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Properties from "../../Components/Properties/Properties";
import FeaturedProperties from "../../Components/featuredProperties/FeaturedProperties";
import MailList from "../../Components/mailList/MailList";
import Footer from "../../Components/footer/Footer";
import "./home.css"

const Home = () => {
  return (
    <div>
  <Navbar/>
  <Header/>
  <div className="homecontainer">
    <Featured/>
    <h1 className="homeTitle"> Browse by the Properties Type</h1>
    <Properties/>
    <h1 className="homeTitle"> Home Guest love</h1>
    <FeaturedProperties/>
    <MailList/>
    <Footer/>
  </div>
  </div>
  )
};

export default Home;