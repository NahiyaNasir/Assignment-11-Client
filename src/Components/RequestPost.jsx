import axios from "axios";
import {  useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import { RxCross1 } from "react-icons/rx";




const RequestPost = () => {
     const [request,setRequest]=useState([])
   
    useEffect(()=>{
        axios.get('https://assigment-11-server-two.vercel.app/requested-volunteer')
        .then(res=>{
            // console.log(res.data)
            setRequest(res.data)
        })
    },[])
   const handleCancel=_id=>{
    console.log(_id)
   }
   
    return (
        <div>
            <div>
                <Helmet><title>Volunteers Request</title></Helmet>
            </div>
          <div className="overflow-x-auto">
  <table className="table border border-lime-400">
    {/* head */}
    <thead>
      <tr className=" ">
        
   
        <th>Post Title</th>
        <th>Location</th>
        <th>Deadline</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

        {
            request.map(r=> <tr key={r._id}>
       
                {/*  */}
                <td>
                {r.title}
                  <br/>
                  <span className="badge badge-ghost badge-sm uppercase">{r.category}</span>
                </td>
                <td>{r.location}</td>

                <th>
                  <button className="btn btn-ghost btn-xs">{r.deadline}</button>
                </th>
              
               <th>
                  <button className="btn btn-ghost btn-xs"onClick={()=>handleCancel(r._id)}><RxCross1 /></button>
                </th>
             
              </tr>)
        }
      {/* row 1 */}
   
     
    
    </tbody>
 
   
    
  </table>
</div>
        </div>
    );
};

export default RequestPost;