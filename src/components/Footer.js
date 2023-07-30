import React from 'react';
import GitHubLogo from '../components/images/github-mark.png'

function Footer() {
  return (
<footer className='footer  d-flex justify-content-evenly' style={{backgroundColor: "#fcbf49"}}> 
    <a href="https://github.com/abrand93">
    <img src={GitHubLogo}
     style={{height: "50px"}}
    alt="gitHubLogo">
        
    </img>
    </a>
</footer>
  )



}

export default Footer;
