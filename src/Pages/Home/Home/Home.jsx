import { Helmet } from "react-helmet-async";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import CategoryMeals from "../CategoryMeals/CategoryMeals";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Students Hostel | Home</title>
            </Helmet>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <CategoryMeals></CategoryMeals>
        </div>
    );
};

export default Home;