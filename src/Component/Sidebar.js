import React from "react";
import "./Sidebar.css";
import Dashboard from "./assets/dash.svg";
import reimbursement from "./assets/grey-reimbursement.svg";
import attendance from "./assets/attendance.svg";
import { Navigate, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const Location = useLocation();
  const navigate = useNavigate();
  function Auth() {
    navigate("/Requests");
  }

  return (
    <div className="sidebar col-sm-3 border-end text-size  width-1000">
      <ul className="sidebar__menu ">
        <div className="d-flex padding-12">
          <img src={Dashboard} alt="dashboard" className="dash-img " />
          <li className=" sidebar-align fw-600">Dashboard</li>
        </div>
        <div className="d-flex  padding-12">
          <img src={reimbursement} className="reimbursement-img" alt="dash" />
          <li className=" sidebar-align fw-600 ">Claim Reimbursement</li>
        </div>
        <div className="d-flex  padding-12">
          <img src={attendance} className="reimbursement-img" alt="dash" />
          <li className=" sidebar-align fw-600 ">My Reimbursement</li>
        </div>
        <div className="d-flex  padding-12">
          <img src={attendance} className="reimbursement-img" alt="dash" />
          <li className=" sidebar-align fw-600" onClick={Auth}>
            Request
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
