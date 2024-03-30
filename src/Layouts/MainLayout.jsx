import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="w-[90%] max-w-[1440px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;