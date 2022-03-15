import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import "../Login/Login.css";
import './Email.css'
function Email() {

  const [email, setEmail] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(email);
  }

  return (
    <div className="LogInRootSection">
      <header className="min-h-screen w-full bg-black bg-opacity-75 showcase border-gray-600 border-b-8 flex justify-center py-20 bg-no-repeat logInSection">
        <div className="z-10 h-full py-32 md:py-0 text-gray-100 w-6/12  flex items-center flex-col">
          <form
            onSubmit={submitHandler}
            className="bg-opacity-70 py-8 px-4 w-8/12 rounded-md LogInForm"
          >
            <div className="LoginFormDiv">
              <h1 className="text-4xl font-semibold LoginSignInText">Change Email</h1>

              <div className=" text-center my-4 text-primary_red">
                <p className="text-primary_red "></p>
              </div>

              <div>
                <input
                  className="p-2 bg-gray-200 rounded-sm text-gray-900 outline-none block w-full LogInInput"
                  type="email"
                  name="email"
                  id="id_login"
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                  placeholder="New Email"
                />
              </div>
              

              <input
                type="hidden"
                name=""
                value=""
              />

              <div className="flex justify-center items-center">
                <button className="py-2 px-4 bg-primary_red text-gray-100 font-medium text-lg rounded-md LogInBtn">
                  Continue
                </button>
              </div>

              <div className="my-4">
                
                <Link to={'/profile/account'}><p className="LogInNewToNetflixText EmailCancelText">Cancel</p></Link>
              </div>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Email;
