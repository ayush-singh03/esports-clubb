import { useState } from "react";
import "./App.css";

const games = [
  {
    number: "01",
    name: "BGMI",
    type: "BATTLE ROYALE",
    players: "4 PLAYERS",
    image: "/src/assets/bgmi.jpg",
  },
  {
    number: "02",
    name: "VALORANT",
    type: "TACTICAL FPS",
    players: "5 PLAYERS",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=85",
  },
  {
    number: "03",
    name: "CALL OF DUTY",
    type: "FPS • ACTION",
    players: "5 PLAYERS",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1600&q=85",
  },
  {
    number: "04",
    name: "EA FC",
    type: "SPORTS • FOOTBALL",
    players: "1V1",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1600&q=85",
  },
];

const events = [
  {
    number: "01",
    type: "UPCOMING TOURNAMENT",
    title: "MUJ ESPORTS CHAMPIONSHIP",
    description: "BGMI • VALORANT",
    image:
      "https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    type: "COMMUNITY EVENT",
    title: "GAMING NIGHTS",
    description: "ALL GAMES FOR MUJ PLAYERS",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    type: "OPEN FOR ALL",
    title: "INTER-COLLEGE BATTLES",
    description: "COMPETE • REPRESENT MUJ",
    image:
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=85",
  },
];

const teams = [
  {
    number: "01",
    type: "BATTLE ROYALE",
    name: "BGMI",
    players: "4 PLAYERS",
    image: "/src/assets/bgmi.jpg",
  },
  {
    number: "02",
    type: "TACTICAL FPS",
    name: "VALORANT",
    players: "5 PLAYERS",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=85",
  },
  {
    number: "03",
    type: "FPS • ACTION",
    name: "CALL OF DUTY",
    players: "5 PLAYERS",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1600&q=85",
  },
];

