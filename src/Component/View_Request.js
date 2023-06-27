import React, { useContext, useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { MyContext } from "./Context";
import "./View_Request.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./Reimbursument_page.css";
import "./Sidebar.css";

const View_Requests = () => {
  const { Request_List, setRequest_List } = useContext(MyContext);
  const Location = useLocation();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  function View_Request_Details(index) {
    setSelectedRequest(Request_List[index]);
    toggleModal();
  }

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mockData = [
          {
            Name: "Vino",
            projectName: "Project 1",
            clientName: "Client 1",
            reimbursementType: "Type 1",
            expenseDate: "2023-06-26",
            selectedOption: "Option 1",
            amount: 100,
            remark: "Remark 1",
            Approved_By: "M1",
          },
          {
            Name: "kiran",
            projectName: "Project 2",
            clientName: "Client 2",
            reimbursementType: "Type 2",
            expenseDate: "2023-06-27",
            selectedOption: "Option 2",
            amount: 200,
            remark: "Remark 2",
            Approved_By: "M2",
          },
        ];

        setRequest_List(mockData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [setRequest_List]);

  return (
    <div>
      <h4 className="ml-21 req"> Requests</h4>
      <div className="row mx-auto">
        <div className="col-sm-12 ">
          <table className="border ml-21">
            <thead>
              <tr className="border">
                <th>Name</th>
                <th>Project Name</th>
                <th>Client Name</th>
                <th>Reimbursement Type</th>
                <th>Expense Date</th>
                <th>Selected Option</th>
                <th>Amount</th>
                <th>Approved By</th>
                <th>Remark</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Request_List && Request_List.length > 0 ? (
                Request_List.map((expense, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "green-row" : "blue-row"}
                  >
                    {" "}
                    <td>{expense.Name}</td>
                    <td>{expense.projectName}</td>
                    <td>{expense.clientName}</td>
                    <td>{expense.reimbursementType}</td>
                    <td>{expense.expenseDate}</td>
                    <td>{expense.selectedOption}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.Approved_By}</td>
                    <td>{expense.remark}</td>
                    <td>
                      <Button onClick={() => View_Request_Details(index)}>
                        View
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8">No data available</td>
                </tr>
              )}
            </tbody>
          </table>

          <Modal isOpen={modalOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Request Details</ModalHeader>
            <ModalBody>
              {selectedRequest && (
                <div>
                  <p>Name: {selectedRequest.Name}</p>
                  <p>Project Name: {selectedRequest.projectName}</p>
                  <p>Client Name: {selectedRequest.clientName}</p>
                  <p>Reimbursement Type: {selectedRequest.reimbursementType}</p>
                  <p>Expense Date: {selectedRequest.expenseDate}</p>
                  <p>Selected Option: {selectedRequest.selectedOption}</p>
                  <p>Amount: {selectedRequest.amount}</p>
                  <p>Approved By: {selectedRequest.Approved_By}</p>
                  <p>Remark: {selectedRequest.remark}</p>
                </div>
              )}
            </ModalBody>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default View_Requests;
