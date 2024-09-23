import star from "../assets/star.svg";

const TestimonialCard = ({ image, name, role, rating, review }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full">
            <div className="flex items-start mb-4 gap-3">
                <img
                    src={image}
                    alt={name}
                    className="h-16 w-16 rounded-xl mr-4"
                />
                <div>
                    <h4 className="font-bold text-lg">{name}</h4>
                    <p className="text-green-500">{role}</p>
                    <div className="flex items-center mb-2">
                        {Array.from({ length: rating }, (_, i) => (
                            <img src={star} alt="" className="" key={i} />
                        ))}
                    </div>
                </div>
            </div>

            <p className="text-gray-600 flex-grow text-justify">{review}</p>
        </div>
    );
};

export default TestimonialCard;
