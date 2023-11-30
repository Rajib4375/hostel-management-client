import { NavLink, Outlet } from "react-router-dom";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { MdOutlineRateReview } from "react-icons/md";
import { FaHome } from "react-icons/fa";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-amber-600 text-black ">
                <h1>Hostel Management</h1>
                <ul className="menu p-4">
                <li><NavLink to="/dashbord/myprofile">
                <CgProfile />
                    My Profile</NavLink></li>
                    <li><NavLink to="/dashbord/requestmeal">
                    <VscGitPullRequestGoToChanges />
                     Requested Meals</NavLink></li>
                     <li><NavLink to="/dashbord/myreview">
                     <MdOutlineRateReview />
                    My Reviews</NavLink></li>
                    <div className="divider bg-black"></div>
                    <li><NavLink to="/">
                     <FaHome></FaHome>
                    Home</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;