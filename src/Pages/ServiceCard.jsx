const ServiceCard = ({ service }) => {
    const { title, description, image, price, features } = service;

    return (
        <div className="flex flex-col bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300">
            <img
                src={image}
                alt={title}
                className="w-full h-48 sm:h-56 md:h-60 object-cover"
            />
            <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
                <h2 className="text-lg sm:text-xl font-bold text-cyan-600 mb-1">{title}</h2>
                <p className="text-sm text-gray-600 mb-2 line-clamp-3">{description}</p>

                <p className="text-base font-semibold text-indigo-500 mb-2">{price}</p>

                {features && features.length > 0 && (
                    <ul className="text-sm text-gray-500 list-disc pl-5 space-y-1">
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                )}
                <button className="btn btn-primary mt-3">CheckOut Now</button>
            </div>
        </div>
    );
};

export default ServiceCard;
