import React, { useState } from "react";
import BikeMemberService from "../servers/BikeMemberService";
import { useNavigate } from "react-router-dom";

const AddBikeMemberComponent = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const navigate = useNavigate();

  const saveBikeMember = (e) => {
    e.preventDefault();
    const bikemember = { firstName, lastName, emailId };
    // console.log(bikemember)
    BikeMemberService.createBikeMember(bikemember)
      .then((response) => {
        console.log(response.data);
        // 다시 리스트로 돌아가기
        navigate('/bikemembers')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container py-4">
      <div className="row">
        <div className="card col-md-6 offset-md-3 py-3">
          <h2 className="text-center">Add BikeMember</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  name="firstName"
                  value={firstName}
                  className="form-control"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              {/* onChange input 안의 값이 변경될때마다 set 에 현재 입력한값을 담아줌 */}
              <div className="form-group mb-2">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastName"
                  value={lastName}
                  className="form-control"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email ID</label>
                <input
                  type="text"
                  placeholder="Enter Email ID"
                  name="emailId"
                  value={emailId}
                  className="form-control"
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </div>
              <button
                className="btn btn-success"
                onClick={(e) => saveBikeMember(e)}
              >
                등록하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBikeMemberComponent;
