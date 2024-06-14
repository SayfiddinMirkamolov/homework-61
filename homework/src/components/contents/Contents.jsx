import "./Contents.scss";

function Contents() {
  return (
    <section className="Contents">
      <div className="container">
        <div className="Contents-content">
          <div className="title">
            <h1>Contents Strategies</h1>
            <p>
              We focus on ergonomics and meeting you where you work. Its only a
              keystroke away.
            </p>
          </div>
          <div className="cards">
            <div className="card">
              <img src="../src/assets/images/card-img.png" alt="" />
              <div className="card-texts">
                <p>
                  By <b>Wahid Ari |</b> 03 March 2019
                </p>
                <h3>Increasing Prosperity With Positive Thinking</h3>
              </div>
            </div>
            <div className="card">
              <img src="../src/assets/images/card-img-2.png" alt="" />
              <div className="card-texts">
                <p>
                  By <b>Wahid Ari |</b> 03 March 2019
                </p>
                <h3>Increasing Prosperity With Positive Thinking</h3>
              </div>
            </div>
            <div className="card">
              <img src="../src/assets/images/card-img-3.png" alt="" />
              <div className="card-texts">
                <p>
                  By <b>Wahid Ari |</b> 03 March 2019
                </p>
                <h3>Increasing Prosperity With Positive Thinking</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contents;
