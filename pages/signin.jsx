import React, { useEffect, useState } from "react";
import styles from "../styles/sign_in.module.css";
import Link from "next/link";
import { URLS } from "../components/Auth/const";

import Router from "next/router";
import axios from "axios";
export const Signin = () => {
  const [success, setSuccess] = useState(false);
  const [datas, setDatas] = useState();
  const [emailEntered, setEmailEntered] = useState(false);
  const [email, setEmail] = useState("");
 
  const signInResponse = (success, data) => {
    console.log("Inside signIn response......");
    if (success) {
      setSuccess(true);
      setDatas(data);
      console.log(data);
      localStorage.setItem("user",JSON.stringify({user:data}));
      var companyDetails = JSON.parse(data.companyDetails);

    
      Router.push("/home/dashboard")}
  };
  const formOnSubmit = (event) => {
    event.preventDefault();
    event.target.signin_btn.disabled = true;
    const username = event.target.email_login.value;
    const password = event.target.password_login.value;
    console.log(`Values are : \n${email}\n${password}\n`);
    axios({
      method: "POST",
      url: `${URLS}/api/auth/signin`,
      data: { username, password },
    }).then((response) => {
      alert('Signed in successfully')
      console.log(response.data)
      localStorage.setItem("jwt", JSON.stringify(response.data))
      localStorage.setItem("Cid", JSON.stringify(response.data.comapny_id));

   
         Router.push("/organizationsetup")
      // };
    }).catch((err)=>{
      alert("Something went wrong try again")
    })
  };
  return (
    <div className={styles.background}>
      <div className={styles.signin_container}>
        <div className={styles.signin_box}>
          
          <div className={styles.sign_in_div}>
            <form className={styles.login} onSubmit={formOnSubmit}>
              <div className={styles.signin_head}>
                <span id="headtitle">Sign in</span>
                <span id="trytitle"></span>
                
                <div className={styles.textbox_div}>
                  <span>
                    <input
                      placeholder="Enter Your User Name"
                      type="text"
                      name="email_login"
                      className={styles.textbox}
                      required={true}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </span>
                </div>
                {emailEntered && (
                  <div className={styles.textbox_div}>
                    <span>
                      <input
                        placeholder="Enter your password"
                        type="password"
                        name="password_login"
                        className={styles.textbox}
                        required={true}
                      />
                    </span>
                  </div>
                )}
                <button
                  disabled={false}
                  className={styles.btn_blue}
                  type={emailEntered ? "submit" : ""}
                  name="signin_btn"
                  onClick={() => {
                    email.match("")
                      ? setEmailEntered(true)
                      : "";
                  }}
                >
                  <span>{emailEntered ? "Login" : "Next"}</span>
                </button>
              </div>
              <div className={styles.forget_pass}>
                <a className={styles.forget_pass}>Forgot Password?</a>
              </div>
            </form>
            <div className={styles.line}></div>
           
          </div>
        </div>
      </div>
      <div className={styles.signuplink}>
        Don&apos;t have a  account?
        <a>
          <Link href="/register"> Sign Up Now</Link>
        </a>
      </div>
    </div>
  );
};

export default Signin;
