import React, { Component } from 'react';
import 'classnames';
import '../scss/style.scss';
import message from '../img/icon_message.svg';
import profile from '../img/icon_profile.svg';
import arrow from '../img/icon_arrow_down.svg';
import like from '../img/icon_black_like.svg';
import travel from '../img/icon_travel.svg';
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
        <main className="main">
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
            <article>
              <form>
                <div className="main__filter--chat">
                  <div className="main__filter--where">
                    <strong>도시</strong>
                    <a><p>어디로 가세요?</p><img src={arrow} alt="도시 선택" /></a>
                  </div>
                  <div className="main__filter--date">
                    <strong>일정</strong>
                    <a><p>여행 날짜</p><img src={arrow} alt="출발 여행날짜 선택" /></a>
                  </div>
                  <div className="main__filter--list">
                    <strong>대화방 리스트</strong>
                    <a><p>인기순</p><img src={arrow} alt="대화방 리스트 선택" /></a>
                  </div>
                  <div className="main__filter--search">
                    <button type="button">검색</button>
                  </div>
                </div>
              </form>
            </article>
          </section>
          {/* main__filter */}

          {/* main__chat-list */}
          <section className="main__chat-list">
            <div className="main__chat-list__container">
              {/* main__chat-list__card */}
              <article className="main__chat-list__card">
                <div className="main__chat-list__card--header">
                  <div className="main__chat-list__card--header--profile">
                    <img src="https://randomuser.me/api/portraits/men/89.jpg" />
                    <strong>Username</strong>
                  </div>
                  <div className="main__chat-list__card--header--like">
                    <img src={like} />
                    <span>2,300</span>
                  </div>
                </div>
                <div className="main__chat-list__card--image">
                  <img />
                </div>
                <div className="main__chat-list__card--content">
                  <div className="main__chat-list__card--content--text">
                    <strong>Kyoto</strong>
                    <span>10월 14일</span>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ut neque impedit? Pariatur natus delectus aspernatur mollitia soluta architecto tenetur. Cumque omnis doloribus delectus? Exercitationem sed quasi nihil magni odit.
                    </p>
                  </div>
                  <div className="main__chat-list__card--content--btn">
                    <a><img src={travel} />함께 여행하기</a>
                  </div>
                  <p>1 / 5명</p>
                </div>
              </article>
              <article className="main__chat-list__card">
                <div className="main__chat-list__card--header">
                  <div className="main__chat-list__card--header--profile">
                    <img />
                    <strong>Username</strong>
                  </div>
                  <div className="main__chat-list__card--header--like">
                    <img src={like} />
                    <span>2,300</span>
                  </div>
                </div>
                <div className="main__chat-list__card--image">
                  <img />
                </div>
                <div className="main__chat-list__card--content">
                  <div className="main__chat-list__card--content--text">
                    <strong>Kyoto</strong>
                    <span>10월 14일</span>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ut neque impedit? Pariatur natus delectus aspernatur mollitia soluta architecto tenetur. Cumque omnis doloribus delectus? Exercitationem sed quasi nihil magni odit.
                    </p>
                  </div>
                  <div className="main__chat-list__card--content--btn">
                    <a><img src={travel} />함께 여행하기</a>
                  </div>
                  <p>1 / 5명</p>
                </div>
              </article>
              <article className="main__chat-list__card">
                <div className="main__chat-list__card--header">
                  <div className="main__chat-list__card--header--profile">
                    <img />
                    <strong>Username</strong>
                  </div>
                  <div className="main__chat-list__card--header--like">
                    <img src={like} />
                    <span>2,300</span>
                  </div>
                </div>
                <div className="main__chat-list__card--image">
                  <img />
                </div>
                <div className="main__chat-list__card--content">
                  <div className="main__chat-list__card--content--text">
                    <strong>Kyoto</strong>
                    <span>10월 14일</span>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ut neque impedit? Pariatur natus delectus aspernatur mollitia soluta architecto tenetur. Cumque omnis doloribus delectus? Exercitationem sed quasi nihil magni odit.
                    </p>
                  </div>
                  <div className="main__chat-list__card--content--btn">
                    <a><img src={travel} />함께 여행하기</a>
                  </div>
                  <p>1 / 5명</p>
                </div>
              </article>
              <article className="main__chat-list__card">
                <div className="main__chat-list__card--header">
                  <div className="main__chat-list__card--header--profile">
                    <img />
                    <strong>Username</strong>
                  </div>
                  <div className="main__chat-list__card--header--like">
                    <img src={like} />
                    <span>2,300</span>
                  </div>
                </div>
                <div className="main__chat-list__card--image">
                  <img />
                </div>
                <div className="main__chat-list__card--content">
                  <div className="main__chat-list__card--content--text">
                    <strong>Kyoto</strong>
                    <span>10월 14일</span>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ut neque impedit? Pariatur natus delectus aspernatur mollitia soluta architecto tenetur. Cumque omnis doloribus delectus? Exercitationem sed quasi nihil magni odit.
                    </p>
                  </div>
                  <div className="main__chat-list__card--content--btn">
                    <a><img src={travel} />함께 여행하기</a>
                  </div>
                  <p>1 / 5명</p>
                </div>
              </article>
              <article className="main__chat-list__card">
                <div className="main__chat-list__card--header">
                  <div className="main__chat-list__card--header--profile">
                    <img />
                    <strong>Username</strong>
                  </div>
                  <div className="main__chat-list__card--header--like">
                    <img src={like} />
                    <span>2,300</span>
                  </div>
                </div>
                <div className="main__chat-list__card--image">
                  <img />
                </div>
                <div className="main__chat-list__card--content">
                  <div className="main__chat-list__card--content--text">
                    <strong>Kyoto</strong>
                    <span>10월 14일</span>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ut neque impedit? Pariatur natus delectus aspernatur mollitia soluta architecto tenetur. Cumque omnis doloribus delectus? Exercitationem sed quasi nihil magni odit.
                    </p>
                  </div>
                  <div className="main__chat-list__card--content--btn">
                    <a><img src={travel} />함께 여행하기</a>
                  </div>
                  <p>1 / 5명</p>
                </div>
              </article>
              <article className="main__chat-list__card">
                <div className="main__chat-list__card--header">
                  <div className="main__chat-list__card--header--profile">
                    <img />
                    <strong>Username</strong>
                  </div>
                  <div className="main__chat-list__card--header--like">
                    <img src={like} />
                    <span>2,300</span>
                  </div>
                </div>
                <div className="main__chat-list__card--image">
                  <img />
                </div>
                <div className="main__chat-list__card--content">
                  <div className="main__chat-list__card--content--text">
                    <strong>Kyoto</strong>
                    <span>10월 14일</span>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ut neque impedit? Pariatur natus delectus aspernatur mollitia soluta architecto tenetur. Cumque omnis doloribus delectus? Exercitationem sed quasi nihil magni odit.
                    </p>
                  </div>
                  <div className="main__chat-list__card--content--btn">
                    <a><img src={travel} />함께 여행하기</a>
                  </div>
                  <p>1 / 5명</p>
                </div>
              </article>
              <article className="main__chat-list__card">
                <div className="main__chat-list__card--header">
                  <div className="main__chat-list__card--header--profile">
                    <img />
                    <strong>Username</strong>
                  </div>
                  <div className="main__chat-list__card--header--like">
                    <img src={like} />
                    <span>2,300</span>
                  </div>
                </div>
                <div className="main__chat-list__card--image">
                  <img />
                </div>
                <div className="main__chat-list__card--content">
                  <div className="main__chat-list__card--content--text">
                    <strong>Kyoto</strong>
                    <span>10월 14일</span>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ut neque impedit? Pariatur natus delectus aspernatur mollitia soluta architecto tenetur. Cumque omnis doloribus delectus? Exercitationem sed quasi nihil magni odit.
                    </p>
                  </div>
                  <div className="main__chat-list__card--content--btn">
                    <a><img src={travel} />함께 여행하기</a>
                  </div>
                  <p>1 / 5명</p>
                </div>
              </article>
              <article className="main__chat-list__card">
                <div className="main__chat-list__card--header">
                  <div className="main__chat-list__card--header--profile">
                    <img />
                    <strong>Username</strong>
                  </div>
                  <div className="main__chat-list__card--header--like">
                    <img src={like} />
                    <span>2,300</span>
                  </div>
                </div>
                <div className="main__chat-list__card--image">
                  <img />
                </div>
                <div className="main__chat-list__card--content">
                  <div className="main__chat-list__card--content--text">
                    <strong>Kyoto</strong>
                    <span>10월 14일</span>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ut neque impedit? Pariatur natus delectus aspernatur mollitia soluta architecto tenetur. Cumque omnis doloribus delectus? Exercitationem sed quasi nihil magni odit.
                    </p>
                  </div>
                  <div className="main__chat-list__card--content--btn">
                    <a><img src={travel} />함께 여행하기</a>
                  </div>
                  <p>1 / 5명</p>
                </div>
              </article>
              <article className="main__chat-list__card">
                <div className="main__chat-list__card--header">
                  <div className="main__chat-list__card--header--profile">
                    <img />
                    <strong>Username</strong>
                  </div>
                  <div className="main__chat-list__card--header--like">
                    <img src={like} />
                    <span>2,300</span>
                  </div>
                </div>
                <div className="main__chat-list__card--image">
                  <img />
                </div>
                <div className="main__chat-list__card--content">
                  <div className="main__chat-list__card--content--text">
                    <strong>Kyoto</strong>
                    <span>10월 14일</span>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ut neque impedit? Pariatur natus delectus aspernatur mollitia soluta architecto tenetur. Cumque omnis doloribus delectus? Exercitationem sed quasi nihil magni odit.
                    </p>
                  </div>
                  <div className="main__chat-list__card--content--btn">
                    <a><img src={travel} />함께 여행하기</a>
                  </div>
                  <p>1 / 5명</p>
                </div>
              </article>
              <article className="main__chat-list__card">
                <div className="main__chat-list__card--header">
                  <div className="main__chat-list__card--header--profile">
                    <img />
                    <strong>Username</strong>
                  </div>
                  <div className="main__chat-list__card--header--like">
                    <img src={like} />
                    <span>2,300</span>
                  </div>
                </div>
                <div className="main__chat-list__card--image">
                  <img />
                </div>
                <div className="main__chat-list__card--content">
                  <div className="main__chat-list__card--content--text">
                    <strong>Kyoto</strong>
                    <span>10월 14일</span>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ut neque impedit? Pariatur natus delectus aspernatur mollitia soluta architecto tenetur. Cumque omnis doloribus delectus? Exercitationem sed quasi nihil magni odit.
                    </p>
                  </div>
                  <div className="main__chat-list__card--content--btn">
                    <a><img src={travel} />함께 여행하기</a>
                  </div>
                  <p>1 / 5명</p>
                </div>
              </article>
              <article className="main__chat-list__card">
                <div className="main__chat-list__card--header">
                  <div className="main__chat-list__card--header--profile">
                    <img />
                    <strong>Username</strong>
                  </div>
                  <div className="main__chat-list__card--header--like">
                    <img src={like} />
                    <span>2,300</span>
                  </div>
                </div>
                <div className="main__chat-list__card--image">
                  <img />
                </div>
                <div className="main__chat-list__card--content">
                  <div className="main__chat-list__card--content--text">
                    <strong>Kyoto</strong>
                    <span>10월 14일</span>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ut neque impedit? Pariatur natus delectus aspernatur mollitia soluta architecto tenetur. Cumque omnis doloribus delectus? Exercitationem sed quasi nihil magni odit.
                    </p>
                  </div>
                  <div className="main__chat-list__card--content--btn">
                    <a><img src={travel} />함께 여행하기</a>
                  </div>
                  <p>1 / 5명</p>
                </div>
              </article>
              <article className="main__chat-list__card">
                <div className="main__chat-list__card--header">
                  <div className="main__chat-list__card--header--profile">
                    <img />
                    <strong>Username</strong>
                  </div>
                  <div className="main__chat-list__card--header--like">
                    <img src={like} />
                    <span>2,300</span>
                  </div>
                </div>
                <div className="main__chat-list__card--image">
                  <img />
                </div>
                <div className="main__chat-list__card--content">
                  <div className="main__chat-list__card--content--text">
                    <strong>Kyoto</strong>
                    <span>10월 14일</span>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ut neque impedit? Pariatur natus delectus aspernatur mollitia soluta architecto tenetur. Cumque omnis doloribus delectus? Exercitationem sed quasi nihil magni odit.
                    </p>
                  </div>
                  <div className="main__chat-list__card--content--btn">
                    <a><img src={travel} />함께 여행하기</a>
                  </div>
                  <p>1 / 5명</p>
                </div>
              </article>
              <article className="main__chat-list__card">
                <div className="main__chat-list__card--header">
                  <div className="main__chat-list__card--header--profile">
                    <img />
                    <strong>Username</strong>
                  </div>
                  <div className="main__chat-list__card--header--like">
                    <img src={like} />
                    <span>2,300</span>
                  </div>
                </div>
                <div className="main__chat-list__card--image">
                  <img />
                </div>
                <div className="main__chat-list__card--content">
                  <div className="main__chat-list__card--content--text">
                    <strong>Kyoto</strong>
                    <span>10월 14일</span>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ut neque impedit? Pariatur natus delectus aspernatur mollitia soluta architecto tenetur. Cumque omnis doloribus delectus? Exercitationem sed quasi nihil magni odit.
                    </p>
                  </div>
                  <div className="main__chat-list__card--content--btn">
                    <a><img src={travel} />함께 여행하기</a>
                  </div>
                  <p>1 / 5명</p>
                </div>
              </article>
              <article className="main__chat-list__card">
                <div className="main__chat-list__card--header">
                  <div className="main__chat-list__card--header--profile">
                    <img />
                    <strong>Username</strong>
                  </div>
                  <div className="main__chat-list__card--header--like">
                    <img src={like} />
                    <span>2,300</span>
                  </div>
                </div>
                <div className="main__chat-list__card--image">
                  <img />
                </div>
                <div className="main__chat-list__card--content">
                  <div className="main__chat-list__card--content--text">
                    <strong>Kyoto</strong>
                    <span>10월 14일</span>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ut neque impedit? Pariatur natus delectus aspernatur mollitia soluta architecto tenetur. Cumque omnis doloribus delectus? Exercitationem sed quasi nihil magni odit.
                    </p>
                  </div>
                  <div className="main__chat-list__card--content--btn">
                    <a><img src={travel} />함께 여행하기</a>
                  </div>
                  <p>1 / 5명</p>
                </div>
              </article>
            </div>
            {/* main__chat-list__card */}
          </section>
          {/* main__chat-list */}
        </main>
        {/* main */}

        <footer className="footer">
          <h5>&#169; Beagle, Inc</h5>
        </footer>
      </section>
    );
  }
}