
import Navbars from "./components/navbar/page";

import Counter from "./components/time/page";
import SideBar from "./components/sidebar/page";
import Product from "./components/product/page";
import Toyes from "./components/toys/page";
import Elctron from "./components/elctron/page";
import Footer from "./components/footer/Footer";
export default function Home() {


  
return (
  <div className="container">

<Navbars/>

<SideBar/>

<p className="m-10"></p>
<Counter/>
<p className="m-10"></p>

<Product/>
<p className="m-10"></p>
<Toyes/>
<p className="m-10"></p>
<Elctron/>
<Footer/>
</div>


  );
}
