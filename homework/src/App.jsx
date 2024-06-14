import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Product from "./components/product/Product";
import Contents from "./components/contents/Contents";
import Price from "./components/price/Price";
import Clients from "./components/clients/Clients";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Product />
      <Contents />
      <Price />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
