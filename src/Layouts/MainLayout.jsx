/* eslint-disable react/no-unknown-property */
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
const MainLayout = () => {
    

    return (
        <div>
            {/* header */}
            <section className="bg-emerald-300 flex justify-between items-center px-10 shadow-lg py-5 ">
                <div>
                    <a href="/">
                        <h1 className="text-xl font-bold">Shongkoi</h1>

                    </a>

                </div>

                <nav>
                    <ul className="flex flex-row gap-5 text-xl">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/products">Products</a>
                        </li>
                        <li>
                            <a href="/dashboard">Dashboard</a>
                        </li>
                    </ul>

                </nav>
            </section>
            

            {/* content */}
            <Outlet></Outlet>

            {/* footer */}
            <section>

                <Footer></Footer>

            </section>
        </div>
    );
};

export default MainLayout;