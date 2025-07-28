
const ViewDetails = ({ details }) => {
    const { title, image, summary, description, price, duration, benefits, precautions, doctor, name, photo, specialization } = details;
    // console.log(details);
    return (
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-6 md:p-10 text-gray-800">
            {/* Title & Image */}
            <div className="flex flex-col lg:flex-row gap-6">
                <img
                    src={image}
                    alt={title}
                    className="w-full lg:w-1/2 h-64 object-cover rounded-lg shadow-md"
                />
                <div className="flex flex-col justify-between">
                    <h2 className="text-3xl font-bold text-cyan-700 mb-2">{title}</h2>
                    <p className="text-gray-600 mb-4">{summary}</p>
                    <p className="text-sm mb-4 leading-relaxed">{description}</p>
                    <div className="text-sm font-medium text-indigo-600">
                        <p><span className="font-semibold">Price:</span> {price}</p>
                        <p><span className="font-semibold">Duration:</span> {duration}</p>
                    </div>
                </div>
            </div>

            {/* Benefits & Precautions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div>
                    <h3 className="text-xl font-semibold text-green-600 mb-2">Benefits</h3>
                    <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                        {benefits.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-red-500 mb-2">Precautions</h3>
                    <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                        {precautions.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Doctor Info */}
            <div className="flex items-center gap-4 mt-10 p-4 bg-gray-50 rounded-xl shadow-inner">
                <img
                    src={doctor.photo}
                    alt={doctor.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400"
                />
                <div>
                    <h4 className="text-lg font-semibold">{doctor.name}</h4>
                    <p className="text-sm text-gray-500">{doctor.specialization}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;