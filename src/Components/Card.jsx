/* eslint-disable react/prop-types */
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";



const Card = ({i}) => {
    // eslint-disable-next-line react/prop-types
    const {img,title,deadline, category,_id}=i
    // console.log(i)


    return (
        <div>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100">
	
	<div>
		<img src={img} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
		<h2 className="mb-1 text-xl font-semibold">{title}</h2>
		<p className="text-sm text-gray-400 font-semibold ">{deadline}</p>
		<p className="text-sm text-gray-400 font-semibold ">{category}</p>
	</div>
	<div className="flex flex-wrap justify-between">
		
		<Link to={`/details/${_id}`}>
        <button className="btn ">
            Details <FaChevronRight />
        </button>
        </Link>
	</div>
</div>
        </div>
    );
};

export default Card;