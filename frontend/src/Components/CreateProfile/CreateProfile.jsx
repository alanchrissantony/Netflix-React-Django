import React from "react";
import "../../App.css";
import "./CreateProfile.css";

function CreateProfile() {
  return (
    <div>
      <section class="bg-primary_black min-h-screen py-20 md:py-32 flex-col flex items-center createProfileSection">
        <div class="flex flex-wrap justify-center w-10/12 md:w-6/12">
          <div class="w-full md:w-12/12 p-5 rounded-lg">
            <h1 class="text-4xl text-gray-100 font-medium createProfileTitle">
              Add Profile
            </h1>
            <p className="createProfileSubTitle">
              Add a profile for another person watching Netflix.
            </p>
            <div className="createProfileBox">
                <div className="createProfileImageDiv">
                    <img src="https://imgur.com/6FgZxbi.jpg" alt="" className="createProfileImg" />
                </div>
              <div class="my-4 createProfileInputNameDiv">
                <input
                  required
                  class="p-2 bg-gray-500 rounded-sm text-gray-200 outline-none block w-full createProfileInputName"
                  type="text"
                  name="name"
                  id="id_name"
                  placeholder="Name"
                />
              </div>
              <div className="createProfileCheckBoxDiv">
                  <input  className="createProfileCheckBox" type="checkbox" name="maturity" id="" />
                  <p className="createProfileCheckBoxText">Kid?</p>
              </div>
            </div>
            <div class="flex createProfileContinueBtnDiv">
              <button class="px-4 py-2 outline-none bg-primary_red text-gray-100 createProfileContinueBtn">
                Continue
              </button>
            </div>
            <div class="flex createProfileCancelBtnDiv">
              <button class="createProfileCancelBtn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CreateProfile;
