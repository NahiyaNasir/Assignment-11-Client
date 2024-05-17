/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const VolunteerNow = ({vn}) => {
    // console.log(vn)
    // eslint-disable-next-line no-unused-vars
    const {img,deadline,title, category,_id}=vn
    return (
        <div>
            <div className="card w-96 hover:bg-sky-300 shadow-xl bg-base-100 border border-stone-700">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <h2 className="card-title">{deadline}</h2>

    <p className="uppercase font-serif">{category}</p>
    <div className="card-actions">
     <Link to={`/details/${_id}`}>
     <button className="btn text-black bg-teal-100">View Details</button>
     </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default VolunteerNow;