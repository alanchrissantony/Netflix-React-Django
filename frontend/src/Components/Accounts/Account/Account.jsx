import React from "react";
import "../../../App.css";
import "./Account.css";
import '../../Profile/ManageProfile/Manage.css'
import { Link } from "react-router-dom";

function Account() {
  return (
    <div>
      <section className="accountSection">
        <div className="accountContainer">
          <div className="accountTitleDiv">
            <p className="accountTitle">Account</p>
          </div>
          <div className="accountContentSection">
            <div
              className="w-32 h-32  bg-black-500 flex justify-center items-center flex-col rounded-md cursor-pointer accountUserProfileImgDiv ManageBox"
              style={{
                backgroundImage: "url(" + "https://imgur.com/WK2idvp.png" + ")",
              }}
            >
              <div className="ManageBoxDiv flex justify-center items-center flex-col">
                <ul className="dropdown-content">
                  <div className="dropdown-content-div">
                    <i class="fa-solid fa-pen manageEditIcon"></i>
                  </div>
                </ul>
              </div>
            </div>
            <div className="accountContentContainer">
              <div className="accountContentEmailDiv">
                <p className="accountContentEmail">user@user.com</p>
                <Link to={'/account/changemail'}><p className="accountContentChangeEmail accountContentChange">
                  Change account email
                </p></Link>
              </div>
              <div className="accountContentPasswordDiv">
                <p className="accountContentPassword">Password *******</p>
                <Link to={'/account/changepassword'}><p className="accountContentChangePassword accountContentChange">
                  Change password
                </p></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Account;
