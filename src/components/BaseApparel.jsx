import React, { useState } from 'react';
import styles from '../assets/baseApparel.module.scss';

import { ReactComponent as Logo } from '../assets/svg/logo.svg';
import { ReactComponent as Arrow } from '../assets/svg/icon-arrow.svg';
import { ReactComponent as Error } from '../assets/svg/icon-error.svg';
import hero_desktop from '../assets/hero-desktop.jpg';
import hero_mobile from '../assets/hero-mobile.jpg';

function BaseApparel() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const emailValidation = () => {
    const regEx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    if (!regEx.test(email) && email !== '') {
      setMessage('Please provide a valid email');
    } else if (email === '') {
      setMessage('Please provide a valid email');
    } else {
      setMessage('');
      setEmail('');
    }
  };

  const extraStyles = {
    border: '2px solid var(--soft-red)',
    boxSizing: 'border-box',
    opacity: '1',
    paddingBottom: '24px',
  };

  return (
    <section>
      <div className={styles.left}>
        <article>
          <Logo className={styles.logo} />
          <img src={hero_mobile} alt="person" className={styles.image_mobile} />
          <h2>
            <span>WE'RE </span>COMING SOON
          </h2>
          <p>
            Hello fellow shoppers! We're currently building our new fashion store. Add your email
            below to stay up-to-date with announcements and our launch deals.
          </p>
          <div className={styles.input_field}>
            <input
              id="email"
              autoComplete="off"
              type="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Email Address"
              style={message ? extraStyles : null}
            />
            {message && <Error />}
            <p className={styles.error}>{message}</p>

            <button onClick={emailValidation}>
              <Arrow />
            </button>
          </div>
        </article>
      </div>

      <picture>
        <source media="(min-width: 900px)" srcSet={hero_desktop} />
        <img src={hero_mobile} alt="person" />
      </picture>
    </section>
  );
}

export default BaseApparel;
