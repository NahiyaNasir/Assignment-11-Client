/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  console.log(details);
  const {
    img,
    desc,
    category,
    location,
    deadline,

    title,
    _id,
    number,
  } = details;
 

  return (
    <div className="my-10">
      <h4>{details?.title}</h4>
      <section className="bg-gray-800 text-gray-100">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900"
          >
            <img
              src={img}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {title}
              </h3>
              <h3 className="text-2xl font-semibold sm:text-4xl  uppercase">
                {category}
              </h3>
              <h3 className="text-2xl font-semibold sm:text-4xl ">
                {location}
              </h3>
              <h3 className="text-2xl font-semibold sm:text-4xl ">
                {" "}
                Volunteer Quantity:{number}
              </h3>
              <span className="text-xs text-gray-400 font-semibold">
                {deadline}
              </span>
              <p>{desc}.</p>
              <div className="flex justify-end">
                <Link to={`/beVolunteer/${_id}`}>
                  <button className="btn">Be A Volunteer</button>
                </Link> 
            


              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Details;
