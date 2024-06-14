import "./Price.scss";

function Price() {
  return (
    <section className="Price">
      <div className="container">
        <div className="Price-content">
          <div className="title">
            <h1>Price Table</h1>
            <p>We offer competitive price</p>
          </div>
          <div className="price-cards">
            <div className="card">
              <div className="card-texts">
                <h2>Free</h2>
                <p>Brief price description</p>
                <div className="narx">
                  <h1>0</h1>
                  <div className="pul">
                    <h2>$</h2>
                    <p>Per / month</p>
                  </div>
                </div>
                <p>Only 2 Operators</p>
                <p>Notifications</p>
                <p>Landing Pages</p>
                <button>Order Now</button>
              </div>
            </div>

            <div className="card">
              <div className="card-texts">
                <h2>Standard</h2>
                <p>Brief price description</p>
                <div className="narx">
                  <h1>5</h1>
                  <div className="pul">
                    <h2>$</h2>
                    <p>Per / month</p>
                  </div>
                </div>
                <p>5+ Operators</p>
                <p>Notifications</p>
                <p>Landing Pages</p>
                <button>Order Now</button>
              </div>
            </div>

            <div className="card">
              <div className="card-texts">
                <h2>Premium</h2>
                <p>Brief price description</p>
                <div className="narx">
                  <h1>10</h1>
                  <div className="pul">
                    <h2>$</h2>
                    <p>Per / month</p>
                  </div>
                </div>
                <p>10+ Operators</p>
                <p>Notifications</p>
                <p>Landing Pages</p>
                <button>Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Price;
