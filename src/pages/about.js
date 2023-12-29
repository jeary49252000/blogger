import * as React from "react"
import { createUseStyles } from "react-jss";
import { Phone24Filled, MailRead24Filled } from "@fluentui/react-icons";
import { withLayout } from "../components/layout.js";

const useStyles = createUseStyles({
  main: {
    marginTop: '20px',
    display: 'flex',
    fontSize: '1rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& span': {
      marginBottom: '10px',
    },
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    '& span': {
      marginBottom: 'unset',
    },
  },
  mail: {
    position: 'relative',
    top: '2px',
    marginRight: '2px',
  },
  phone: {
    marginRight: '1px',
  }
});

const IndexPage = withLayout(() => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <span>Hi! I am <strong>Chun-Hao Lai.</strong> Now I am working as a front end developer in Microsoft.</span>
      <div className={classes.info}>
        <span className={classes.phone}>
          <Phone24Filled />
        </span>
        <span>886913807989</span>
      </div>
      <div className={classes.info}>
        <span className={classes.mail}>
          <MailRead24Filled />
        </span>
        <span>jeary49252000@gmail.com</span>
      </div>
      <ul>
        <li>Experience</li>
        <ul>
          <li>Microsoft Ads Insight MT</li>
          <li>Microsoft Ads Campaign UI</li>
        </ul>
      </ul>
      <span>My previous experience is <a href="https://jeary49252000.github.io/">here</a>.</span>
    </div>
  );
})

export default IndexPage

export const Head = () => <title>Chun-Hao Lai</title>
