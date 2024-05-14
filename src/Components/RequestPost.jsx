import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { RxCrossCircled } from "react-icons/rx";

import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";

const RequestPost = () => {
  const [request, setRequest] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `https://assigment-11-server-two.vercel.app/requested-volunteer-email?email=${user?.email}`
        )
        .then((res) => {
          setRequest(res.data);
        });
    }
  }, [user?.email]);
  const handleCancel = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You Want To cancel Request.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `
            https://assigment-11-server-two.vercel.app/requested-volunteer-delete/${_id}`
          )
          .then((res) => {
            // console.log(res.data);
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Cancel!",
                text: "Your Request has been cancel.",
                icon: "success",
              });
              axios
                .get(
                  `https://assigment-11-server-two.vercel.app/requested-volunteer-email?email=${user?.email}`
                )
                .then((res) => {
                  // console.log(res.data);
                  setRequest(res.data);
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
      {request.length === 0 ? (
        <p  className="text-center text-red-600"> No Volunteer Request Found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>User Info</th>
                <th>Post Title</th>
                <th> Location</th>
                <th>Cancel</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {request.map((r) => (
                <tr key={r._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={user?.photoURL}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user?.displayName}</div>
                        <div className="text-sm opacity-50">{user?.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {r.title}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {r.deadline}
                    </span>
                  </td>
                  <td>{r.location}</td>
                  <th>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => handleCancel(r._id)}
                    >
                      {" "}
                      <RxCrossCircled className="text-xl text-red-600" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RequestPost;
