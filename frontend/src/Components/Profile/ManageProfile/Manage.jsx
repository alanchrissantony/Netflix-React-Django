import React from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import "./Manage.css";

function Manage() {
  return (
    <div>
      <section className="bg-primary_black min-h-screen py-20 md:py-0 flex-col flex justify-center items-center ManageSection">
        <h2 className="text-center font-medium text-5xl  text-gray-100 ManageTitle">
          Manage Profiles
        </h2>

        <div className="flex flex-wrap justify-center items-center w-10/12  md:w-5/10 ManageBoxContainer">
          <a href="/">
            <div
              className="w-32 h-32 m-4  bg-black-500 flex justify-center items-center flex-col rounded-md cursor-pointer ManageBox"
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
            <p className="ManageBoxText">Mom</p>
          </a>

          <a href="/">
            <div
              className="w-32 h-32 m-4  bg-black-500 flex justify-center items-center flex-col rounded-md cursor-pointer ManageBox"
              style={{
                backgroundImage: "url(" + "https://imgur.com/6FgZxbi.png" + ")",
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
            <p className="ManageBoxText">Dad</p>
          </a>

          <a href="/">
            <div
              className="w-32 h-32 m-4  bg-black-500 flex justify-center items-center flex-col rounded-md cursor-pointer ManageBox"
              style={{
                backgroundImage: "url(" + "https://imgur.com/LJ9dB0T.png" + ")",
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
            <p className="ManageBoxText">Stefiya</p>
          </a>

          <a href="/">
            <div
              className="w-32 h-32 m-4  bg-black-500 flex justify-center items-center flex-col rounded-md cursor-pointer ManageBox"
              style={{
                backgroundImage: "url(" + "https://imgur.com/p19PL8P.png" + ")",
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
            <p className="ManageBoxText">Children</p>
          </a>

          <Link to={"/createManage"}>
            <div className="w-32 h-32 m-4 flex justify-center items-center flex-col ManageAddIconDiv">
              <i className="fa-solid fa-circle-plus ManageAddIcon"></i>
            </div>
            <p className="ManageBoxText">Add Manage</p>
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <a href="/">
            <button className="px-4 py-2 rounded-md outline-none bg-gray-400 text-gray-100 ManageDoneBtn">
              Done
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Manage;
