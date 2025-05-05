import React from "react";
import { FaEye, FaStar } from "react-icons/fa";
import { format } from "date-fns";
import { CiShare2 } from "react-icons/ci";
import { FiBookmark } from "react-icons/fi";

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        image_url,
        details,
        total_view,
        rating,
    } = news;

    const formattedDate = format(new Date(author.published_date), "yyyy-MM-dd");

    return (
        <div className="card bg-base-100 shadow-md rounded-lg overflow-hidden">
            {/* Author Info */}
            <div className="bg-base-200 flex justify-between items-center p-4 border-b border-b-accent/50">
                <div className="flex items-center gap-4">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="font-semibold">{author.name}</h2>
                        <p className="text-sm text-gray-500">{formattedDate}</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <button><FiBookmark size={24} /></button>
                    <button><CiShare2 size={24} /></button>
                </div>
            </div>

            {/* Title */}
            <div className="p-4 pt-2">
                <h1 className="text-xl font-bold">{title}</h1>
            </div>

            {/* News Image */}
            <figure className="px-4">
                <img src={image_url} alt="News" className="w-full rounded-lg" />
            </figure>

            {/* Details */}
            <div className="p-4 text-gray-700 text-sm">
                {details.slice(0, 200)}...
                <span className="text-orange-500 font-semibold cursor-pointer">
                    {" "}
                    Read More
                </span>
            </div>

            {/* Footer Info */}
            <div className="px-4 py-5 flex items-center justify-between border-t border-t-accent/50 text-sm text-gray-600">
                {/* Rating */}
                <div className="flex items-center gap-1 text-orange-500">
                    {Array(rating.number)
                        .fill(0)
                        .map((_, i) => (
                            <FaStar key={i} />
                        ))}
                    <span className="text-gray-700 ml-2">{rating.number}</span>
                </div>

                {/* Views */}
                <div className="flex items-center gap-1">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
