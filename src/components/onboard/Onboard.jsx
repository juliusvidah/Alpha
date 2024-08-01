import React from "react";
import "./onboard.scss";
import { onboard } from "../cloudImages/CloudImages";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const Onboard = () => {
  return (
    <div className="onboard">
      <div className="onboard1">
        <LazyLoadImage className="onboard1" src={onboard.onboard1} />
      </div>
      <div className="onboardlogo">
        <LazyLoadImage className="onboardlogo1" src={onboard.onboardlogo1} />
        <LazyLoadImage className="onboardlogo2" src={onboard.onboardlogo2} />
      </div>
      <div className="onboard3">
        <LazyLoadImage className="onboard3" src={onboard.onboard3} />
      </div>
      <div className="onboard2">
        <LazyLoadImage className="onboard2" src={onboard.onboard2} />
      </div>
      <div className="onboard-text">
        <button className="onboardbtn">
          <img src={onboard.onboard7} alt="" />
          100% TRUSTED PLATFORM
        </button>
        <h2>
          MANAGE YOUR <br />
          FINANCES <br />
          WITH <span>SUREBANKER</span>
        </h2>
        <p>
          Track your expenses,create budgets, set financial goals and <br />
          receive personalized financial advice.
        </p>
        <Link to="/Home">
          <button className="onboardsign">
            Sign up <img src={onboard.onboard8} alt="" />
          </button>
        </Link>
      </div>
      <div className="onboardsub">
        <p>Track your Expenses and Create a Budget</p>
        <h3>
          Choose Better with <br />
          <span> SUREBANKER</span>
        </h3>
      </div>
      <div className="onboardgrp">
        <LazyLoadImage className="onboard4" src={onboard.onboard4} />
        <LazyLoadImage className="onboard5" src={onboard.onboard5} />
        <LazyLoadImage className="onboard6" src={onboard.onboard6} />
        <LazyLoadImage className="onboard91" src={onboard.onboard9} />
        <LazyLoadImage className="onboard92" src={onboard.onboard9} />
        <LazyLoadImage className="onboard93" src={onboard.onboard9} />
        <p className="onboard91-text">
          Forge your financial future <br /> We will hammer out the details
        </p>
        <p className="onboard92-text">
          Financial Management made <br /> Simple
        </p>
        <p className="onboard93-text">
          Maximize Savings and <br /> foster Long Wealth
        </p>
      </div>
      <div className="how">
        <h3>
          How to get <br />
          <span>Finances into Shape?</span>
        </h3>
      </div>
      <div className="onboard10a">
        <LazyLoadImage className="onboard10a" src={onboard.onboard10a} />
      </div>
      <div className="onboardtips">
        <LazyLoadImage className="onboard10" src={onboard.onboard10} />
        <LazyLoadImage className="onboard10b" src={onboard.onboard10b} />
        <LazyLoadImage className="onboard10" src={onboard.onboard10} />
      </div>
      <div>
        {" "}
        <Link to="/Home">
          <button className="onboardsign2">
            Sign up <img src={onboard.onboard8} alt="" />
          </button>
        </Link>
      </div>
      <div className="onboard-about">
        <button className="onboardbtn2">
          <img src={onboard.onboard7} alt="" />
          ABOUT US
        </button>
        <h3>
          All your Financial needs <br /> <span>in one app</span>
        </h3>
      </div>
      <div className="onboard11">
        <LazyLoadImage className="onboard111" src={onboard.onboard11} />
        <LazyLoadImage className="onboard12" src={onboard.onboard12} />
      </div>
      <div className="onboard13">
        <LazyLoadImage className="onboard13" src={onboard.onboard13} />
      </div>
      <div className="onboard14">
        <LazyLoadImage className="onboard14" src={onboard.onboard14} />
      </div>
      <div className="onboard14-text">
        <button className="onboardbtn3">
          <img src={onboard.onboard7} alt="" />
          FEATURED
        </button>
        <h3>
          All the features in one <br />
          <span>app</span>
        </h3>
        <ul>
          <li>
            Track and manage all your finances with <br />
            one app
          </li>
          <li>
            Create Personal budgets to suit your <br />
            spending and saving goals
          </li>
        </ul>
      </div>
      <div className="0nboard15">
        <LazyLoadImage className="onboard15" src={onboard.onboard15} />
      </div>
      <div className="onboard16">
        <LazyLoadImage className="onboard16" src={onboard.onboard16} />
      </div>
      <div className="onboard16-text">
        <h2>
          Take Control Of <br />
          Your <span className="span16">FINANCES</span>
        </h2>
        <p>
          Manage your finances effectively through <br />
          proper expenses and investment tracking, <br />
          budgeting, and receiving personalized <br /> financial advice,
        </p>
        <h2>
          With <span className="span16">Surebanker</span> You Can
        </h2>

        <p>.Track your Expenses .Create your Budget</p>
        <p>.Set Financial Goals.Investment Tracking</p>
        <p>.Personalized Financial Advice</p>
        <p>.Holistic Financial view and lots more</p>
      </div>
      <div className="onboard13">
        <LazyLoadImage className="onboard13" src={onboard.onboard13} />
      </div>
      <div className="onboard17-text">
        <button className="onboardbtn4">
          <img src={onboard.onboard7} alt="" />
          TESTIMONIES
        </button>
        <h3>Get to Know Our Clients</h3>
      </div>
      <div className="onboard171">
        <LazyLoadImage className="onboard19" src={onboard.onboard19} />
        <LazyLoadImage className="onboard18" src={onboard.onboard18} />
        <LazyLoadImage className="onboard17" src={onboard.onboard17} />
        <div className="seemore">
          <button>See More</button>
        </div>
      </div>
      <div className="onboard201">
        <LazyLoadImage className="onboard20" src={onboard.onboard20} />
      </div>
      <div className="onboard20-text">
        <h3>Are you ready to start?</h3>
        <p>
          Personalize your settings, follow your progress, archive your <br />
          highlights and notes automatically Glose is the ultimate reading
        </p>
      </div>
      <div className="btn20">
        {" "}
        <Link to="/Home">
          <button className="onboardsign20">
            Sign up <img src={onboard.onboard8} alt="" />
          </button>
        </Link>
      </div>
      <div className="onboard21">
        <LazyLoadImage className="onboard21" src={onboard.onboard21} />
      </div>
    </div>
  );
};

export default Onboard;
