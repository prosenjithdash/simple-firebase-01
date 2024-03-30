import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex gap-9 justify-center text-blue mt-10 p-4">
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
        </div>
    );
};

export default Navbar;