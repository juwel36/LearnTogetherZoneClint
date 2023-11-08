import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Authproder/Authprovider";
import { Link } from "react-router-dom";
import Spinner from "../../Components/Spinner";
import { Document, Page } from "react-pdf"; // Import from react-pdf

const SubmitedAssignments = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [statusFilter, setStatusFilter] = useState("pending");

  const { data: assignments = [], isPending, error } = useQuery({
    queryKey: ['assignments'],
    queryFn: async () => {
      const res = await axios.get('https://learn-together-server.vercel.app/submit');
      return res.data;
    }
  });

  useEffect(() => {
    if (assignments) {
      setData(assignments);
    }
  }, [assignments]);

  if (isPending) {
    return <div><Spinner></Spinner></div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const filteredData = data.filter((item) => item.status === statusFilter);

  const showPdf = (pdfUrl) => {
    // Open the PDF in a new window/tab
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="bg-black">
      <Navbar></Navbar>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-5">
          {filteredData.map((item) => (
            <div key={item._id} className="card lg:card-side bg-white text-black shadow-xl">
              <figure><img className="w-40 lg:h-40 w-fit" src={item.photo} alt="Album" /></figure>
              <div className="card-body">
                <h2 className="card-title font-bold text-teal-800"> User Name : {user.displayName} </h2>
                <h2 className="card-title">Title: {item.dataTitle} </h2>
                <p> {item.initalMarks}  </p>

                <div className="card-actions justify-end items-center">
                  <Link to={`/givemark/${item._id}`}>  <button className="btn"> Give Mark </button> </Link>
                  <button className="btn" onClick={() => showPdf(item.pdf)}> preview </button> {/* Add this button */}
                  <button className="  ">{item.status}...</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubmitedAssignments;
