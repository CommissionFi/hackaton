import React from 'react';
import './App.css';

interface FooterLinkProps {
  url: string;
  iconSrc: string; 
}

function FooterLink({ url, iconSrc }: FooterLinkProps) {
  return (
    <div className="footerIcon">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={process.env.PUBLIC_URL + iconSrc} alt="Icon" /> 
      </a>
    </div>
  );
}

function AppFooter() {
  return (
    <footer className="AppFooter">
      <FooterLink
        url="https://lensvert.xyz/u/commissionfi"
        iconSrc="/icons/lens.png" 
      />
      <FooterLink
        url="https://x.com/commissionfi"
        iconSrc="/icons/x.png" 
      />
      <FooterLink
        url="https://github.com/CommissionFi/hackaton"
        iconSrc="/icons/github.png" 
      />
    </footer>
  );
}

export default AppFooter;
