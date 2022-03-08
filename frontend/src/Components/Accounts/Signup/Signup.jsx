import React from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import "./Signup.css";

function Signup() {
  return (
    <div className="SignUpRootSection">
      <header className="min-h-screen w-full bg-black bg-opacity-75 showcase relative border-gray-600 border-b-8 flex justify-center py-20 bg-no-repeat SignUpSection">
        <div className="z-10 min-h-full py-32 md:py-0 text-gray-100 w-6/12  flex items-center flex-col">
          <form
            method="POST"
            className="bg-black bg-opacity-70 min-h-full py-8 px-4 w-8/12 rounded-md SignUpForm"
          >
            <div className="SignUpFormDiv">
              <h1 className="text-4xl font-semibold LoginSignUpText">Sign Up</h1>

              <div className=" text-center my-4 text-primary_red"></div>

              <div>
                <input
                  className="p-2 bg-gray-200 rounded-sm text-gray-900 outline-none block w-full SignUpInput"
                  type="email"
                  name="email"
                  id="id_email"
                  placeholder="Your Email"
                />
              </div>
              <div className="my-3">
                <input
                  className="p-2 bg-gray-200 rounded-sm text-gray-900 outline-none block w-full SignUpInput SignUpInputPassword"
                  type="password"
                  name="password1"
                  id="id_password1"
                  placeholder="Password"
                />
              </div>
              <div className="my-3">
                <input
                  className="p-2 bg-gray-200 rounded-sm text-gray-900 outline-none block w-full SignUpInput SignUpInputPassword"
                  type="password"
                  name="password2"
                  id="id_password2"
                  placeholder="Confirm password"
                />
              </div>

              <input
                type="hidden"
                name=""
                value=""
              />

              <div className="flex justify-center items-center">
                <button className="py-2 px-4 bg-primary_red text-gray-100 font-medium text-lg rounded-md SignUpBtn">
                  Sign Up
                </button>
              </div>

              <div className="my-4">
                <p className="SignUpNewToNetflixText">Have account already? <span className="SignUpSignInText"> <Link to={'/account/login'}> Sign in now</Link></span>.</p>
              </div>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Signup;
