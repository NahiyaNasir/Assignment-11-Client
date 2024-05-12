
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";


const NeedPost = () => {
    const [needPost,setNeedPost]=useState([])
    const {user}=useContext(AuthContext)
    console.log(user)
     useEffect(()=>{
        if(user?.email){
            axios.get(`https://assigment-11-server-two.vercel.app/my-volunteer-email?email=${user?.email}`
          
        )
        .then(res=>{
            console.log(res.data)
            setNeedPost(res.data)
        })
        } },[user?.email])


//    if(user?.email){
//         //  fetch(`https://assigment-11-server-two.vercel.app/my-volunteer-email/${user?.email}`)
//         //  .then(res=>res.json())
//         //  .then(data=>{
//         //     console.log(data)
//         //     setNeedPost(needPost)
//         //  })
//    }
      
    
    return (
        <div>
            <h1> hello</h1>
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

                {
                    needPost.map(n=><tr className="border-b border-opacity-20 border-gray-700 bg-gray-900" key={n._id}>
					<td className="p-3">
						{n.title}
					</td>
					<td className="p-3">
					{n.category}
					</td>
					<td className="p-3">
                    {n.deadline}
					</td>
					<td className="p-3">
						{n.location}
					</td>
					<td className="p-3 text-right">
						
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
							
						</span>
					</td>
				</tr>)
                }
				<tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Microsoft Corporation</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$15,792</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
							<span>Pending</span>
						</span>
					</td>
				</tr>
				
				
				
			</tbody>
		</table>
	</div>
</div>

        </div>
    );
};

export default NeedPost;