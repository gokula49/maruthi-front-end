import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/organizationsetup.module.css";
import countriesList from "../public/JSON/countrieslist.json";
import languagesList from "../public/JSON/languagesList.json";
import currencyList from "../public/JSON/currencyList.json";
import timezoneList from "../public/JSON/timezoneList.json";
import companyList from "../public/JSON/companyList.json";
import Router from "next/router";
import axios from "axios";
import { useRouter } from "next/router";
import { isAutheticated } from '../components/Auth/auth'
import {getId} from '../components/Auth/auth';
import { URLS } from "../components/Auth/const";
// import {addOrg} from '../auth/services';
import useSWR from 'swr';
export function Organizationsetup() {
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedStates, setSelectedState] = useState();
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [selectedCurrency, setselectedCurrency] = useState();
  const [selectedTimeZone, setSelectedTimeZone] = useState();
  const [visible, setvisible] = useState(false);
  const [availableStates, setStates] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [phoneno,setPhoneno] = useState("");
  const [website,setWebsite] = useState("");
  const {user,accessToken} = isAutheticated();
  const router = useRouter();

  const handleAddress = () => {
    setvisible(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
     
      employeename: e.target.organization_name.value,
      phoneno: e.target.phoneno.value,
      website: e.target.website.value,
      timeZone: e.target.timezone.value,
      currencyLocale: e.target.currency.value,
     
      
    };
    const id = JSON.parse(localStorage.getItem("id"));
    console.log(formData)
    console.log(id)

    axios.post(`${URLS}/profilePosting`,formData,{ headers: {"Authorization" : `Bearer ${accessToken}`}})
    .then((response)=>{
      alert("Registered Successfully"),
      router.push('/displayjobopenings')

    }).catch(()=>{
      alert("Registration failed");

    })

  


console.log(formData)

  
  };

  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.bgimagetop}
          src="../org_setup_top.png"
          width="230px"
        ></img>
        <img
          className={styles.bgimagebottom}
          src="../org_setup_bottom.png"
          width="230px"
        ></img>
        <div className={styles.mainForm}>
          <div className={styles.formTop}>
            <svg
              version="1.1"
              className={styles.formsvglogo}
              id="Layer_1"
              xmlnsXlink="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              viewBox="0 0 1024 1024"
              xmlSpace="preserve"
            >
              <g opacity=".9" fill="#226db4">
                <path d="M490 400.8h140c16.6 0 30-13.4 30-30v-140c0-16.6-13.4-30-30-30H490c-16.6 0-30 13.4-30 30v140c0 16.6 13.4 30 30 30zm30-140.1h80v80h-80v-80z"></path>
                <path d="M994.1 0H450c-93.8 0-170 76.3-170 170v110.6H169.3C75.9 280.6-.1 356.6-.1 450v404.6c0 93.4 76 169.4 169.4 169.4H754c72.1 0 140-28.1 191-79.1s79.1-118.8 79.1-191V30c0-16.6-13.4-30-30-30zM169.3 340.6h110.6v180.2h-220V450c0-60.3 49.1-109.4 109.4-109.4zm.6 623.4h-.6C109 964 59.9 914.9 59.9 854.6V580.8H280v273.8c0 60.3-49.1 109.4-109.4 109.4h-.7zm794.2-210c0 115.8-94.2 210.1-210.1 210.1H299.8c25-29.5 40.2-67.7 40.2-109.4V170c0-60.7 49.4-110 110-110h514.1v694z"></path>
                <path d="M490 580.8h323.5c16.6 0 30-13.4 30-30s-13.4-30-30-30H490c-16.6 0-30 13.4-30 30s13.4 30 30 30zm0 180.1h323.5c16.6 0 30-13.4 30-30s-13.4-30-30-30H490c-16.6 0-30 13.4-30 30s13.4 30 30 30z"></path>
              </g>
            </svg>
            <h2>Profile Viewing Applications</h2>
            <svg
              className={styles.formsvgcross}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <path d="M455.2 9.2L256 208.4 56.8 9.2C44.5-3.1 24.6-3.1 12.2 9.2l-2.9 2.9C-3 24.4-3 44.4 9.3 56.7L208.4 256 9.2 455.2c-12.3 12.3-12.3 32.3 0 44.6l2.9 2.9c12.3 12.3 32.3 12.3 44.6 0L256 303.6l199.2 199.2c12.3 12.3 32.3 12.3 44.6 0l2.9-2.9c12.3-12.3 12.3-32.3 0-44.6L303.6 256 502.8 56.8c12.3-12.3 12.3-32.3 0-44.6l-2.9-2.9c-12.5-12.4-32.4-12.4-44.7-.1z"></path>
            </svg>
            {/* <p>\/</p>
                    <p>/\</p> */}
          </div>
          <form className={styles.formBottom} onSubmit={handleSubmit}>
            <h4>
              Welcome aboard, 
              
            </h4>
            <p className={styles.inputTitle}>
              Enter Employee Details.
            </p>
            <br></br>

            <label htmlFor="Organization Name" className={styles.inputTitle}>
              Company Name*
              {/* <input
                type="text"
                value={companyName}
                className={styles.input}
                name="organization_name"
                onChange={(e) => setCompanyName(e.target.value)}
                required
                autoFocus
              /> */}
            </label>
            <select
                  className={styles.input}
                  name="organization_name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                  autoFocus
                >
                  <option></option>
                  {companyList.companies.map((value, key) => {
                    return (
                      <option value={value.name} key={key}>
                        {value.name}
                      </option>
                    );
                  })}
                </select>

            <br/><br/>
            <label htmlFor="Organization Name" className={styles.inputTitle}>
               Phone Number*
              <input
                type="number"
                value={phoneno}
                className={styles.input}
                name="phoneno"
                onChange={(e) => setPhoneno(e.target.value)}
                required
                autoFocus
              />
            </label>

            <br/><br/>
            <label htmlFor="Organization Name" className={styles.inputTitle}>
               Website*
              <input
                type="text"
                value={website}
                className={styles.input}
                name="website"
                onChange={(e) => setWebsite(e.target.value)}
                required
                autoFocus
              />
            </label>
            <br></br>
          
            <br></br>
            <div className={styles.fourthTab}>
              <div className={styles.halfSize_first}>
                <label className={styles.inputTitle}>Currency</label>
                <select
                  className={styles.input}
                  placeholder="Currency"
                  name="currency"
                  value={selectedCurrency}
                  onChange={(e) => setselectedCurrency(e.target.value)}
                >
                  <option></option>
                  {currencyList.currencies.map((value, key) => {
                    return (
                      <option
                        value={value["cc"] + "" + value["name"]}
                        key={key}
                      >
                        {value["cc"] + " - " + value["name"]}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className={styles.halfSize_second}>
                <label className={styles.inputTitle}>Language</label>
                <select
                  className={styles.input}
                  placeholder="Language"
                  name="language"
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                >
                  <option></option>
                  {languagesList.languages.map((value, key) => {
                    return (
                      <option value={value.name} key={key}>
                        {value.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <br></br>
            <div className={styles.fifthTab}>
              <label className={styles.inputTitle}>Time Zone</label>
              <select
                className={styles.input}
                placeholder="Time Zone"
                name="timezone"
                value={selectedTimeZone}
                onChange={(e) => setSelectedTimeZone(e.target.value)}
              >
                <option></option>
                {timezoneList.timeZones.map((value, key) => {
                  return (
                    <option
                      value={value["value"] + " - " + value["text"]}
                      key={key}
                    >
                      {value["value"] + " - " + value["text"]}
                    </option>
                  );
                })}
              </select>
            </div>
            <br></br>
            <br></br>
            {/* <div className={styles.sixthTab}>
                        <p className={styles.inputTitle}>Is this business registered for GST?</p>
                        <div className={styles.radioButton}>
                                <label className="switch">
                                <input type="checkbox" />
                                <span className={styles['slider']+""+styles['round']}></span>
                                </label>
                        </div>  
                    </div> */}
            <p className={styles.inputTitle}>
              <span>NOTE:</span> You can change these details later in Settings,
              if needed.
            </p>
            <br></br>
            <hr></hr>
            <br></br>
            <div className={styles.seventhTab}>
              <div className={styles.buttons}>
                <button type="submit" className={styles.buttonStart}>
                  Submit
                </button>

               
              </div>

              <div className={styles.privacyPolicy}>
               
              </div>
            </div>
            <br></br>
            <br></br>
          </form>
        </div>
      </div>
    </>
  );
}
export default Organizationsetup;
