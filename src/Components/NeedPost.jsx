import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const NeedPost = () => {
  const [needPost, setNeedPost] = useState([]);
  const { user } = useContext(AuthContext);
  //   console.log(user);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `https://assigment-11-server-two.vercel.app/my-volunteer-email?email=${user?.email}`
        )
        .then((res) => {
          //   console.log(res.data);
          setNeedPost(res.data);
        });
    }
  }, [user?.email]);

  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://assigment-11-server-two.vercel.app/delete-single-volunteer/${_id}`
          )
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              
              axios
                .get(
                  `https://assigment-11-server-two.vercel.app/my-volunteer-email?email=${user?.email}`
                )
                .then((res) => {
                  // console.log(res.data);
                  setNeedPost(res.data)
                });
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>My Volunteer Post</title>
      </Helmet>

      <div className="container p-2 mx-auto sm:p-4 text-gray-100">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="bg-gray-700">
              <tr className="text-left">
                <th className="p-3">Post Title</th>
                <th className="p-3">Category</th>
                <th className="p-3">Deadline</th>
                <th className="p-3">Location</th>
                <th className="p-3">Update</th>
                <th className="p-3">Delete</th>
              </tr>
            </thead>
            <tbody>
              {needPost.map((n) => (
                <tr
                  className="border-b border-opacity-20 border-gray-700 bg-gray-900"
                  key={n._id}
                >
                  <td className="p-3">{n.title}</td>
                  <td className="p-3">{n.category}</td>
                  <td className="p-3">{n.deadline}</td>
                  <td className="p-3">{n.location}</td>
                  <td className="p-3 text-right">
                    <Link to={`/update/${n._id}`}>
                      <button className="">
                        <FaEdit className="text-xl" />
                      </button>
                    </Link>
                  </td>
                  <td className="p-3 ">
                    <button onClick={() => handleDelete(n._id)}>
                      {" "}
                      <MdDelete className="text-xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NeedPost;