function App() {
  const [showJoin, setShowJoin] = useState(false);

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <a href="#home" className="logo">
          <span>ES</span>

          <div>
            <strong>ESPORTS</strong>
            <small>CLUB</small>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#home">HOME</a>
          <a href="#games">GAMES</a>
          <a href="#events">EVENTS</a>
          <a href="#teams">TEAMS</a>
        </nav>

        <button
          className="join-btn"
          onClick={() => setShowJoin(true)}
        >
          JOIN THE CLUB
        </button>

      </header>


      {/* ================= HERO ================= */}

      <main>

        <section className="hero" id="home">

          <div className="hero-content">

            <p className="eyebrow">
              MANIPAL UNIVERSITY JAIPUR
            </p>

            <h1>
              PLAY.
              <br />
              COMPETE.
              <br />
              <span>CONQUER.</span>
            </h1>

            <p className="hero-description">
              The official esports community of Manipal
              University Jaipur. Built for players.
              Driven by competition.
            </p>

            <div className="hero-buttons">
              <a href="#games" className="primary-btn">
                EXPLORE GAMES →
              </a>

              <a href="#events" className="secondary-btn">
                VIEW EVENTS
              </a>
            </div>

          </div>

          <div className="hero-image"></div>

          <div className="hero-index">
            01 / ESPORTS
          </div>

        </section>


        {/* ================= TICKER ================= */}

        <div className="ticker">
          <div className="ticker-track">
            MUJ ESPORTS CLUB • PLAY HARD. STAY HUMBLE. WIN TOGETHER. •
            MUJ ESPORTS CLUB • PLAY HARD. STAY HUMBLE. WIN TOGETHER. •
          </div>
        </div>


        {/* ================= GAMES ================= */}

        <section className="games-section" id="games">

          <div className="section-heading">

            <div>
              <p>01 / GAMES</p>

              <h2>
                CHOOSE
                <br />
                YOUR <span>GAME.</span>
              </h2>
            </div>

            <p className="section-copy">
              Pick your battlefield. Build your squad.
              Represent MUJ across the biggest competitive
              games.
            </p>

          </div>


          <div className="games-list">

            {games.map((game) => (
              <article className="game-card" key={game.number}>

                <div
                  className="game-bg"
                  style={{
                    backgroundImage: `url("${game.image}")`,
                  }}
                />

                <div className="game-overlay"></div>

                <span className="game-number">
                  {game.number}
                </span>

                <div className="game-info">

                  <p>{game.type}</p>

                  <h3>{game.name}</h3>

                  <span>{game.players}</span>

                </div>

                <div className="game-arrow">
                  →
                </div>

              </article>
            ))}

          </div>

        </section>


        {/* ================= EVENTS ================= */}

        <section className="events-section" id="events">

          <div className="section-heading events-heading">

            <div>
              <p>02 / EVENTS</p>

              <h2>
                BUILT FOR
                <br />
                <span>COMPETITION.</span>
              </h2>
            </div>

            <div className="events-intro">
              <p>MUJ ESPORTS</p>

              <span>
                Tournaments. Community battles.
                One arena. Endless competition.
              </span>
            </div>

          </div>


          <div className="event-grid">

            {events.map((event) => (
              <article
                className="event-card"
                key={event.number}
              >

                <div
                  className="event-image"
                  style={{
                    backgroundImage: `url("${event.image}")`,
                  }}
                />

                <div className="event-overlay"></div>

                <span className="event-number">
                  {event.number}
                </span>

                <div className="event-content">

                  <p>{event.type}</p>

                  <h3>{event.title}</h3>

                  <span>{event.description}</span>

                </div>

                <div className="event-arrow">
                  ↗
                </div>

              </article>
            ))}

          </div>


          <div className="events-bottom">
            <span>03 EVENTS</span>
            <strong>
              MORE COMPETITION. MORE GLORY.
            </strong>
          </div>

        </section>


        {/* ================= TEAMS ================= */}

        <section className="teams-section" id="teams">

          <div className="section-heading">

            <div>
              <p>03 / TEAMS</p>

              <h2>
                MEET THE
                <br />
                <span>SQUADS.</span>
              </h2>
            </div>

            <p className="section-copy">
              The players behind the competition.
              Find your squad. Represent MUJ.
            </p>

          </div>


          <div className="team-list">

            {teams.map((team) => (
              <article
                className="team-row"
                key={team.number}
              >

                <div
                  className="team-bg"
                  style={{
                    backgroundImage: `url("${team.image}")`,
                  }}
                />

                <div className="team-overlay"></div>

                <span className="team-number">
                  {team.number}
                </span>

                <div className="team-title">

                  <small>{team.type}</small>

                  <h3>{team.name}</h3>

                </div>

                <p>{team.players}</p>

                <b>↗</b>

              </article>
            ))}

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="site-footer">

        <div className="footer-main">

          <div className="footer-brand">

            <p className="footer-kicker">
              MANIPAL UNIVERSITY JAIPUR
            </p>

            <h2>
              PLAY.
              <br />
              COMPETE.
              <br />
              <span>CONQUER.</span>
            </h2>

          </div>


          <div className="footer-side">

            <p className="footer-label">
              MUJ ESPORTS CLUB
            </p>

            <p className="footer-description">
              The official esports community of
              Manipal University Jaipur. Built for
              players. Driven by competition.
            </p>

            <a href="#home" className="footer-back">
              BACK TO TOP
              <span>↑</span>
            </a>

          </div>

        </div>


        <div className="footer-bottom">

          <div>
            <strong>ESPORTS CLUB</strong>
            <span> • MUJ</span>
          </div>

          <p>
            PLAY HARD. STAY HUMBLE. WIN TOGETHER.
          </p>

          <span>
            © 2026 MUJ ESPORTS
          </span>

        </div>

      </footer>


      {/* ================= JOIN CLUB POPUP ================= */}

      {showJoin && (

        <div
          className="join-overlay"
          onClick={() => setShowJoin(false)}
        >

          <div
            className="join-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="join-close"
              onClick={() => setShowJoin(false)}
            >
              ×
            </button>

            <p className="join-kicker">
              MUJ ESPORTS CLUB
            </p>

            <h2>
              JOIN THE <span>CLUB.</span>
            </h2>

            <p className="join-text">
              Represent MUJ. Compete together.
              Build your squad.
            </p>


            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Registration submitted!");
                setShowJoin(false);
              }}
            >

              <input
                type="text"
                placeholder="YOUR NAME"
                required
              />

              <input
                type="email"
                placeholder="YOUR EMAIL"
                required
              />

              <select
                required
                defaultValue=""
              >
                <option value="" disabled>
                  SELECT GAME
                </option>

                <option value="BGMI">
                  BGMI
                </option>

                <option value="VALORANT">
                  VALORANT
                </option>

                <option value="CALL OF DUTY">
                  CALL OF DUTY
                </option>

                <option value="EA FC">
                  EA FC
                </option>

              </select>


              <button
                type="submit"
                className="join-submit"
              >
                JOIN NOW →
              </button>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;