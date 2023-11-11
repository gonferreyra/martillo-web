import { useState } from 'react';

export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleNavToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className='header-overlay'></div>
      <header className='header'>
        <div className='header-container'>
          <div className='header-container-logo'>
            <a href=''>
              {' '}
              <img src='/src/assets/images/attorneyster-logo.svg' alt='logo' />
            </a>
            {/* <button className='header-button'>Iniciar Sesion</button> */}
            <a href='#' className='header-container-logo-button'>
              Iniciar Sesion
            </a>
          </div>
          <div className='header-nav'>
            <div className='header-nav-container'>
              <nav>
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Pages</a>
                <a href='#'>Contact</a>
              </nav>
              <button
                className={`hamburger ${open ? 'is-active' : ''}`}
                onClick={handleNavToggle}
              >
                <div className='bar'></div>
              </button>
              <div className='header-contact'>
                <div className='header-contact-wrap'>
                  <div className='header-contact-item'>
                    <div className='header-contact-item-icon'>
                      <img
                        src='/src/assets/images/header-call-icon.svg'
                        alt=''
                      />
                    </div>
                    <div className='header-contact-item-wrap'>
                      <p>Contact Us On:</p>
                      <a href=''>351123456</a>
                    </div>
                  </div>
                  <div className='header-contact-item'>
                    <div className='header-contact-item-icon'>
                      <img
                        src='/src/assets/images/header-mail-icon.svg'
                        alt='phone-icon'
                      />
                    </div>
                    <div className='header-contact-item-wrap'>
                      <p>Email Us On:</p>
                      <a href=''> test@gmail.com </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav className={`mobile-nav ${open ? 'is-active' : ''}`}>
              <a href=''>Home</a>
              <a href=''>About Us</a>
              <a href=''>Pages</a>
              <a href=''>Contact</a>
            </nav>
          </div>
        </div>
      </header>
      {/* <div className='hero'>
        <div className='hero-container'>
          <div className='hero-grid'>
            <div className='hero-content'>
              <img src='/src/assets/images/small-separator.svg' alt='' />
              <h1>We're Group Of Certified Law Professionals</h1>
              <p>
                we have helped countless maritime workers and their families go
                up against the largest offshore companies and win.
              </p>
              <button>Get in Touch</button>
            </div>
            <div className='hero-image'>
              <img
                src='/src/assets/images/hero-men.png'
                alt='profile-picture'
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
