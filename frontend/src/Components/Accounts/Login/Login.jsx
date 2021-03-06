import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import "./Login.css";
function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false);

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(email, password);
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
              <h1 className="text-4xl font-semibold LoginSignInText">Sign In</h1>

              <div className=" text-center my-4 text-primary_red">
                <p className="text-primary_red ">
                {passwordError && <p>! {passwordError}</p>}
                </p>
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
                  placeholder="Your Email"
                />
              </div>
              <div className="my-3">
                <input
                  className="p-2 bg-gray-200 rounded-sm text-gray-900 outline-none block w-full LogInInput LogInInputPassword"
                  type="password"
                  name="password"
                  id="id_password"
                  onChange={(e)=>{
                    setPassword(e.target.value)
                  }}
                  placeholder="Password"
                />
              </div>

              <input
                type="hidden"
                name=""
                value=""
              />

              <div className="flex justify-center items-center">
                <button className="py-2 px-4 bg-primary_red text-gray-100 font-medium text-lg rounded-md LogInBtn">
                  Sign In
                </button>
              </div>

              <div className="my-4">
                
                <p className="LogInNewToNetflixText">New to Netflix? <span className="LogInSignUpText"> <Link to={'/account/signup'}> Sign up now</Link></span>.</p>
              </div>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Login;
