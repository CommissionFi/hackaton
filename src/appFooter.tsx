import React from 'react';
import './app.css';

interface FooterLinkProps {
  url: string;
  iconSrc: string; 
}

function FooterLink({ url, iconSrc }: FooterLinkProps) {
  return (
    <li>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={iconSrc} alt="Icon" /> 
      </a>
    </li>
  );
}

function AppFooter() {
  return (
    <footer className="appFooter">
      <ul>
        <FooterLink
          url="https://lensvert.xyz/u/commissionfi"
          iconSrc="/public/icons/lens.png" 
        />
        <FooterLink
          url="https://x.com/commissionfi"
          iconSrc="/public/icons/x.png" 
        />
        <FooterLink
          url="https://github.com/CommissionFi/hackaton"
          iconSrc="/public/icons/github.png" 
        />
      </ul>
    </footer>
  );
}

export default AppFooter;
