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
          href="https://github.com/daniela-93"
          target="_blank"
        />
        <BottomNavigationAction
          label="LinkedIn"
          icon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/daniela-acuna-6396021b6/"
          target="_blank"
        />
       
      </BottomNavigation>
    </div>
  );
};

export default Footer;