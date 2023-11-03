import React from "react";
import Box from "@mui/material/Box";
import "./ordersummary.css";
import card from "../../assets/card.svg";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function OrderSummary() {
  const data = useLocation();
  const { state } = data;

  const downloadInvoice = () => {
    // document.getElementById("myinvoice").style.display = "block";
    html2canvas(document.getElementById("invoice"), {
      scale: 1,
    })
      .then((canvas) => {
        var imgData = canvas.toDataURL("image/png");
        var doc = new jsPDF();
        doc.addImage(imgData, "PNG", 10, 10);
        doc.save("invoice.pdf");
        // document.getElementById("myinvoice").style.display = "none";
      })
      .catch((e) => {});

    // html2canvas(document.getElementById("summary"), {
    //   // width: 1440,
    //   // height: 1200,
    //   scale: 1,
    // }).then((canvas) => {
    //   var imgData = canvas.toDataURL("image/png");
    //   var doc = new jsPDF();
    //   doc.addImage(imgData, "PNG", 10, 10);
    //   doc.save("summary.pdf");
    // }).catch((e) => {
    //   console.error(e.message); // "oh, no!"
    // });
  };

  return (
    <div>
      <h2 style={{ color: "#6e39cb" }}>Order Summary </h2>
      <div className="ordersummary-container">
       
          <div>
            <Box className="orderDetailBox">
              <div>
                <h3>Order Details</h3>
                <p className="orderdetails">
                  <span>order no:</span>
                  <span> {state.ID}</span>
                </p>
                <p className="orderdetails">
                  <span>order no:</span>
                  <span>xyz123</span>
                </p>
                <p className="orderdetails">
                  <span>order no:</span>
                  <span>xyz123</span>
                </p>
              </div>
              <div>
                <button className="invoice-btn" onClick={downloadInvoice}>
                  Invoice
                </button>
              </div>
            </Box>
          </div>
          <div id="summary" className="DetailBox">
            <Box className="ProdBox">
              <h3>Product Details</h3>
              <Box
                sx={{
                  border: "1px solid #e8e8e8",
                  width: "100%",
                  height: "200px",
                  borderRadius: "10px",
                  display: "flex",
                  boxSizing: "border-box",
                  padding: "20px",
                  justifyContent: "space-evenly",
                }}
              >
                <img src={card} alt=""></img>
                <div className="desc">
                  {state.Product}
                  <p>$200</p>
                  <p>Order was delivered 2 days ago</p>
                  <p>Delivered</p>
                </div>
              </Box>
            </Box>
            <Box id="invoice" className="BillBox">
              <h3>Billing Information Details</h3>

              <Box
                sx={{
                  border: "1px solid #e8e8e8",
                  width: "100%",
                  height: "200px",
                  borderRadius: "10px",
                  padding: "20px",
                  boxSizing: "border-box",
                }}
              >
                {state.Customer}
                <p>
                  Company Name: <span>Viking Burito</span>
                </p>
                <p>
                  EMAIL Address: <span>OLIAM@dvfh.com</span>
                </p>
                <p>
                  VAT number: <span>FADR3648</span>
                </p>
              </Box>
            </Box>
          </div>

          <div className="DetailBox">
            <div className="ProdBox">
              <h3 style={{ marginTop: "0", textAlign: "left" }}>
                Payment Detail
              </h3>
              <div className="carddetails">
                Master Card
                <p>Master 1234****4758</p>
                <p>Expires 22/23</p>
                <div className="cardowner">
                  <span>Aiden Max</span>
                  <img src={card}></img>
                </div>
              </div>
            </div>
            <Box className="BillBox">
              <h3 style={{ marginTop: "0" }}>Order Summary</h3>
              <Box
                id="summary"
                sx={{
                  border: "1px solid #e8e8e8",
                  width: "100%",
                  height: "200px",
                  borderRadius: "10px",
                  padding: "20px",
                  boxSizing: "border-box",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <div className="summary">
                  <h6>{state.Revenue}</h6>
                  <p>Product1 Price: $200</p>
                  <p>Product2 Price: $30</p>
                  <p>Total:$230</p>
                </div>
                <div className="rating">
                  <p>Did you like the product? Leave us a review here</p>
                  <p>⭐️⭐️⭐️⭐️⭐️</p>
                  <p style={{ color: "#6E39CB" }}>Submited</p>
                </div>
              </Box>
            </Box>
          </div>
        
      </div>
    </div>
  );
}
