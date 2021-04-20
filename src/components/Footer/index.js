import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";


const Footer = () => {
  return (
    <div>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="Github"
          icon={<GithubIcon />}
          href=""
          target="_blank"
        />
        <BottomNavigationAction
          label="LinkedIn"
          icon={<LinkedInIcon />}
          href=""
          target="_blank"
        />
       
      </BottomNavigation>
    </div>
  );
};

export default Footer;