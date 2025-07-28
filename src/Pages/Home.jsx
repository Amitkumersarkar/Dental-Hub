// import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
// import ServiceCard from "./ServiceCard";

const Home = () => {
    // const services = useLoaderData();
    // console.log(services);
    // const { servicesData } = services;
    return (
        <div>
            <Banner></Banner>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                {
                    servicesData.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div> */}
        </div>
    );
};

export default Home;