import { BsFillHouseDoorFill } from 'react-icons/bs';

export const HomePage = () => {
  return (
    <>
      <section className='hero'>
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
      </section>
      <section className='section-auctions'>
        <div className='section-auctions-container'>
          <div className='auctions-text'>
            <div className='auctions-text-title'>
              <h2>Explore our Auctions</h2>
              <img src='./src/assets/images/small-separator.svg' alt='logo' />
            </div>
            <div className='auctions-text-separator'></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              dolores voluptates quia deleniti, eius quis excepturi cumque
              aperiam, delectus repudiandae iure autem corporis a modi sapiente,
              doloremque consectetur earum omnis.
            </p>
          </div>
        </div>

        {/* <div className='cards-container'>
          <div className='row'>
            <div className='col-1-of-3'>
              <div className='card'>
                <div className='card__side card__side--front'>
                  <div className='card__picture'></div>
                  <div className='card__heading'></div>
                  <div className='card__details'></div>
                </div>
                <div className='card__side card__side--back'>Back</div>
              </div>
            </div>
          </div>
        </div> */}

        <div className='card-container'>
          <div className='row'>
            <div className='cards-wrapper'>
              <div className='card'>
                <div className='card__side'>
                  <div className='card__heading'>Business Law</div>
                  <div className='card__text'>
                    There are many variations of passages of Lorem Ipsum
                    available, but majority have suffered alteration
                  </div>
                  <div className='card__footer'>
                    <BsFillHouseDoorFill className='card__footer--icon' />
                    <button className='card__footer-btn'>More Info</button>
                  </div>
                </div>
              </div>
              <div className='card'>
                <div className='card__side'>
                  <div className='card__heading'>Business Law</div>
                  <div className='card__text'>
                    There are many variations of passages of Lorem Ipsum
                    available, but majority have suffered alteration
                  </div>
                  <div className='card__footer'>
                    <BsFillHouseDoorFill className='card__footer--icon' />
                    <button className='card__footer-btn'>More Info</button>
                  </div>
                </div>
              </div>
              <div className='card'>
                <div className='card__side'>
                  <div className='card__heading'>Business Law</div>
                  <div className='card__text'>
                    There are many variations of passages of Lorem Ipsum
                    available, but majority have suffered alteration
                  </div>
                  <div className='card__footer'>
                    <BsFillHouseDoorFill className='card__footer--icon' />
                    <button className='card__footer-btn'>More Info</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
