import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../components/UserList.jsx";

const HomePage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/get-users");
                setUsers(response.data.data);
                toast.success(response.data.message, { position: "top-right" });
            } catch (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    toast.error(`Error: ${error.response.data.message}`, { position: "top-right" });
                } else if (error.request) {
                    // The request was made but no response was received
                    toast.error("Error: No response from server", { position: "top-right" });
                } else {
                    // Something happened in setting up the request that triggered an Error
                    toast.error(`Error: ${error.message}`, { position: "top-right" });
                }
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-screen min-h-screen flex justify-center items-center">
            <div className="flex flex-col gap-4 bg-gray-100 py-6 rounded-lg shadow-sm shadow-black min-h-5/6 overflow-hidden px-8 justify-center">
                <div className="flex justify-start">
                    <Link to={"/add"} className="border border-solid border-gray-200 px-6 py-2 bg-blue-500 text-white text-lg font-bold rounded-lg shadow-lg shadow-black/50">Add List</Link>
                </div>
                <table className="border-collapse border border-slate-400 border-spacing-0 border-solid bg-white text-blue-gray-900">
                    <thead>
                        <tr>
                            <th className="border px-6 py-4 border-slate-300">S.N.</th>
                            <th className="border px-6 py-4 border-slate-300">Full Name</th>
                            <th className="border px-6 py-4 border-slate-300">Email</th>
                            <th className="border px-6 py-4 border-slate-300">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <UserList users={users} setUsers={setUsers} />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HomePage;
