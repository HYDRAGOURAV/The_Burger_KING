import { useState } from "react";
import "./App.css";
import ParticleBackground from "./components/Particle";
import { toast } from "react-toastify";
// import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
// image
import Burger from "../public/image/Screenshot_2024-05-24_162304-removebg-preview.png";
import Burger_2 from "../public/image/Screenshot_2024-05-25_175414-removebg-preview.png";
import Card_1 from "../public/image/Card_1.png";
import Card_2 from "../public/image/Card_2.png";
import Card_3 from "../public/image/Card_3.png";
import Card_4 from "../public/image/kfc2-removebg-preview.png";
import Card_5 from "../public/image/images (1).png";
// four card
import Card__1 from "../public/image/Card__1.png";
import Star from "../public/image/star.png";
import Card__2 from "../public/image/Fish.png";
import Card__3 from "../public/image/vbeg-removebg-preview.png";
import Combo from "../public/image//backkk-removebg-preview.png";
import Combo_2 from "../public/image//images__3_-removebg-preview (2).png";
//  chef Image
import chef_1 from "../public/image/chef1.jpg";
import chef_2 from "../public/image/chef2.jpg";
import chef_3 from "../public/image/chef3.jpg";
import chef_4 from "../public/image/chef4.jpg";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);
  const onHandleClick = () => {
    setCount((count) => count + 1);
    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 3000)
    );
    toast.promise(resolveAfter3Sec, {
      pending: "Promise is pending",
      success: "Promise resolved 👌",
      error: "Promise rejected 🤯",
    });
  };
  return (
    <>
    <Navbar/>
      <ParticleBackground />
      <section className="One">
        <div className="one_container_box" id="one_container_box1">
          <div>
            <h1>Bite into Flavorful Delights</h1> <br />
            <p>Sover the Goods Cifted within
           find someone who looks at you like she’s looking at this burger</p>
           <br />
           <br />
           <button class="button-75" role="button"><span class="text">See More </span></button>
          </div>
        </div>
        <div className="one_container_box" id="one_container_box2">
          <img src={Burger} alt="" />
        </div>
      </section>
      {/* section two  */}
      <section className="Two">
        <div className="second_section_box"  data-aos="zoom-in-up"  data-aos-duration="200" >
          <img src={Card_1} alt="" />
        </div>
        <div className="second_section_box"  data-aos="zoom-in-up" data-aos-duration="400">
          <img src={Card_2} alt="" />
        </div>
        <div className="second_section_box"  data-aos="zoom-in-up" data-aos-duration="600">
          <img src={Card_3} alt="" />
        </div>
        <div className="second_section_box"  data-aos="zoom-in-up" data-aos-duration="800">
          <img src={Card_4} alt="" />
        </div>
        <div className="second_section_box"  data-aos="zoom-in-up" data-aos-duration="1000">
          <img src={Card_5} alt="" />
        </div>
      </section>
      {/* Third section */}
      <section className="Three">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="Third_section_box"
          id="Third_section_box1"
        >
          <img src={Burger_2} alt="" />
        </div>
        <div className="Third_section_box" id="Third_section_box2">
          <h1>"Cheese it up! This burger is 'grate'!"</h1>
          <p>Burgers are an invitation to indulge in a moment of pure gastronomic delight.
          Burgers are an ode to the joy of simplicity and uncompromising flavor.
          in a world of culinary wonders, the burger stands tall as a timeless favorite.
          </p>
          <button class="button-89" role="button">See More</button>
        </div>
      </section>
      {/* section 4 */}

      <section className="Four">
        <div className="four_section_box" id="four_section_box1">
          <h1>Our Menu</h1>
        </div>
        <div className="Four_Flex">
          <div
            className="Four_container_box"
            data-aos="zoom-out"
            id="Four_container_box1"
          >
            <div className="Card_inside">
              <img src={Card__1} alt="" />
              <h3>
                Chicken Burger <br /> 2.5$
              </h3>
              <img id="star" src={Star} alt="" />
              <button class="button-33" role="button">
                add To Cart
              </button>
            </div>
          </div>
          <div
            className="Four_container_box"
            data-aos="zoom-out"
            id="Four_container_box2"
          >
            <div className="Card_inside">
              <img src={Card__2} alt="" />
              <h3>
                Fish Burger <br /> 3.5$
              </h3>
              <img id="star" src={Star} alt="" />
              <button class="button-33" role="button">
                add To Cart
              </button>
            </div>
          </div>
          <div
            className="Four_container_box"
            data-aos="zoom-out"
            id="Four_container_box3">
            <div className="Card_inside">
              <img src={Card__3} alt="" />
              <h3>
                Veg Burger <br /> 3.5$
              </h3>
              <img id="star" src={Star} alt="" />
              <button class="button-33" role="button">
                add To Cart
              </button>
            </div>
          </div>
          <div
            className="Four_container_box"
            data-aos="zoom-out"
            id="Four_container_box4"
          >
            {" "}
            <div className="Card_inside">
              <img src={Card__3} alt="" />
              <h3>
                Veg Burger <br /> 3.5$
              </h3>
              <img id="star" src={Star} alt="" />
              <button class="button-33" role="button">
                add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="Five">
        <br />
        <div className="fiveHeading">
          <h1>Our Menu</h1>
        </div>
        <div className="Five_container">
          <div
            className="Five_container_box"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            id="Five_container_box1"
          >
            <div className="F_box" id="F_box1">
              <img src={Combo} alt="" />
            </div>
            <div className="F_box" id="F_box2">
              <h1>
                Double cheese zinger Burger <br />
                35.6$
              </h1>
              <img src={Star} alt="" />
              <button class="button-33" role="button">
                Add to Cart
              </button>
            </div>
          </div>
          <div
            className="Five_container_box"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            id="Five_container_box2"
          >
            <div className="F_box" id="F_box1">
              <img src={Combo_2} alt="" />
            </div>
            <div className="F_box" id="F_box2">
              <h1>
                Double cheese zinger Burger <br />
                35.6$
              </h1>
              <img src={Star} alt="" />
              <button class="button-33" role="button">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <br />
      {/*  chef section */}
      <section className="chef_section">
        <h1>Our Best Chef</h1>
        <div className="container_chef">
          <div
            className="chef_box"
            id="chef_box1"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={chef_1} alt="" />
            <h1>Gordon Ramsay</h1>
          </div>
          <div
            className="chef_box"
            id="chef_box2"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <img src={chef_2} alt="" />
            <h1>Jamie Oliver</h1>
          </div>
          <div
            className="chef_box"
            id="chef_box3"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img src={chef_3} alt="" />
            <h1>Corey Lee</h1>
          </div>
          <div
            className="chef_box"
            id="chef_box4"
            data-aos="fade-up"
            data-aos-duration="4000"
          >
            <img src={chef_4} alt="" />
            <h1>Anne-Sophie </h1>
          </div>
        </div>
      </section>
      {/* slider section */}
      <Footer/>
    </>
  );
}
AOS.init();
export default App;
