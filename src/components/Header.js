import React from 'react';
import DropMenu from './DropMenu';

const Header = () => {
  return (
    <header className='header'>
      <span className='header__inner'>
        <a
          href='http://studentsagainstcorona.co.uk/'
          style={{ textDecoration: 'none' }}
        >
          <div className='logo'>
            <span className='logo__mark' />
            <span className='logo__text'>AgainstCorona</span>
            <span className='logo__cursor' />
          </div>
        </a>

        <span className='header__right'>
          <div>
            {window.screen.width < 687 ? (
              <DropMenu />
            ) : (
              <nav className='menu'>
                <ul className='menu__inner'>
                  <li>
                    <a href='http://studentsagainstcorona.co.uk/about/'>
                      About
                    </a>
                  </li>
                  <li>
                    <a href='http://studentsagainstcorona.co.uk/donate/'>
                      Donate
                    </a>
                  </li>
                  <li>
                    <a href='http://studentsagainstcorona.co.uk/how_can_i_help/'>
                      How
                    </a>
                  </li>
                  <li>
                    <a href='http://studentsagainstcorona.co.uk/hygiene/'>
                      Hygiene
                    </a>
                  </li>
                  <li>
                    <a href='http://studentsagainstcorona.co.uk/press/'>
                      Press
                    </a>
                  </li>
                  <li>
                    <a href='https://againstcoronamap.web.app/'>Map</a>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </span>
      </span>
    </header>
  );
};

export default Header;
