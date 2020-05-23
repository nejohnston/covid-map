import React from 'react';
import DropMenu from './DropMenu';

const Header = () => {
  return (
    <header className='header'>
      <span className='header__inner'>
        <a href='../' style={{ textDecoration: 'none' }}>
          <div className='logo'>
            <span className='logo__mark' />
            <span className='logo__text'>AgainstCorona</span>
            <span className='logo__cursor' />
          </div>
        </a>

        <span className='header__right'>
          {/* <span className='menu-trigger'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
              <path d='M0 0h24v24H0z' fill='none' />
              <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
            </svg>
          </span> */}
          <div>
            {window.screen.width < 687 ? (
              <DropMenu />
            ) : (
              <nav className='menu'>
                <ul className='menu__inner'>
                  <li>
                    <a href='../about/'>About</a>
                  </li>
                  <li>
                    <a href='../donate/'>Donate</a>
                  </li>
                  <li>
                    <a href='../how_can_i_help/'>How</a>
                  </li>
                  <li>
                    <a href='../hygiene/'>Hygiene</a>
                  </li>
                  <li>
                    <a href='../press/'>Press</a>
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
