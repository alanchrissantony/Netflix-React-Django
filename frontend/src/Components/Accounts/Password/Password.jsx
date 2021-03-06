import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import "../Login/Login.css"
import "./Password.css";
function Password() {

  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      if (password.length >= 8) {
        setError(false);
        console.log(password);
      }else {
        setError("Passwords must be at least 8 characters");
      }
    } else {
      setError("Password and confirm password didn't match. Try again.");
    }
  };

  return (
    <div className="LogInRootSection">
      <header className="min-h-screen w-full bg-black bg-opacity-75 showcase border-gray-600 border-b-8 flex justify-center py-20 bg-no-repeat logInSection">
        <div className="z-10 h-full py-32 md:py-0 text-gray-100 w-6/12  flex items-center flex-col">
          <form
            onSubmit={submitHandler}
            className="bg-opacity-70 py-8 px-4 w-8/12 rounded-md LogInForm"
          >
            <div className="LoginFormDiv">
              <h1 className="text-4xl font-semibold LoginSignInText">Change Password</h1>

              <div className=" text-center my-4 text-primary_red">
                {error && <p className="text-primary_red ">{error}</p>}
              </div>

              <div>
                <input
                  className="p-2 bg-gray-200 rounded-sm text-gray-900 outline-none block w-full LogInInput"
                  type="password"
                  name="password"
                  id="id_password"
                  onChange={(e)=>{
                    setPassword(e.target.value)
                  }}
                  placeholder="New password"
                />
              </div>
              <div className="my-3">
                <input
                  className="p-2 bg-gray-200 rounded-sm text-gray-900 outline-none block w-full LogInInput LogInInputPassword"
                  type="password"
                  name="confirm_password"
                  id="id_password"
                  onChange={(e)=>{
                    setConfirmPassword(e.target.value)
                  }}
                  placeholder="Confirm password"
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
                
                <Link to={'/profile/account'}><p className="LogInNewToNetflixText PasswordCancelText">Cancel</p></Link>
              </div>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Password;
