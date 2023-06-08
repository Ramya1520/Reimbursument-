import React from "react";
import "./Sidebar.css";
import Dashboard from "./assets/dash.svg";
import reimbursement from "./assets/grey-reimbursement.svg";
import attendance from "./assets/attendance.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar__menu border-end">
        <div className="d-flex padding-12">
          <img src={Dashboard} alt="dashboard" className="dash-img " />
          <li className=" sidebar-align fw-600">Dashboard</li>
        </div>
        <div className="d-flex  padding-12">
          <img src={reimbursement} className="reimbursement-img" alt="dash" />
          <li className=" sidebar-align fw-600">Claim Reimbursement</li>
        </div>
        <div className="d-flex  padding-12">
          <img src={attendance} className="reimbursement-img" alt="dash" />
          <li className=" sidebar-align fw-600">My Reimbursement</li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
