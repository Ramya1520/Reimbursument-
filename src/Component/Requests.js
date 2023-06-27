import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./Reimbursument_page.css";
import "./Sidebar.css";
import View_Requests from "./View_Request";

const Requests = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
      </div>
      <div className="row sidebar-form">
        <div className="col-sm-3  border-end width-1000">
          <Sidebar />
        </div>
        <div className="col-sm-9 d-flex justify-content-center">
          <View_Requests />
        </div>
      </div>
    </div>
  );
};

export default Requests;
