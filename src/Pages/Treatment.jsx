import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Treatment = () => {
    const serviceData = useLoaderData();
    // console.log(services)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
            {
                serviceData.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
            }
        </div>
    );
};

export default Treatment;