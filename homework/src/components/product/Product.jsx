import "./Product.scss";

function Product() {
  return (
    <section className="Product">
      <div className="container">
        <div className="Product-content">
          <div className="title">
            <h1>Product was Built Specifically for You</h1>
          </div>
          <div className="cards">
            <div className="card">
              <img src="../src/assets/images/card-icon-1.svg" alt="" />
              <h2>First click tests</h2>
              <p>While most people enjoy casino gambling,</p>
            </div>
            <div className="card">
              <img src="../src/assets/images/card-icon-2.svg" alt="" />
              <h2>Design surveys</h2>
              <p>Sports betting, lottery and bingo playing for the fun</p>
            </div>
            <div className="card">
              <img src="../src/assets/images/card-icon-3.svg" alt="" />
              <h2>Preference tests</h2>
              <p>The Myspace page defines the individual.</p>
            </div>
            <div className="card">
              <img src="../src/assets/images/card-icon-4.svg" alt="" />
              <h2>Five second tests</h2>
              <p>
                Personal choices and the overall personality of the person.{" "}
              </p>
            </div>
          </div>
          <button>SIGN UP NOW</button>
        </div>
      </div>
    </section>
  );
}

export default Product;
