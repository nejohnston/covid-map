import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__content">
          <span>&copy; 2020</span>

          <span>
            <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener noreferrer">
              CC BY-NC 4.0
            </a>
          </span>
          <span>
            <a href="http://StudentsAgainstCorona.co.uk/terms">T&C</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
