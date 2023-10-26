import React, { useEffect, useState } from "react";
import Loginmodal from "../modals/LoginModal";
const HeaderComponent = (props) => {
  const [loginModalOn, setLoginModalOn] = useState(false);
  console.log("aacc", props);

  const localStorage = window.localStorage;
  const [session, setSession] = useState(false);
  const logoutproc = (e) => {
    setSession(false);

    console.log("passsssssss>>>>false");
    localStorage.removeItem("loginemail");
  };

  const emailsession = localStorage.getItem("loginemail");
  useEffect(() => {
    // alert('hhhhhhh')
    if (emailsession === null) {
      console.log("false");
      setSession(false);
    } else {
      console.log("true");
      setSession(true);
    }
  }, [emailsession]);

  const [logOn, setLogOn] = useState(false);

  return (
    <div>
      <Loginmodal show={logOn} onHide={() => setLogOn(false)} />

      <header>
        <nav className="px-4 navbar navbar-expand-md navbar-dark bg-warning">
          <div style={{ width: "100%" }}>
            <div>
              <a href="https://www.w3schools.com/" className="navbar-brand">
                BikeMember Management Application
              </a>
            </div>
            <div className="collapse navbar-collapse justify-content-end">
              <ul className="navbar-nav">
                <li className="nav-item">
                  {session === false ? (
                    <button
                      className="btn btn-success"
                      onClick={() => setLogOn(true)}
                    >
                      Login
                    </button>
                  ) : (
                    <button className="btn btn-success mx-3" onClick={logoutproc}>
                      Logout
                    </button>
                  )}
                </li>
                <li className="nav-item">
                  <button className="btn btn-primary">Join</button>
                </li>{" "}
                <br />
              </ul>
            </div>
            <div className="collapse navbar-collapse justify-content-center">
              <ul className="navbar-nav">
                {session === true ? (
                  <li className="nav-item">{emailsession}님 방가방가</li>
                ) : (
                  <li className="nav-item">로그인해주세요.</li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
