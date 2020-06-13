import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Icon from "../assets/icons/sprite.svg";
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";

export default function Home() {
  return (
    <div>
      <Header />
      <Headersection1 />
      <Headersection2 />
      <Headersection3 />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <div className="">
      <div>
        <div className="herobackground">
        
        </div>
        <div className="hero-text-position">
          <h1 className="headingtext">Eliminating your</h1>
          <h1 className="headingtext">Debt Stress</h1>
          <div className="mt-3">
            <h3 className="headingtext__sub">Reduce what you owe</h3>
            <h3 className="headingtext__sub">Be debt-free faster</h3>
          </div>
        </div>
        <div className="hero-button-position">
          <Link to={"/"} className="headerbutton">
            Find options
          </Link>
        </div>

        <div className="container mx-auto icon-text-position">
          <div className="row justify-content-md-center width-small">
            <div className="col-md">
              <svg className="headericon">
                <use href={Icon + "#icon-users"} />
              </svg>
              <p className="icontext">over 600,000 clients enrolled</p>
            </div>
            <div className="col-md">
              <svg className="headericon">
                <use href={Icon + "#icon-coin-dollar"} />
              </svg>
              <p className="icontext">Free no-risk relief consultation</p>
            </div>
            <div className="col-md">
              <svg className="headericon__1">
                <use href={Icon + "#icon-checkbox-checked"} />
              </svg>
              <p className="icontext">over $10 billon in debt resolved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Headersection1 = () => {
  return (
    <div>
      <div className="container mt-3 margin-btm">
        <div className="row col-10 ml-5">
          <div className="width-medium">
            <img src={logo1} alt="logo" className="logosize" />
            <img src={logo2} alt="logo" className="logosize" />
            <img src={logo3} alt="logo" className="logosize" />
            <img src={logo3} alt="logo" className="logosize" />
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <h1 className="headingtext mb-5">Getting Started</h1>
        <div className="row col-10 mt-3 width-medium">
          <div className="col-md">
            <div>
              <svg className="startedicon">
                <use href={Icon + "#icon-credit-card"} />
              </svg>
              <h2 className="startedtext">Tell us about your debt</h2>
              <p className="startedtext__sub">
                Talk to one of our Certified Debt Consultants to see if freedom
                Debt Relief could be the right solution
              </p>
            </div>
          </div>

          <div className="col-md">
            <div>
              <svg className="startedicon">
                <use href={Icon + "#icon-coin-dollar"} />
              </svg>
              <h2 className="startedtext">See what you could save</h2>
              <p className="startedtext__sub">
                Find out how much time and money you could save by partnering
                with us to resolve your debt
              </p>
            </div>
          </div>

          <div className="col-md">
            <div>
              <svg className="startedicon">
                <use href={Icon + "#icon-news"} />
              </svg>
              <h2 className="startedtext">Enroll in our Program</h2>
              <p className="startedtext__sub">
                we will negotiate settlement with your creditors till until all
                of your enrolled debts is behind you
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 width-small">
          <div className="buttonbg ">
            <Link to={"/"} className="buttontext">Find debt relief option</Link>
          </div>

          <p className="startedtext__sub2 mt-2 text-center">
            You could begin you path to debt relief in just in just a few days
          </p>
        </div>
      </div>
    </div>
  );
};

const Headersection2 = () => {
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="mb-5">
        <h1 className="headingtext mb-5">How our program works</h1>
        <p  className="heading__sub">There are 4 phases in the Freedom debt Relief Program</p>
        </div>
        <div className="row col-10 mt-5 width-medium">
          <div className="col-md boxline1">
            <h1 className="headingtext--l mt-4">1</h1>
            <svg className="boxedicon">
                <use href={Icon + "#icon-controller-record"} />
              </svg>
            <h3 className="headingtext__sub-l mt-4">Build</h3>
            <p className="boxedtext mt-4">
              Each month, you make a deposit into an FDIC-insured savings
              account that you control. As your account grows, we create a
              custom plan to get you out of debt
            </p>
          </div>
          <div className="col-md boxline2">
            <h1 className="headingtext--l mt-4">2</h1>
            <svg className="boxedicon2">
                <use href={Icon + "#icon-controller-stop"} />
              </svg>
            <h3  className="headingtext__sub-l mt-4">Negotiate</h3>
            <p className="boxedtext mt-4">
              After enough funds Build up in your account, we negotiate with
              your creditiors to settle your debts for significantly less than
              you owe
            </p>
          </div>
          <div className="col-md boxline3">
            <h1 className="headingtext--l mt-4 ">3</h1>
            <svg className="boxedicon3">
                <use href={Icon + "#icon-triangle-down"} />
              </svg>
            <h3  className="headingtext__sub-l mt-4">Settle</h3>
            <p className="boxedtext mt-4">
              Our expert negotiator work hard to get you the best savings
              possible everytime we settle one of your debt we contact you for
              autorization and approval
            </p>
          </div>
          <div className="col-md boxline4">
            <h1 className="headingtext--l mt-4">4</h1>
            <svg className="boxedicon">
                <use href={Icon + "#icon-controller-record"} />
              </svg>
            <h3  className="headingtext__sub-l mt-4">Freedom</h3>
            <p className="boxedtext mt-4">
              After the full settlement is paid into each account , you no loner
              owe your creditors, your debt is behind you!
            </p>
          </div>
        </div>
        <p className="heading__sub width-exsmall mt-5">
          Every step of the way, our friendly customer representative are ready
          to answer your questions and offer support, Complete our simple online
          form to get started today.
        </p>
      </div>
    </div>
  );
};

const Headersection3 = () => {
  return (
    <div>
      <div className="container mt-5 text-center">
        <h1 className="headingtext">Every step of the way</h1>
        <p  className="heading__sub mt-5 text-width-s ">
          We're on your side, ready to help you get out of debt and - get on
          with your life. You don't have to go it on alone anymore.
        </p>
      </div>

      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="rightborder">
              <svg className="stepicon">
                <use href={Icon + "#icon-bubbles"} />
              </svg>
              <h2 className="heading__sub2">Talk to us</h2>
              <p className="steptext">
                Customer service representatives are friendly people who are
                always ready to answer your questions
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <svg className="stepicon">
                <use href={Icon + "#icon-laptop"} />
              </svg>
              <h2 className="heading__sub2">Track your progress</h2>
              <p className="steptext">
                Your online client dashboard makes it easy to stay upto date on
                your settlement status.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid home-last mb-5">
        <div>
          <h1 className="headingtext">Have more questions?</h1>
          <p  className="headingtext--secondary mt-3">call us now: 800-910-0065</p>
        </div>
      </div>
    </div>
  );
};
