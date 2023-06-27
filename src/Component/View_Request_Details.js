import React, { useContext, useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { MyContext } from "./Context";
import "./View_Request.css";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const View_Requests = () => {
  const { Request_List, setRequest_List } = useContext(MyContext);
  const location = useLocation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  function View_Request_Details(index) {
    setSelectedRequest(Request_List[index]);
    calculatePopupPosition(index);
    toggleModal();
  }

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  function calculatePopupPosition(index) {
    const tableRow = document.getElementById(`table-row-${index}`);
    if (tableRow) {
      const rowRect = tableRow.getBoundingClientRect();
      setPopupPosition({ top: rowRect.top, left: rowRect.right });
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mockData = [
          // Mock data...
        ];

        setRequest_List(mockData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [setRequest_List]);

  return (
    <div className="row">
      {/* <table className="border">
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
                id={`table-row-${index}`}
                key={index}
                className={index % 2 === 0 ? "green-row" : "blue-row"}
              >
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
              <td colSpan="10">No data available</td>
            </tr>
          )}
        </tbody>
      </table>

      <Modal
        isOpen={modalOpen}
        toggle={toggleModal}
        style={{ top: popupPosition.top, left: popupPosition.left }}
      >
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
      </Modal> */}
    </div>
  );
};

export default View_Requests;
