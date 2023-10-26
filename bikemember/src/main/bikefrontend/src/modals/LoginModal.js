import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BikeMemberService from "../servers/BikeMemberService";

const Loginmodal = ({ show, onHide }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const localStorage = window.localStorage;

  // 기존코드
  const loginBikeMember = (e) => {
    e.preventDefault();
    console.log("보내준 데이터 : " + id, password);
    setId("");
    setPassword("");
    // setSuccess(true);
    // alert(emailId)
    BikeMemberService.loginBikeMember(id, password)
      .then((response) => {
        console.log("logincom : ", response.data);
        if (password === response.data.password) {
          console.log("passsssssss>>>>true");
          localStorage.setItem("loginemail", response.data.emailId);
          onHide(); //모달창 숨기기
          navigate("/bikemembers");
        } else {
          // setSuccess(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="form-group mb-2">
            <label className="form-label">Id</label>
            <input
              type="text"
              placeholder="Enter Id"
              name="Id"
              className="form-control"
              value={id}
              onChange={(e) => setId(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-2">
            <label className="form-label">Password</label>
            <input
              type="text"
              placeholder="Enter Password"
              name="Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-success" onClick={(e) => loginBikeMember(e)}>
          Login
        </button>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Loginmodal;
