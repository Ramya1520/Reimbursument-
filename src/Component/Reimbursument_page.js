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
        <div className="col-lg-3">
          <Sidebar />
        </div>
        <div className="col-lg-6 border-end">
          <Details_form />
        </div>
      </div>
    </div>
  );
};

export default ReimbursumentPage;
