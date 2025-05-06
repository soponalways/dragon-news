import React from 'react';
import { Link } from 'react-router';
import { FaArrowLeft, FaEye, FaStar } from 'react-icons/fa';

const NewsDetailsCard = ({ news }) => {
    const {
        category_id,
        title,
        image_url,
        details,
        author,
        total_view,
        rating,
        tags,
    } = news;

    const formattedDate = new Date(author?.published_date).toLocaleDateString();

    return (
        <div className="card bg-base-100 shadow-xl mb-6">
            <figure>
                <img src={image_url} alt={title} className="w-full max-h-96 object-cover" />
            </figure>
            <div className="card-body space-y-3">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <img
                            src={author?.img}
                            alt={author?.name}
                            className="w-10 h-10 rounded-full border"
                        />
                        <div>
                            <p className="font-semibold">{author?.name}</p>
                            <p className="text-sm text-gray-500">{formattedDate}</p>
                        </div>
                    </div>
                    <div className="ml-auto flex items-center gap-2 text-yellow-500">
                        <FaStar />
                        <span className="font-medium">{rating?.number}</span>
                        {rating?.badge && (
                            <span className="badge badge-warning text-white">{rating?.badge}</span>
                        )}
                    </div>
                </div>

                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-justify text-gray-700">{details}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                    {tags?.map((tag, idx) => (
                        <span key={idx} className="badge badge-outline badge-info">
                            #{tag}
                        </span>
                    ))}
                </div>

                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-2 text-gray-600">
                        <FaEye />
                        <span>{total_view} views</span>
                    </div>
                    <Link to={`/category/${category_id}`} className="btn btn-secondary btn-sm">
                       <FaArrowLeft/> All News In this Category
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsCard;
