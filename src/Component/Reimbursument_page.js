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
        {/*/ <div className="col-sm-12"> */}
        <div className="col-sm-3  border-end">
          <Sidebar />
        </div>

        <div className="col-sm-6 border-end d-flex justify-content-center test">
          <Details_form />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ReimbursumentPage;
