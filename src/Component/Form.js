import React from "react";
import "./Form.css";
import { Button } from "reactstrap";
import { useState } from "react";

const Details_Form = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [validated, setValidated] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div className="form">
      <form className="Reimbursement-form">
        <h4 className="pb-16"> Claim a Reimbursement</h4>
        <div>
          <h6>Project Name *</h6>
          <select className="text-grey">
            <option value="project1">Select Your Project</option>
            <option value="project1" className="text-black">
              Project 1
            </option>
            <option value="project2" className="text-black">
              Project 2
            </option>
            <option value="project3" className="text-black">
              Project 3
            </option>
          </select>
        </div>
        <div>
          <h6>Client Name *</h6>
          <input type="text" placeholder="Enter Client  Name" />
        </div>
        <div>
          <h6>Type of Reimbursument *</h6>
          <select className="text-grey">
            <option className="text-black" value="project1" disabled selected>
              Select
            </option>
            <option className="text-black" value="project1">
              1
            </option>
            <option className="text-black" value="project2">
              2
            </option>
            <option className="text-black" value="project3">
              3
            </option>
          </select>
        </div>
        <div>
          <h6>Expense Date *</h6>
          <input
            type="date"
            className="text-grey"
            id="date"
            name="name"
          ></input>
        </div>
        <div className="d-flex cg-24">
          <label className="d-flex cg-4">
            <input
              type="radio"
              className="w-14 m-0"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
            />
            Pre-Payment
          </label>
          <label className="d-flex cg-4 ">
            <input
              type="radio"
              value="option2"
              className="w-14  m-0"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
            />
            Post-Payment
          </label>
        </div>
        <div>
          <h6>Amount *</h6>
          <input type="number" placeholder="Enter Amount" />
        </div>
        <div>
          <h6>UpLoad Images *</h6>
          <div className="choosefilebtn col-lg-5 text-grey">
            <input type="file" className="form-control input-none  text-grey" />
          </div>
        </div>
        <div>
          <h6>My Remark *</h6>
          <textarea type="text" placeholder="" />
        </div>
      </form>
      <div className="send-btn">
        <Button className="btn btn-clr">Send Request</Button>
      </div>
    </div>
  );
};
export default Details_Form;
