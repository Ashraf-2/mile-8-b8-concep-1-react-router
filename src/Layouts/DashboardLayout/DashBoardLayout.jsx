import { Link, Outlet } from "react-router-dom";
const DashBoardLayout = () => {
    return (
        <div className="h-screen flex">
            <div className="w-[20%] bg-red-200">
                <ul>
                    <li>
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/profile'>Profile</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/EditProfile'>Edit Profile</Link>
                    </li>
                </ul>
            </div>
            <div className="w-[80%]">

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoardLayout;