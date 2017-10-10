import React, { Component } from 'react';
import '../scss/chat.scss';
import message from '../img/icon_message.svg';
import profile from '../img/icon_profile.svg';
import arrow from '../img/icon_arrow_down.svg';
import search from '../img/icon_search.svg';
import photo from '../img/icon_photo.svg';
import like from '../img/icon_like.svg';
import point from '../img/icon_point.svg';
import calendar from '../img/icon_calendar.svg';


export default class Chat extends Component {
  render() {
    return (
      <section>
        {/* header */}
        <nav className="header">
          <div className="header__container">
            {/* header__logo */}
            <div className="header__logo">
              <h1><a href="/">Beagle</a></h1>
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
        <main className="chat-main">
          <div className="chat-main__contain">
            {/* main__contain__chatting */}
            <section className="chat-main__contain__chatting">
              <div className="chat-main__contain__chatting--contents">
                <article className="chat-main__contain__chatting--contents-another">
                  <div className="chat-main__contain__chatting--contents-another-box">
                    <span><img src="https://randomuser.me/api/portraits/women/94.jpg"/>Kristina Holmes</span>
                    <div className="text-field">
                      <p>인생을 것은 때까지 있는가? 이성은 열락의 방황하여도, 같으며, 유소년에게서 끓는 것이다.</p>
                      <span className="chat-date">9:27 PM</span>
                    </div>
                  </div>
                </article>
                <article className="chat-main__contain__chatting--contents-another">
                  <div className="chat-main__contain__chatting--contents-another-box">
                    <span><img src="https://randomuser.me/api/portraits/women/19.jpg"/>Georgia Morrison</span>
                    <div className="text-field">
                      <p>인생을 것은 때까지 있는가? 이성은 열락의 방황하여도, 같으며, 유소년에게서 끓는 것이다.</p>
                      <span className="chat-date">9:27 PM</span>
                    </div>
                  </div>
                </article>
                <article className="chat-main__contain__chatting--contents-me">
                  <div className="chat-main__contain__chatting--contents-me-box">
                    <div className="text-field">
                      <p>감사합니다 :)</p>
                      <span className="chat-date">9:27 PM</span>
                    </div>
                  </div>
                </article>
                <article className="chat-main__contain__chatting--contents-another">
                  <div className="chat-main__contain__chatting--contents-another-box">
                    <span><img src="https://randomuser.me/api/portraits/women/19.jpg"/>Georgia Morrison</span>
                    <div className="text-field">
                      <p>넵!</p>
                      <span className="chat-date">9:27 PM</span>
                    </div>
                  </div>
                </article>
              </div>
              <div className="chat-main__contain__chatting--input">
                <input type="text" placeholder="type your message..."/>
                <div className="chat-main__contain__chatting--input--buttons">
                  <button className="btn chat-main__contain__chatting--input--buttons-photo" type="button">
                    <img src={photo} alt="사진 첨부" />
                  </button>
                  <button className="btn chat-main__contain__chatting--input--buttons-send" type="button">send</button>
                </div>
              </div>
            </section>
            {/* main__contain__chatting */}
            {/* main__contain__info */}
            <section className="chat-main__contain__info">
              {/* main__contain__info--search */}
              <div className="chat-main__contain__info--search">
                <input type="text" />
                <button><img src={search} alt="검색" /></button>
              </div>
              {/* main__contain__info--search */}
              {/* main__contain__info--description */}
              <div className="chat-main__contain__info--description">
                {/* main__contain__info--description--travel */}
                <div className="chat-main__contain__info--description--travel">
                  <div className="chat-main__contain__info--description--travel-about">
                    <h3>
                      <p><span><img src="https://randomuser.me/api/portraits/women/94.jpg"/></span>Kristina Holmes</p>
                      <a href="/"><img src={like} alt="좋아요 버튼"/></a>
                    </h3>
                    <div>
                      <p><span><img src={calendar} /></span>10월 06일</p>
                    인생을 것은 때까지 있는가? 이성은 열락의 방황하여도, 같으며, 유소년에게서 끓는 것이다.
                    </div>
                  </div>
                  <div className="chat-main__contain__info--description--travel-map">
                    <h3>
                      <p><span><img src={point}/></span>Tokyo</p>
                      <a href="/">+ 자세히 보기</a>
                    </h3>
                    <div></div>
                  </div>
                </div>
                {/* main__contain__info--description--travel */}
                {/* main__contain__info--description--users */}
                <div className="chat-main__contain__info--description--users">
                  <h3>사람</h3>
                  <ul>
                    <li>
                     <span><img src="https://randomuser.me/api/portraits/women/94.jpg"/></span>Kristina Holmes
                    </li>
                    <li>
                     <span><img src="https://randomuser.me/api/portraits/women/19.jpg"/></span>Georgia Morrison
                    </li>
                    <li>
                     <span><img src="https://randomuser.me/api/portraits/men/96.jpg"/></span>Alexander Pena
                    </li>
                  </ul>
                </div>
                {/* main__contain__info--description--users */}
              </div>
              {/* main__contain__info--description */}
            </section>
            {/* main__contain__info */}
          </div>
        </main>
        {/* main */}

        <footer className="footer">
          <h5>&#169; Beagle, Inc</h5>
        </footer>
      </section>
    )
  }
}