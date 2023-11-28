import { Helmet } from "react-helmet-async";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import CategoryMeals from "../CategoryMeals/CategoryMeals";
import MembershipCart from "../MembershipCart/MembershipCart";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Students Hostel | Home</title>
            </Helmet>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <CategoryMeals></CategoryMeals>
            <MembershipCart></MembershipCart>
        </div>
    );
};

export default Home;