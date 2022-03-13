import React, { useState } from "react";
import "./Home.css";
import "../../App.css";
import TvImg from '../../Images/tv.png'
import MobileImg from '../../Images/mobile-0819.jpg'
import KidImg from '../../Images/netflix_kid.png'
import { useNavigate } from "react-router";



function Home() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [error, setError] = useState(false);


  const submitHandler = (e)=>{
    e.preventDefault()
    if(!email){
      setError('Email is required')
    }else{
      setError(false)
      navigate('/account/signup')
    }
  }

  return (
    <div className="homeSection">
      <header
        className="min-h-screen bg-black bg-opacity-75 showcase border-gray-600 border-b-8 flex justify-center items-center bg-no-repeat indexBackgroundSection">
        <div className="z-10 h-full py-32 md:py-0 text-gray-100 text-center flex items-center flex-col IndexSectionContents">
          <h1 className="font-semibold text-4xl md:text-5xl w-10/12 md:w-3/4 text-center IndexUnlimitedText centerContentIndex">
            Unlimited movies, TV <br /> shows, and more.
          </h1>
          <h3 className="text-xl md:text-xl py-5 centerContentIndex IndexWatchText">
            Watch anywhere. Cancel anytime.
          </h3>
          <h4 className="text-sm md:text-lg pb-3 centerContentIndex IndexReadyText">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>

          <form onSubmit={submitHandler} className="w-full flex justify-center indexGetStartedInputDiv">
            <div className="flex justify-center items-center w-11/12 md:w-10/12">
              <input
                type="email"
                name=""
                id=""
                placeholder="Email address"
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                className="md:py-5 py-4 px-2 placeholder-gray-500 rounded-tl-sm rounded-bl-sm outline-none  text-gray-900 bg-gray-50 block w-8/12 md:w-3/4 indexGetStartedInput"
              />
              <div className="md:w-1/4">
                <button type="submit" className="bg-primary_red font-medium md:font-normal flex justify-center items-center py-4 px-2 md:px-0 rounded-br-sm rounded-tr-sm md:text-2xl indexGetStartedBtn">
                  <span>Get Started</span>
                  <ion-icon
                    name="chevron-forward-outline"
                    className="text-2xl"
                  ></ion-icon>
                </button>
              </div>
            </div>
          </form>
          {error && <p className="homeEmailErrorText">{error}</p>}
        </div>
      </header>

      <section
        className="flex flex-col md:flex-row items-center border-gray-900 border-b-8 indexSubSections">
        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left p-5 md:p-10 ">
          <h2 className="md:text-5xl text-4xl font-semibold mb-4">
            Enjoy on your TV.
          </h2>
          <h5 className="md:text-xl text-lg">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h5>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img src={TvImg} className="w-8/12" alt="" />
        </div>
      </section>

      <section
        className="flex flex-col md:flex-row items-center border-gray-900 border-b-8 indexSubSections"
      >
        <div className="md:w-1/2 flex justify-center items-center ">
          <img src={MobileImg} className="w-8/12" alt="" />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left p-5 md:p-10">
          <h2 className="md:text-5xl text-4xl font-semibold mb-4">
            Download your shows to watch offline.
          </h2>
          <h5 className="md:text-xl text-lg">
            Save your favorites easily and always have something to watch.
          </h5>
        </div>
      </section>

      <section
        className="flex flex-col md:flex-row items-center border-gray-900 border-b-8 indexSubSections"
      >
        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left p-5 md:p-10">
          <h2 className="md:text-5xl text-4xl font-semibold mb-4">
            Create profiles for kids.
          </h2>
          <h5 className="md:text-xl text-lg">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </h5>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img src={KidImg} className="w-8/12" alt="" />
        </div>
      </section>
    </div>
  );
}

export default Home;
