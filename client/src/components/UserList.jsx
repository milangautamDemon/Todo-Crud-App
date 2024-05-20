import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


const UserList = ({users, setUsers}) => {
    const handleDelete = async(userId) =>{
        console.log(userId)
        await axios.delete(`http://localhost:3000/api/delete-user/${userId}`)
        .then(response => {
            setUsers(prevUser => prevUser.filter(user => user._id !== userId))
            toast.success(response.data.message, { position : "top-right" })
        })
        .catch(error => console.log(error))
    }
  return (
    users.map((user, index) => (
        <tr key={user._id}>
            <td className="border px-6 py-4 border-slate-300">{index + 1}</td>
            <td className="border px-6 py-4 border-slate-300">{user.name}</td>
            <td className="border px-6 py-4 border-slate-300">{user.userName}</td>
            <td className="border px-6 py-4 border-slate-300">
                <button onClick={() => handleDelete(user._id)} className="font-medium hover:bg-rose-700 px-4 py-2 bg-rose-500 rounded-lg text-white mr-4">delete</button>
                <Link to={`/edit/${user._id}`} className="font-medium hover:bg-blue-700 px-4 py-2 bg-blue-500 rounded-lg text-white">Edit</Link>
            </td>
        </tr>
    ))
  )
}

export default UserList;