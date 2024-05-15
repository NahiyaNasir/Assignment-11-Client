import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const UpdateRequest = () => {
  const updateRequest = useLoaderData();

  console.log(updateRequest);
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  
  const { desc, title, img, deadline, location, category, number,_id } =
    updateRequest;
  const handleUpdate = (e) => {
    e.preventDefault();
    const from = e.target;
   console.log(user)
    const name = user?.displayName
    const email = user?.email
    const category = from.category.value;
    const location = from.location.value;
    const deadline = from.deadline.value;
    const img = from.img.value;
    const desc = from.desc.value;
    const title = from.title.value;
    const number = parseInt(from.number.value);

    const updateItem = {
      name,
      email,
      category,
      location,
      deadline,
      img,
      title,
      desc,
      number,
    };
    console.log(updateItem);
    fetch(`https://assigment-11-server-two.vercel.app/single-volunteer-update/${_id}`,{
        method:'put',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(updateItem)
    })
    .then(res=> res.json())
    .then(data=>{
        console.log(data)
        if (data.modifiedCount>0) {
          Swal.fire({
            title: "Success!",
            text: "Updated Post Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
    })
    
}
  ;
 
        

  return (
    <div>
        <Helmet><title> Update Volunteer Request</title></Helmet>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 my-11 border border-lime-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Update Request
        </h2>

        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="username"
              >
                Organizer Name
              </label>
              <input
                id="username"
                type="text"
                name="name"
                defaultValue={user?.displayName}
             readOnly
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="emailAddress"
              >
                {" "}
                Organizer Email{" "}
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                defaultValue={user?.email}
                readOnly
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                
              >
                Post Title
              </label>
              <input
                id=""
                type="text"
                name="title"
                defaultValue={title}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Thumbnail
              </label>
              <input
                id=""
                type="text"
                name="img"
                defaultValue={img}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Location
              </label>
              <input
                id=""
                type="text"
                name="location"
                defaultValue={location}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Description
              </label>
              <input
                id=""
                type="text"
                name="desc"
                defaultValue={desc}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Deadline
              </label>{" "}
              <br />
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                name="deadline"
               defaultValue={deadline}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                {" "}
                Category
              </label>

              <select
                className="select select-bordered w-full select-warning "
                name="category"
                defaultValue={category}
              >
                <option value="subcategory Names">Category</option>
                <option value="health"> Health</option>
                <option value="edu">Education</option>
                <option value="social">Social Services</option>
                <option value="animal">Animal Welfare</option>
              </select>
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Number Of Volunteer Need
              </label>
              <input
                id=""
                type="number"
                name="number"
                defaultValue={number}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
           Update Post
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateRequest;
