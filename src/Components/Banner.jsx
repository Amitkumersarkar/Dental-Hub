import { NavLink } from "react-router-dom";
import bannerImage from "../../public/assets/banner.png"
const Banner = () => {

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className="w-150 "
                    src={bannerImage}
                />
                <div>
                    <h1 className="text-5xl font-bold text-cyan-500">Brighten Your Smile
                        with Expert Care!</h1>
                    <p className="py-6 text-gray-300">
                        From routine check-ups to advanced procedures, our experienced team ensures your dental health
                    </p>
                    <NavLink to='/treatment'>
                        <button className="btn btn-primary">Get Explore</button>
                    </NavLink>
                </div>
            </div>

        </div>
    );
};

export default Banner;