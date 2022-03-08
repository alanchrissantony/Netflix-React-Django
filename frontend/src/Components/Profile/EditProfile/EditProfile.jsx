import React from "react";
import "./EditProfile.css";
import "../../../App.css";

function EditProfile() {
  return (
    <div>
      <section className="bg-primary_black min-h-screen py-20 md:py-32 flex-col flex items-center editProfileSection">
        <div className="flex flex-wrap justify-center w-10/12 md:w-6/12">
          <div className="w-full md:w-12/12 p-5 rounded-lg">
            <h1 className="text-4xl text-gray-100 font-medium editProfileTitle">
              Edit Profile
            </h1>
            <div className="editProfileBox">
              <div className="editProfileImageDiv">
                <img
                  src="https://imgur.com/6FgZxbi.jpg"
                  alt=""
                  className="editProfileImg"
                />
              </div>
              <div className="editProfileInputContainer">
                <div className="my-4 editProfileInputNameDiv">
                  <input
                    required
                    className="p-2 bg-gray-500 rounded-sm text-gray-200 outline-none block w-full editProfileInputName"
                    type="text"
                    name="name"
                    id="id_name"
                    placeholder="Name"
                  />
                </div>
                <div className="editProfileSelectLanguageDiv">
                    <p className="editProfileSelectLanguageText">Language:</p>
                    <select className="editProfileSelectLanguage" name="language" id="language">
                        <option value="english">English</option>
                    </select>
                </div>
                <div className="editProfileSelectMaturityDiv">
                    <p className="editProfileSelectMaturityText">Allowed TV shows and movies:</p>
                    <select className="editProfileSelectMaturity" name="maturity" id="maturity">
                        <option value="all">All Maturity levels</option>
                        <option value="kids">Kids</option>
                    </select>
                </div>
              </div>
            </div>
            <div className="flex editProfileSaveBtnDiv">
              <button className="px-4 py-2 outline-none bg-primary_red text-gray-100 editProfileSaveBtn">
                Save
              </button>
            </div>
            <div className="flex editProfileCancelBtnDiv">
              <button className="editProfileCancelBtn">Cancel</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EditProfile;
