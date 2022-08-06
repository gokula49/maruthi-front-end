import styles from "./LandingPage.module.css";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Divider from '@mui/material/Divider';
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from "next/link"

export default function LandingPage(){
    return(
        <>
            <head>
                <title>Profile Software</title>
            </head>
            <div className={styles.header}>
             
               
              
            </div>
            <Divider/>
            <div className={styles.top}>
                <div className={styles.heading2}>
                    <h1>Profile Creating Software!!.</h1>
                    <br/>
                    <div className={styles.candbtn}>
                        <Button className={styles.access_expense}>
                            <Link href="/register">
                            <a>Register</a>
                            </Link>
                        </Button>
                        &nbsp;
                        <Button className={styles.access_expense}>
                            <Link href="/signin">
                            <a>Signin</a>
                            </Link>
                        </Button>
                    </div>
                </div>
                
                
            </div>
            
        </>
    )
}
