import "./Clients.scss";

function Clients() {
  return (
    <section className="Clients">
      <div className="container">
        <div className="Clients-content">
          <div className="title">
            <h1>What Clients Say</h1>
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="cards">
            <div className="card">
              <div className="card-texts">
                <img src="../src/assets/images/stars.png" alt="stars" />
                <p>
                  Product helps you see how many more days you need to work to
                  reach your financial goal.
                </p>
                <div className="user">
                  <img src="../src/assets/images/user-1.png" alt="user" />
                  <div className="user-text">
                    <h4>Wahid Ari</h4>
                    <p>Designer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-texts">
                <img src="../src/assets/images/stars.png" alt="stars" />
                <p>
                  Product helps you see how many more days you need to work to
                  reach your financial goal.
                </p>
                <div className="user">
                  <img src="../src/assets/images/user-2.png" alt="user" />
                  <div className="user-text">
                    <h4>Wahid Ari</h4>
                    <p>Designer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-texts">
                <img src="../src/assets/images/stars.png" alt="stars" />
                <p>
                  Product helps you see how many more days you need to work to
                  reach your financial goal.
                </p>
                <div className="user">
                  <img src="../src/assets/images/user-3.png" alt="user" />
                  <div className="user-text">
                    <h4>Wahid Ari</h4>
                    <p>Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
