import { Link, useLoaderData } from "react-router-dom";
import VolunteerNow from "./VolunteerNow";
import { CiCircleChevRight } from "react-icons/ci";
import { useEffect, useState } from "react";


import axios from "axios";
import Slider from "./Slider";
import Faq from "./Faq";
import GetUpdate from "./GetUpdate";

const Home = () => {
  const volunteerNow = useLoaderData();
  // const[newDeadline,setNewDeadline]=useState(volunteerNow)

  // console.log(volunteerNow)
  const [sort, setSort] = useState(volunteerNow);
  useEffect(() => {
    axios.get(
      `https://assigment-11-server-two.vercel.app/volunteer-upComing-deadline?sort=1`
    ).then(res=>{
      // console.log(res.data)
      setSort(res.data)
    })
  }, []);
  return (
    <div>
      <div className="my-10 ">
      <Slider></Slider>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-11">
        {sort.slice(0, 6).map((vn) => (
          <VolunteerNow key={vn._id} vn={vn}></VolunteerNow>
        ))}
      </div>
      <div className=" flex justify-center items-center my-7 ">
        <Link to="/need">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... btn p-4">
            See All <CiCircleChevRight className="text-xl" />
          </button>
        </Link>
      </div>
      <div className=" my-10">
    <Faq></Faq>
      </div>
      <div className=" my-12">
        <GetUpdate></GetUpdate>
      </div>
    </div>
  );
};

export default Home;
