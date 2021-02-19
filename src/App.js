import React from "react";
import "./index.css";

import Navbar from "./components/navbar/navbar";
import Cart from "./components/cart/cart";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import Privacy from "./components/privacy/privacy";
import FAQ from "./components/FAQ/faq";
import Contact from "./components/contact/contact";

import { BrowserRouter, Route, Switch } from "react-router-dom";
// import ProductView from "./components/product_view/product_view";




const App = () => {
  return (
    <div className="App font-serif select-none">


      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Cart} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={FAQ} />
          <Route path="/privacy" component={Privacy} />
          {/* <Route path="/product" component={ProductView} /> */}
        </Switch>
        <Footer />
      </BrowserRouter>



    </div>
  );
}


export default App;


{/* <Cart /> */ }
{/* <About /> */ }
{/* <Privacy /> */ }
{/* <FAQ /> */ }
{/* <Contact /> */ }
