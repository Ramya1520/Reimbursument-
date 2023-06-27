import React, { useState } from "react";
import { Button } from "reactstrap";
import "./Form.css";
import { Navigate, useLocation } from "react-router-dom";

const Details_Form = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    clientName: "",
    reimbursementType: "",
    expenseDate: "",
    selectedOption: "",
    amount: "",
    remark: "",
    uploadedImages: [],
  });

  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});

  const handleOptionChange = (event) => {
    setFormData({ ...formData, selectedOption: event.target.value });
    setErrors({ ...errors, selectedOption: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const newErrors = {};

    if (formData.projectName.trim() === "") {
      newErrors.projectName = "Project name is required*";
    }

    if (formData.clientName.trim() === "") {
      newErrors.clientName = "Client name is required*";
    }

    if (formData.reimbursementType.trim() === "") {
      newErrors.reimbursementType = "Reimbursement type is required*";
    }

    if (formData.expenseDate.trim() === "") {
      newErrors.expenseDate = "Expense date is required*";
    }

    if (formData.amount.trim() === "") {
      newErrors.amount = "Amount is required*";
    }

    if (formData.remark.trim() === "") {
      newErrors.remark = "Remark is required*";
    }

    if (formData.uploadedImages.length === 0) {
      newErrors.uploadedImages = "Please upload at least one image*";
    }

    if (!formData.selectedOption) {
      newErrors.selectedOption = "Please select Payment method*";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setValidated(true);
      console.log("Form Data:", formData);
    } else {
      setValidated(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setFormData((prevFormData) => ({
      ...prevFormData,
      uploadedImages: [...prevFormData.uploadedImages, ...files],
    }));
  };

  return (
    <div className="form col-sm-11 form-size ">
      <form className="Reimbursement-form" onSubmit={handleSubmit}>
        <h4 className="pb-16">Claim a Reimbursement</h4>
        <div>
          <h6>Project Name *</h6>
          <select
            className="text-grey"
            value={formData.projectName}
            onChange={handleChange}
            name="projectName"
          >
            <option value="">Select Your Project</option>
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
          {errors.projectName && (
            <p className="error text-red font-small">{errors.projectName}</p>
          )}
        </div>
        <div>
          <h6>Client Name *</h6>
          <input
            type="text"
            placeholder="Enter Client Name"
            value={formData.clientName}
            onChange={handleChange}
            name="clientName"
          />
          {errors.clientName && (
            <p className="error text-red font-small">{errors.clientName}</p>
          )}
        </div>
        <div>
          <h6>Type of Reimbursement *</h6>
          <select
            className="text-grey"
            value={formData.reimbursementType}
            onChange={handleChange}
            name="reimbursementType"
          >
            <option value="" disabled selected>
              Select
            </option>
            <option value="project1" className="text-black">
              1
            </option>
            <option value="project2" className="text-black">
              2
            </option>
            <option value="project3" className="text-black">
              3
            </option>
          </select>
          {errors.reimbursementType && (
            <p className="error text-red font-small">
              {errors.reimbursementType}
            </p>
          )}
        </div>
        <div>
          <h6>Expense Date *</h6>
          <input
            type="date"
            className="text-grey"
            id="date"
            name="expenseDate"
            value={formData.expenseDate}
            onChange={handleChange}
          />
          {errors.expenseDate && (
            <p className="error text-red font-small">{errors.expenseDate}</p>
          )}
        </div>
        <div className="d-flex cg-24 mb-13">
          <label className="d-flex cg-4">
            <input
              type="radio"
              className="w-14 m-0"
              value="option1"
              checked={formData.selectedOption === "option1"}
              onChange={handleOptionChange}
              name="selectedOption"
            />
            Pre-Payment
          </label>
          <label className="d-flex cg-4">
            <input
              type="radio"
              value="option2"
              className="w-14 m-0"
              checked={formData.selectedOption === "option2"}
              onChange={handleOptionChange}
              name="selectedOption"
            />
            Post-Payment
          </label>
        </div>
        {errors.selectedOption && (
          <p className="error text-red font-small">{errors.selectedOption}</p>
        )}
        <div>
          <h6>Amount *</h6>
          <input
            type="number"
            placeholder="Enter Amount"
            value={formData.amount}
            onChange={handleChange}
            name="amount"
          />
          {errors.amount && (
            <p className="error text-red font-small">{errors.amount}</p>
          )}
        </div>
        <div>
          <h6>Upload Images *</h6>
          <div className="choosefilebtn col-lg-5 choose-backround">
            <input
              type="file"
              className="form-control input-none text-grey"
              multiple
              onChange={handleFileUpload}
            />
          </div>
          {errors.uploadedImages && (
            <p className="error text-red font-small">{errors.uploadedImages}</p>
          )}
        </div>
        <div>
          <h6>My Remark *</h6>
          <textarea
            type="text"
            placeholder="Enter Your Remark"
            value={formData.remark}
            onChange={handleChange}
            name="remark"
          />
          {errors.remark && (
            <p className="error text-red font-small">{errors.remark}</p>
          )}
        </div>
        <div className="send-btn">
          <Button className="btn btn-clr" type="submit">
            Send Request
          </Button>
        </div>
      </form>
      {validated && <p>Form has been successfully validated!</p>}
    </div>
  );
};

export default Details_Form;
