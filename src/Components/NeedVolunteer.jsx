import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import axios from "axios";


const NeedVolunteer = () => {
    const need = useLoaderData();
  // console.log(need)
  const[needPost,setNeedPost]=useState(need)
   const [search,setSearch]=useState('')
   useEffect(()=>{
    if(search.length===0){
      return
    }
    axios.get(`https://assigment-11-server-two.vercel.app/volunteer-searchBy-title?search=${search}`)
    .then(res=>{
      console.log(res.data)
    setNeedPost(res.data)
    })
   },[ search])
  const handleSearch=e=>{
    e.preventDefault()
   const text=e.target.search.value
   setSearch(text)
   console.log(text)
  }
    return (
        <div>
            <div>
                <Helmet> <title>NeedVolunteer Page</title></Helmet>
            </div>
            <div className=" flex justify-center items-center my-10">
        <form onSubmit={handleSearch}>
          <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              name="search"
              placeholder="Post Title"
            
            />

            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {needPost.map((i) => (
          <Card key={i._id} i={i}></Card>
        ))}
      </div>
        </div>
    );
};

export default NeedVolunteer;