import React from "react";
import Icon from "../assets/icons/sprite.svg";
import profileimg from "../assets/images/profilephoto.jpg";

export default function Dashboard() {
  return (
    <div>
      <Admin />
    </div>
  );
}

const Admin = () => {
  return (
    <div className="container-fluid background">
      <div className="row">
        <div className="col-md">
          <Adminleft />
        </div>

        <div className="col-md-10" style={{ backgroundColor: "" }}>
          <h2 className="mt-3 dash__text-b display-in-b">Send Money</h2>
          <div className="display-in-b edge">
            <div className="display-in-b icon-round-bg">
             
              <svg className="icon-d ">
                <use href={Icon + "#icon-file-text2"} />
              </svg>
            </div>
            <div className="display-in-b icon-round-bg ml-3">
              <svg className="icon-d">
                <use href={Icon + "#icon-question"} />
              </svg>
            </div>
          </div>
          <br />{" "}
          <p className="dash__text-s">
            Balance: <strong>$22,124</strong>
          </p>
          <svg className="icon-d">
            <use href={Icon + "#icon-chevron-small-down"} />
          </svg>
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col-md">
                  <Adminmid1 />
                </div>
                <div className="col-md">
                  <Adminmid2 />
                </div>
              </div>
              <Adminmid3 />
            </div>
            <div
              className="col-4"
            >
              <Adminright />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Adminleft = () => {
  return (
    <div>
      <div>
        <div className="width-small mt-3 mb-2">
          <img className="profileimg" src={profileimg} alt="profile_photo" />
        </div>
        <div className="userdetails mb-5">
          <h2 className="profilename-text">Johnny Wilson</h2>
          <svg className="icon-d">
            <use href={Icon + "#icon-chevron-small-down"} />
          </svg>
          <p className="dash__userdetails text-center">TG1226789</p>
        </div>
      </div>
      <div>
        <svg className="icon-d">
          <use href={Icon + "#icon-view-tile"} />
        </svg>
        <p className="dash__text-s ml-3">Services</p>
      </div>

      <div>
        <svg className="icon-d">
          <use href={Icon + "#icon-news-paper"} />
        </svg>
        <p className="dash__text-s ml-3">Transactions</p>
      </div>

      <div>
        <svg className="icon-d">
          <use href={Icon + "#icon-tab"} />
        </svg>
        <p className="dash__text-s ml-3">Send Money</p>
      </div>

      <div>
        <svg className="icon-d">
          <use href={Icon + "#icon-credit-card"} />
        </svg>
        <p className="dash__text-s ml-3">Cards</p>
      </div>

      <div>
        <svg className="icon-d">
          <use href={Icon + "#icon-news-paper"} />
        </svg>
        <p className="dash__text-s ml-3">History</p>
      </div>
      <div></div>

      <div className="move-down">
        <svg className="icon-d">
          <use href={Icon + "#icon-cog"} />
        </svg>
        <p className="dash__text-s ml-3">Settings</p>
        <div>
          <svg className="icon-d">
            <use href={Icon + "#icon-log-out"} />
          </svg>
          <p className="dash__text-s ml-3">Log Out</p>
        </div>
      </div>
    </div>
  );
};

const Adminmid1 = () => {
  return (
    <div>
      <div className="white-bg-s d-flex justify-content-between">
        <form action="">
          <label for="country" className="dash__text-s mr-4">
            From:
          </label>
          <img />
          <select
            id="country"
            name="country"
            className="dash__text-s no-border color1"
          >
            <option value="united kingdom" className="dash__text-s">
              United Kingdom
            </option>
            <option value="canada" className="dash__text-s">
              Canada
            </option>
            <option value="usa" className="dash__text-s">
              USA
            </option>
          </select>
        </form>
      </div>

      <div className="white-bg-b mt-5">
        <p className="dash__text-s block">You send</p>
        <h2 className="dash__text-b display-in-b">10,000.00</h2>
        <h3 className="dash__text-m bold-txt ml-1">GBP</h3>
      </div>
      <div className="mt-2">
        <h2 className="dash__text-m bold-txt display-in-b">Choose the date:</h2>
      </div>
    </div>
  );
};

const Adminmid2 = () => {
  return (
    <div className="mb-2">
      <div className="white-bg-s">
        <form action="">
          <label for="country" className="dash__text-s mr-5">
            To:
          </label>
          <img />
          <select
            id="country"
            name="country"
            className="dash__text-s no-border color1"
          >
            <option value="united kingdom" className="dash__text-s">
              Germany
            </option>
            <option value="canada" className="dash__text-s">
              Canada
            </option>
            <option value="usa" className="dash__text-s">
              USA
            </option>
          </select>
        </form>
      </div>

      <div className="white-bg-b mt-5">
        <p className="dash__text-s block">Recipients gets</p>
        <h2 className="dash__text-b display-in-b">11,152.85</h2>
        <h3 className="dash__text-m bold-txt ml-1">EUR</h3>
      </div>

      <div className="mt-2">
        <p className="dash__text-s mr-2">choose the date</p>
        <input
          type="date"
          value="2020-06-27"
          className="dash__text-s no-border"
        />
        <svg className="icon-d">
          <use href={Icon + "#icon-chevron-small-down"} />
        </svg>
      </div>
    </div>
  );
};

const Adminmid3 = () => {
  return (
    <div>
      <div className="price-bg mb-3">
        <div className="mt-2">
          <label className="checkbox">
            <h3 className="dash__text-m bold-txt">
              Get 27 July 2020 till 12pm
            </h3>
            <p className="dash__text-s block">Express</p>
            <input type="checkbox" checked="checked" name="radio" />
            <span className="checkmark mt-2" />
          </label>

          <h3 className="dash__text-m bold-txt price-margin">$1.50</h3>
        </div>
      </div>

      <div className="price-bg mb-3">
        <div className="mt-2">
          <label className="checkbox">
            <h3 className="dash__text-m bold-txt">Get 27 July 2020 till 6pm</h3>
            <p className="dash__text-s block">Standard</p>
            <input type="checkbox" name="radio" />
            <span className="checkmark mt-2" />
          </label>
          <h3 className="dash__text-m bold-txt price-margin">$0.99</h3>
        </div>
      </div>

      <div className="price-bg">
        <div className="mt-2">
          <label className="checkbox">
            <h3 className="dash__text-m bold-txt mr-5">Get today till 8pm</h3>
            <p className="dash__text-s block">
              Only on working days from 11am to 8pm
            </p>
            <input type="checkbox" name="radio" />
            <span className="checkmark mt-2" />
          </label>
          <h3 className="dash__text-m bold-txt price-margin">$2.00</h3>
        </div>
      </div>
    </div>
  );
};

const Adminright = () => {
  return (
    <div className="right-top">
       <div>
        <h2 className="dash__text-m bold-txt mb-3 mt-5 ml-3">Payment Details</h2>
        </div>
      <div  class="d-flex justify-content-start ml-3">
       
        <div className="section1">
          <p className="dash__text-s bold-txt mr-4">10,000.00</p>
          <img />
        </div>
       
        <div className="icon-round-bg-s">
          <svg className="icon-d-s">
            <use href={Icon + "#icon-arrow-thin-right"}/>
          </svg>
        </div>
        <div>
          <p className="dash__text-s bold-txt ml-4">11,152.85</p>
          <img />
        </div>
        
      </div>
      

      <div className="right-bottom">
        <div className="ml-3 mt-5">
        <svg className="icon-d mr-2">
                <use href={Icon + "#icon-calendar"} />
              </svg>
          <p className="dash__text-s">Delivery</p>
          <p className="dash__text-s bold-txt text-right right-b-m-1">27 july 20:30</p>
        </div>
        <div className="ml-3">
        <svg className="icon-d mr-2">
                <use href={Icon + "#icon-coin-dollar"} />
              </svg>
          <p className="dash__text-s ">Conversion rate</p>
          <p className="dash__text-s bold-txt text-right right-b-m-2">1,109.64</p>
        </div>
        <div className="ml-3">
        <svg className="icon-d mr-2">
          <use href={Icon + "#icon-tab"} />
        </svg>
          <p className="dash__text-s">Recipient</p>
          <p className="dash__text-s bold-txt right-b-m-3">$0.48</p>
        </div>
        <div className="ml-3">
        <button className="confirmbtn">Confirm</button>
        </div>
      </div>
     
    </div>
  );
};
