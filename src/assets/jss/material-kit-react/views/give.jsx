import { container, title } from "assets/jss/material-kit-react.jsx";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.jsx";

const profilePageStyle = {
  container,
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important"
  },
  name: {
    marginTop: "-100px"
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
    
  },
  title2: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    marginBottom: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: "#fff"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  },
  sermonImage: {
    width:"100%"

  },
  container1: {
    textAlign : "center",
    justifyContent:"center"
  },
  hidden:{
    display: "none"
  },
  member: {
    textAlign: "center"
  },
  memberPopover:{
    width:"300px",
    margin: "10px"
  },
  memberImage:{
    width:"100%"
  },
  memberText:{
    margin:"20px",
    justifyContent:"center"
  },
  memberModal:{
    position: "absolute",
    width: "60vw",
    backgroundColor: "white",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  give_paper:{
    backgroundColor: "#e6e6e6",
    color: "black",
    margin: "10px"
  },
  give_paper_contents:{
    textAlign: "center",
    padding: "2%",
    paddingTop: "1%",
    height:"280px"
  },
  give_bottom:{
    textAlign: "center",
    padding:"2%"
  }
};

export default profilePageStyle;
