import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-texts">
            <h1>Work at the speed of thought</h1>
            <p>
              Tools, tutorials, design and innovation experts, all in one place!
              The most intuitive way to imagine your next user experience.
            </p>
            <div className="hero-btns">
              <button>Get started</button>
              <a href="#">
                <svg
                  width="17"
                  height="19"
                  viewBox="0 0 17 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.6904 8.52607C16.4396 8.95923 16.4396 10.0408 15.6904 10.4739L1.76695 18.524C1.01695 18.9576 0.0788498 18.4164 0.0788498 17.5501V1.44993C0.0788498 0.583602 1.01695 0.0423758 1.76695 0.476L15.6904 8.52607Z"
                    fill="#02897A"
                  />
                </svg>
                Watch the Video
              </a>
            </div>
          </div>
          <div className="hero-img">
            <img src="../src/assets/images/amico.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
