import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const AddPost = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const handleAddItem = (e) => {
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
    const number = parseInt(from.number.value)
   
    const newItem = {
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
    console.log(newItem)
    fetch('http://localhost:5000/volunteer',{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newItem)
    })
    .then(res=> res.json())
    .then(data=>{
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Added Item Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
    })


   
  };

  return (
    <div>
      <div className="bg-sky-800 p-24 my-6 mx-auto font-mono">
        <h1 className=" text-center font-sans text-6xl mb-5 text-gray-300">
          Add Volunteer
        </h1>

        <form onSubmit={handleAddItem}>
          {/*  from row 1 */}
          <div className=" mb-8 md:flex">
            <label className="form-control md:w-1/2 mr-4">
              <div className="label">
                <span className="label-text"> Organizer name</span>
              </div>
              <input
                type="text"
                placeholder="UserName"
                name="name"
                defaultValue={user?.displayName}
                readOnly
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control md:w-1/2 mr-4">
              <div className="label">
                <span className="label-text">organizer email </span>
              </div>
              <input
                type="text"
                placeholder="User E-mail"
                readOnly
                name="email"
                defaultValue={user?.email}
                className="input input-bordered w-full "
              />
            </label>
            {/* from row 2 */}
          </div>
          <div className=" md:flex ">
            <label className="form-control md:w-1/2 mr-4">
              <div className="label">
                <span className="label-text">Thumbnail</span>
              </div>
              <input
                type="text"
                placeholder="Thumbnail"
                name="img"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Post Title</span>
              </div>
              <input
                type="text"
                placeholder="Post Title"
                name="title"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          {/* from row 3 */}
          <div className=" md:flex ">
            <label className="form-control md:w-1/2 mr-4">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <select
                className="select select-bordered w-full  "
                name="category"
              >
                <option value="subcategory Names">Category</option>
                <option value="health"> Health</option>
                <option value="edu">Education</option>
                <option value="social">Social Services</option>
                <option value="animal">Animal Welfare</option>
              </select>
            </label>

            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text"> Description</span>
              </div>
              <input
                type="text"
                placeholder="Short Description"
                name="desc"
                className="input input-bordered w-full  textarea"
              />
            </label>
          </div>
          <div className=" md:flex ">
            <label className="form-control md:w-1/2 mr-4">
              <div className="label">
                <span className="label-text">Location</span>
              </div>
              <input
                type="text"
                placeholder="location"
                name="location"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Number of Volunteer</span>
              </div>
              <input
                type="number"
                placeholder="Number of Volunteer"
                name="number"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          {/*  from row 4 */}
          <div className=" mb-8 md:flex">
            <label className="form-control md:w-1/2 mr-4">
              <div className="label">
                <span className="label-text">Deadline</span>
              
              </div>
              <DatePicker   className="input input-bordered w-full" selected={startDate} onChange={(date) => setStartDate(date)} name="deadline" />
              {/* <input
                type="text"
                placeholder="Deadline"
                name="deadline"
                className="input input-bordered w-full "
               
              /> */}
            </label>
          </div>

          <input type="submit" value="Add " className="btn btn-block " />
        </form>
      </div>
    </div>
  );
};

export default AddPost;
