import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const BeVolunteer = () => {
    const be=useLoaderData()
    // console.log(be)
    const {desc,title,img,deadline,location,category,requested,number}=be
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext);
    console.log(user)
   const  handleRequested=e=>{
    e.preventDefault();
    const from = e.target;

    const name = from.name.value;
    const email = from.email.value;
    const category = from.category.value;
    const location = from.location.value;
    const deadline = from.deadline.value;
    const img = from.img.value;
    const desc = from.desc.value;
    const title = from.title.value;
    const suggest=from.suggest.value
    const number = parseInt(from.number.value)
   
    const reqItem = {
      name,
      email,
      category,
      location,
      deadline ,
      img,
      title,
      desc,
      number,
      suggest,
    };
    // console.log(reqItem)

    fetch('https://assigment-11-server-two.vercel.app/requested',{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(reqItem)
    })
    .then(res=> res.json())
    .then(data=>{
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Requested Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
    })


   }
    

    return (
        <div className=" my-10 bg-blue-300">
            <div>
           
            </div>
       <form onSubmit={handleRequested}>
        <label className="form-control w-full">
        <div className="label">
                <span className="label-text">Post Title</span>
              </div>
              <input
                type="text"
                placeholder="Post Title"
                name="title"
                defaultValue={title}
                readOnly
                className="input input-bordered w-full input-primary "
              />
            </label>
        <label className="form-control w-full">
        <div className="label">
                <span className="label-text">Description</span>
              </div>
              <input
                type="text"
                placeholder="Description"
                name="desc"
                defaultValue={desc}
                readOnly
                className="input input-bordered w-full input-primary "
              />
            </label>
        <label className="form-control w-full">
        <div className="label">
                <span className="label-text">Category</span>
              </div>
              <select
                className="select select-bordered w-full select-warning "
                name="category"
                defaultValue={category}
                readOnly
              >
                <option value="subcategory Names">Category</option>
                <option value="health"> Health</option>
                <option value="edu">Education</option>
                <option value="social">Social Services</option>
                <option value="animal">Animal Welfare</option>
              </select>
            </label>
        <div className=" md:flex">
        <label className="form-control md:w-1/2 mr-4">
        <div className="label">
                <span className="label-text">Location</span>
              </div>
              <input
                type="text"
                placeholder="location"
                name="location"
                defaultValue={location}
                readOnly
                className="input input-bordered w-full input-primary "
              />
            </label>
        <label className="form-control md:w-1/2">
        <div className="label">
                <span className="label-text">Status</span>
              </div>
              <input
                type="text"
                placeholder="Status"
                name="requested"
                defaultValue={requested}
                readOnly
                className="input input-bordered w-full input-primary "
              />
            </label>
        </div>
       <div className="md:flex">
       <label className="form-control md:w-1/2 mr-4">
        <div className="label">
                <span className="label-text">Deadline</span>
              </div>
              <DatePicker   className="input input-bordered input-info w-full" selected={startDate} onChange={(date) => setStartDate(date)} name="deadline" defaultValue={deadline} readOnly />
            </label>
       <label className="form-control  md:w-1/2">
        <div className="label">
                <span className="label-text">Suggestion</span>
              </div>
              <input
                type="text"
                placeholder="Suggestion"
                name="suggest"
                className="input input-bordered w-full input-primary "
              />
            </label>

       </div>
       {/*  from  row */}
        <div className="md:flex">
        <label className="form-control md:w-1/2 mr-4">
        <div className="label">
                <span className="label-text"> Organizer</span>
              </div>
              <input
                type="text"
                placeholder="Organizer"
                name="name"
                defaultValue={user?.displayName}
                readOnly
                className="input input-bordered w-full input-primary "
              />
            </label>
        <label className="form-control md:w-1/2">
        <div className="label">
                <span className="label-text">Organizer Email</span>
              </div>
              <input
                type="email"
                placeholder="Organizer Email"
                name="email"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered w-full input-primary "
              />
            </label>
        </div>
      <div className=" md:flex">
      <label className="form-control  mr-4 md:w-1/2">
        <div className="label">
                <span className="label-text">Volunteer Name</span>
              </div>
              <input
                type="text"
                placeholder="Volunteer Name"
                name="name"
                defaultValue={user?.displayName}
                readOnly
                className="input input-bordered w-full input-primary "
              />
            </label>
        <label className="form-control  md:w-1/2">
        <div className="label">
                <span className="label-text">Volunteer Email</span>
              </div>
              <input
                type="email"
                placeholder="Volunteer Email"
                name="email"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered w-full input-primary "
              />
            </label>
           
      </div>
    
    <div>
    <label className="form-control w-full">
        <div className="label">
                <span className="label-text"> Thumbnail</span>
              </div>
              <input
                type="text"
                placeholder="Thumbnail"
                name="img"
                defaultValue={img}
                readOnly
                className="input input-bordered w-full input-primary "
              />
            </label>
    <label className="form-control w-full">
        <div className="label">
                <span className="label-text"> </span>
              </div>
              <input
                type="number"
                placeholder="Number of Volunteer"
                name="number"
                defaultValue={number}
                readOnly
                className="input input-bordered w-full input-primary "
              />
            </label>
    </div>
      
     
            <input type="submit" value="Requested " className="btn btn-wide input-success my-5 " />
       </form>
        </div>
    );
};

export default BeVolunteer;