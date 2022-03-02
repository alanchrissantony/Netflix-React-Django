import React from "react";
import "./Home.css";
import "../../App.css";
import TvImg from '../../Images/tv.png'
import MobileImg from '../../Images/mobile-0819.jpg'
import KidImg from '../../Images/netflix_kid.png'

function Home() {
  return (
    <div>
      <header
        class="min-h-screen bg-black bg-opacity-75 showcase border-gray-600 border-b-8 flex justify-center items-center bg-no-repeat indexBackgroundSection">
        <div class="z-10 h-full py-32 md:py-0 text-gray-100 text-center flex items-center flex-col IndexSectionContents">
          <h1 class="font-semibold text-4xl md:text-5xl w-10/12 md:w-3/4 text-center IndexUnlimitedText centerContentIndex">
            Unlimited movies, TV <br /> shows, and more.
          </h1>
          <h3 class="text-xl md:text-xl py-5 centerContentIndex IndexWatchText">
            Watch anywhere. Cancel anytime.
          </h3>
          <h4 class="text-sm md:text-lg pb-3 centerContentIndex IndexReadyText">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>

          <div class="w-full flex justify-center indexGetStartedInputDiv">
            <div class="flex justify-center items-center w-11/12 md:w-10/12">
              <input
                type="email"
                name=""
                id=""
                placeholder="Email address"
                class="md:py-5 py-4 px-2 placeholder-gray-500 rounded-tl-sm rounded-bl-sm outline-none  text-gray-900 bg-gray-50 block w-8/12 md:w-3/4 indexGetStartedInput"
              />
              <a href='' class="md:w-1/4">
                <button class="bg-primary_red font-medium md:font-normal flex justify-center items-center py-4 px-2 md:px-0 rounded-br-sm rounded-tr-sm md:text-2xl indexGetStartedBtn">
                  <span>Get Started</span>
                  <ion-icon
                    name="chevron-forward-outline"
                    class="text-2xl"
                  ></ion-icon>
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>

      <section
        class="flex flex-col md:flex-row items-center border-gray-900 border-b-8 indexSubSections">
        <div class="md:w-1/2 flex flex-col justify-center text-center md:text-left p-5 md:p-10 ">
          <h2 class="md:text-5xl text-4xl font-semibold mb-4">
            Enjoy on your TV.
          </h2>
          <h5 class="md:text-xl text-lg">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h5>
        </div>
        <div class="md:w-1/2 flex justify-center items-center">
          <img src={TvImg} class="w-8/12" alt="" />
        </div>
      </section>

      <section
        class="flex flex-col md:flex-row items-center border-gray-900 border-b-8 indexSubSections"
      >
        <div class="md:w-1/2 flex justify-center items-center ">
          <img src={MobileImg} class="w-8/12" alt="" />
        </div>

        <div class="md:w-1/2 flex flex-col justify-center text-center md:text-left p-5 md:p-10">
          <h2 class="md:text-5xl text-4xl font-semibold mb-4">
            Download your shows to watch offline.
          </h2>
          <h5 class="md:text-xl text-lg">
            Save your favorites easily and always have something to watch.
          </h5>
        </div>
      </section>

      <section
        class="flex flex-col md:flex-row items-center border-gray-900 border-b-8 indexSubSections"
      >
        <div class="md:w-1/2 flex flex-col justify-center text-center md:text-left p-5 md:p-10">
          <h2 class="md:text-5xl text-4xl font-semibold mb-4">
            Create profiles for kids.
          </h2>
          <h5 class="md:text-xl text-lg">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </h5>
        </div>
        <div class="md:w-1/2 flex justify-center items-center">
          <img src={KidImg} class="w-8/12" alt="" />
        </div>
      </section>
    </div>
  );
}

export default Home;
