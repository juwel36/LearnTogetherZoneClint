import  { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Navbar/Footer";
import PDFGenerator from "./PDFGenerator"; 
import { PDFDownloadLink } from "@react-pdf/renderer"; 

const ViewAssignment = () => {
  const {
    Deficalty,
    date,
    description,
    image,
    marks,
    title,
    _id,
  } = useLoaderData(null);

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
    <div className="bg-white">
      <div className="max-w-6xl mx-auto pb-14">
        <Navbar />
        <div className="text-black pt-10">
          <div className="flex">
            <div className="w-2/4">
              <img className="w-96 h-72" src={image} alt="" />
            </div>
            <div>
              <p className="text-4xl font-semibold py-2">{title}</p>
              <p className="py-2">Submitted: {date}</p>
              <p className="py-2">Difficulty Level: {Deficalty}</p>
              <p className="py-2">Marks: {marks}</p>
              <button className="btn btn-success" onClick={togglePDF}>Convert as a PDF</button>
              {showPDF && (
                <PDFDownloadLink
                  document={<PDFGenerator data={data} />}
                  fileName="assignment.pdf"
                >
                  {({ blob, url, loading, error }) =>
                    loading ? "Loading document..." : <button className="btn btn-link">Download PDF</button> 
                  }
                </PDFDownloadLink>
              )}
            </div>
          </div>
          <p className="text-lg font-medium pt-9">{description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewAssignment;
