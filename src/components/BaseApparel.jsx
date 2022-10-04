import React from 'react';
import styles from '../assets/baseApparel.module.scss';

import { ReactComponent as Logo } from '../assets/svg/logo.svg';
import { ReactComponent as Arrow } from '../assets/svg/icon-arrow.svg';
import hero_desktop from '../assets/hero-desktop.jpg';
import hero_mobile from '../assets/hero-mobile.jpg';

function BaseApparel() {
  return (
    <section>
      <article>
        <Logo />
        <h2>
          <span>WE'RE </span>COMING SOON
        </h2>
        <p>
          Hello fellow shoppers! We're currently building our new fashion store. Add your email
          below to stay up-to-date with announcements and our launch deals.
        </p>
        <input type="text" placeholder="Email Address" />
        <button>
          <Arrow />
        </button>
      </article>

      <picture>
        <source media="(min-width: 645px)" srcSet={hero_desktop} />
        <img src={hero_mobile} alt="parfume" />
      </picture>
    </section>
  );
}

export default BaseApparel;
