import React, { Component } from 'react';
import classNames from 'classnames';
import style from '../scss/style.scss';
import message from '../img/icon_message.svg';
import profile from '../img/icon_profile.svg';
// const cx = classNames.bind(style);

export default class Main extends Component {
  render() {
    return (
      <section>
        {/* header */}
        <nav className="header">
          <div className="header__container">
            {/* header__logo */}
            <div className="header__logo">
              <h1>Beagle</h1>
            </div>
            {/* header__logo */}

            {/* header__menu */}
            <div className="header__menu">
              <ul className="header__menu--ul">
                <li>
                  <a className="header__menu--createChat">Travel Chat</a>
                </li>
                <li>
                  <a className="header__menu--message header__menu_icon">
                    <img src={message} alt="메시지 알림" />
                    <span className="red_circle">97</span>
                  </a>
                </li>
                <li>
                  <a className="header__menu--profile header__menu_icon">
                    <img src={profile} alt="프로필" />
                  </a>
                </li>
              </ul>
            </div>
            {/* header__menu */}
          </div>
        </nav>
        {/* header */}

        {/* main */}
        <main>
          {/* main__banner */}
          <section className="main__banner">
            <article>
              <div>
                <h2>Beagle</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ...</p>
              </div>
            </article>
          </section>
          {/* main__banner */}

          {/* main__filter */}
          <section className="main__filter">

          </section>
          {/* main__filter */}

          {/* main__chat-list */}
          <section className="main__chat-list">
            
          </section>
          {/* main__chat-list */}
        </main>
        {/* main */}

        <footer>
          <h5>Footer Beagle</h5>
        </footer>
      </section>
    );
  }
}