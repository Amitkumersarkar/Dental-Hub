import { useLoaderData } from "react-router-dom";
import ViewDetails from "./ViewDetails";

const Details = () => {
    const detail = useLoaderData();
    const { moreDetails } = detail;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                moreDetails.map(details => <ViewDetails key={details.id} details={details}></ViewDetails>)
            }
        </div>
    );
};

export default Details;