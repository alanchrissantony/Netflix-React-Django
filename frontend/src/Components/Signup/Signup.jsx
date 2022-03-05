import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Signup.css";

function Signup() {
  return (
    <div className="SignUpRootSection">
      <header class="min-h-screen w-full bg-black bg-opacity-75 showcase relative border-gray-600 border-b-8 flex justify-center py-20 bg-no-repeat SignUpSection">
        <div class="z-10 min-h-full py-32 md:py-0 text-gray-100 w-6/12  flex items-center flex-col">
          <form
            method="POST"
            class="bg-black bg-opacity-70 min-h-full py-8 px-4 w-8/12 rounded-md SignUpForm"
          >
            <div className="SignUpFormDiv">
              <h1 class="text-4xl font-semibold LoginSignUpText">Sign Up</h1>

              <div class=" text-center my-4 text-primary_red"></div>

              <div>
                <input
                  class="p-2 bg-gray-200 rounded-sm text-gray-900 outline-none block w-full SignUpInput"
                  type="email"
                  name="email"
                  id="id_email"
                  placeholder="Your Email"
                />
              </div>
              <div class="my-3">
                <input
                  class="p-2 bg-gray-200 rounded-sm text-gray-900 outline-none block w-full SignUpInput SignUpInputPassword"
                  type="password"
                  name="password1"
                  id="id_password1"
                  placeholder="Password"
                />
              </div>
              <div class="my-3">
                <input
                  class="p-2 bg-gray-200 rounded-sm text-gray-900 outline-none block w-full SignUpInput SignUpInputPassword"
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

              <div class="flex justify-center items-center">
                <button class="py-2 px-4 bg-primary_red text-gray-100 font-medium text-lg rounded-md SignUpBtn">
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
