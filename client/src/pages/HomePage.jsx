import { Link } from "react-router-dom"


const HomePage = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center">
        <div className="flex flex-col gap-4 bg-gray-100 py-6 rounded-lg shadow-sm shadow-black min-h-5/6 overflow-hidden  px-8 justify-center">
            <div className="flex justify-start">
                <Link to={"/add"} className="border border-solid border-gray-200 px-6 py-2 bg-blue-500 text-white text-lg fond-bold rounded-lg shadow-lg shadow-black/50" >Add List</Link>
            </div>
            <table className="border-collapse border border-slate-400  border-spacing-0 border-solid bg-white text-blue-gray-900">
                <thead>
                    <tr>
                        <th className="border px-6 py-4 border-slate-300">Full Name</th>
                        <th className="border px-6 py-4 border-slate-300">Email</th>
                        <th className="border px-6 py-4 border-slate-300">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-6 py-4 border-slate-300">Company A</td>
                        <td className="border px-6 py-4 border-slate-300">$50.25</td>
                        <td className="border px-6 py-4 border-slate-300">
                            <button className="font-medium hover:bg-rose-700 px-4 py-2 bg-rose-500 rounded-lg text-white mr-4">delete</button>
                            <Link to={"/edit"} className="font-medium hover:bg-blue-700 px-4 py-2 bg-blue-500 rounded-lg text-white">Edit</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default HomePage