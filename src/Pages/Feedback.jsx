const Feedback = ({ feedbackDa }) => {
    const {
        feedback,
        location,
        name,
        photo,
        rating
    } = feedbackDa;

    return (
        <div className="w-full max-w-sm bg-gradient-to-br from-blue-900 to-cyan-700 text-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center p-6">
                <div className="mb-4">
                    <img
                        src={photo}
                        alt={name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-cyan-400 shadow-md"
                    />
                </div>

                <div className="text-center">
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p className="text-sm text-cyan-200">{location}</p>
                </div>

                <div className="mt-4 text-center">
                    <h4 className="text-base font-semibold mb-1 text-cyan-300">Feedback</h4>
                    <p className="text-sm text-gray-200 italic leading-relaxed line-clamp-4">“{feedback}”</p>
                </div>

                <div className="mt-4 flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-500"}>
                            ★
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feedback;
