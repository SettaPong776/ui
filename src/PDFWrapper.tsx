import React from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function PDFWrapper ({children}) {

    const handleDownloadPDF = () => {
        const input = document.getElementById("pdf-content");
        if (!input) return;

        html2canvas(input).then(canvas => {
            document.body.appendChild(canvas);  // if you want see your screenshot in body.
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                    orientation: "portrait",
                    format: "a4",
                    unit: "px"})
            const imageProperties = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = imageProperties.height * pdfWidth / imageProperties.width;

            pdf.addImage(imgData, 'JPEG', 0, 0,pdfWidth,pdfHeight);
            pdf.save("download.pdf"); 
        });
      };

    return <div className="bg-white">
    <div className="flex justify-start p-4">
      <button
        onClick={handleDownloadPDF}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Download PDF
      </button>
    </div>

    <div id="pdf-content" className="flex justify-start p-8 bg-white">
      {/* Your full HTML content goes here */}
      {children}
    </div>
  </div>
}