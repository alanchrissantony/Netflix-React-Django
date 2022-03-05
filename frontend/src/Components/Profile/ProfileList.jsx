import React from "react";
import "../../App.css";
import "./ProfileList.css";


function Profile() {
  return (
    <div>
      <section class="bg-primary_black min-h-screen py-20 md:py-0 flex-col flex justify-center items-center profileSection">
        <h2 class="text-center font-medium text-5xl  text-gray-100 profileTitle">
          Who's watching?
        </h2>

        <div class="flex flex-wrap justify-center items-center w-10/12  md:w-5/10 profileBoxContainer">
          <a href="/">
            <div class="w-32 h-32 m-4  bg-blue-500 flex justify-center items-center flex-col rounded-md cursor-pointer profileBox">
              <img className="profileBoxImg" src="https://imgur.com/WK2idvp.png" alt="" />
            </div>
            <p className="profileBoxText">Mom</p>
          </a>


          <a href="/">
            <div class="w-32 h-32 m-4  bg-blue-500 flex justify-center items-center flex-col rounded-md cursor-pointer profileBox">
              <img className="profileBoxImg" src="https://imgur.com/6FgZxbi.png" alt="" />
            </div>
            <p className="profileBoxText">Dad</p>
          </a>

          <a href="/">
            <div class="w-32 h-32 m-4  bg-blue-500 flex justify-center items-center flex-col rounded-md cursor-pointer profileBox">
              <img className="profileBoxImg" src="https://imgur.com/LJ9dB0T.png" alt="" />
            </div>
            <p className="profileBoxText">Stefiya</p>
          </a>

          <a href="/">
            <div class="w-32 h-32 m-4  bg-blue-500 flex justify-center items-center flex-col rounded-md cursor-pointer profileBox">
              <img className="profileBoxImg" src="https://imgur.com/p19PL8P.png" alt="" />
            </div>
            <p className="profileBoxText">Children</p>
          </a>

          <a href="/">
            <div className="w-32 h-32 m-4 flex justify-center items-center flex-col ProfileAddIconDiv">
              <i class="fa-solid fa-circle-plus profileAddIcon"></i>
            </div>
            <p className="profileBoxText">Add Profile</p>
          </a>


        </div>

        <div class="flex justify-center items-center">
          <a href="/">
            <button class="px-4 py-2 rounded-md outline-none bg-gray-400 text-gray-100 profileManageBtn">
              MANAGE PROFILES
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Profile;
