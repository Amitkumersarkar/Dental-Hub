import { useLoaderData } from "react-router-dom";
import Feedback from "./Feedback";

const About = () => {
    const feedbacks = useLoaderData();
    const { feedbackData } = feedbacks;
    console.log(feedbackData);
    return (
        <>
            <h1 className="text-2xl font-semibold">Customer FeedBack : </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-30 m-5">
                {
                    feedbackData.map(feedbackDa => <Feedback key={feedbackDa.id} feedbackDa={feedbackDa}></Feedback>)
                }
            </div>
        </>
    );
};

export default About;