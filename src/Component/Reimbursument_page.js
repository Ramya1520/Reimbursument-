import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Details_form from "./Form";
import "./Reimbursument_page.css";

const ReimbursumentPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
      </div>
      <div className="row sidebar-form">
        <div className="col-sm-3">
          <Sidebar />
        </div>
        <div className="col-sm-9 d-flex justify-content-center ">
          <Details_form />
        </div>
      </div>
    </div>
  );
};

export default ReimbursumentPage;
