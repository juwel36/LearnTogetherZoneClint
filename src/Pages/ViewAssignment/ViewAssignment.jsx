import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Navbar/Footer";
import Swal from "sweetalert2";
import axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFGenerator from "./PDFGenerator";
import { useLoaderData } from "react-router-dom";

const ViewAssignment = () => {
  const {
    Deficalty,
    date,
    description,
    image,
    marks,
    title,
    email,
    _id,
  } = useLoaderData(); 

  const handletakeassignment = (e) => {
    e.preventDefault();
    const pdf = e.target.pdf.value;
    const note = e.target.note.value;
    const emailName = email;
    const status = "pending";
    const dataTitle = title;
    const photo = image;
    const dificaltyLevel = Deficalty;
    const time = date;
    const initalMarks = marks;

    const userData = {
      pdf,
      note,
      emailName,
      status,
      dataTitle,
      photo,
      dificaltyLevel,
      time,
      initalMarks,
    };

    axios.post("http://localhost:5000/submit", userData).then((res) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Take assignment successful",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  const [showPDF, setShowPDF] = useState(false);

  const data = {
    Deficalty,
    date,
    description,
    image,
    marks,
    title,
  };

  const togglePDF = () => {
    setShowPDF(!showPDF);
  };

  return (
    <div className="bg-white ">
      <div className="max-w-6xl mx-auto pb-14">
        <Navbar></Navbar>
        <div className="text-black pt-10">
          <div className="flex flex-col lg:flex-row">
            <div className="w-2/4">
              <img className="w-96 h-72" src={image} alt="" />
            </div>
            <div className="">
              <p className="text-4xl font-semibold py-2"> {title} </p>
              <p className="py-2"> submitted: {date} </p>
              <p className="py-2"> Difficulty Level: {Deficalty} </p>
              <p className="py-2"> Marks: {marks} </p>
              <button className="btn btn-info" onClick={togglePDF}>Convert as a PDF 🔁</button>
              {showPDF && (
                <PDFDownloadLink
                  document={<PDFGenerator data={data} />}
                  fileName="assignment.pdf"
                >
                  {({ blob, url, loading, error }) =>
                    loading ? "Loading document..." : <button className="btn bg-green-800 text-white ml-1" > Download Pdf 📥 </button>
                  }
                </PDFDownloadLink>
              )}
              
              <button
                className="btn ml-2 text-white bg-teal-800"
                onClick={() => document.getElementById("my_modal_1").showModal()}
              >
                Take assignment
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-white text-black">
                  <form onSubmit={handletakeassignment}>
                    <div>
                      <p className="font-bold text-lg">PDF Link</p>
                      <input
                        type="text"
                        name="pdf"
                        placeholder="Drop your pdf link"
                        className="input bg-teal-700 text-black input-primary w-full max-w-xs"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Quick note</p>
                      <input
                        type="text"
                        name="note"
                        placeholder="Write a quick note"
                        className="input bg-teal-700 text-black input-primary w-full max-w-xs"
                      />
                    </div>
                    <input type="submit" className="btn mt-5" value="Submit" />
                  </form>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
          <p className="text-lg font-medium pt-9"> {description} </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ViewAssignment;
