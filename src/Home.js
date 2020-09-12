import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTc0Y2M5Y2Mt/MTc0Y2M5Y2Mt-ZTMzMTk5Yjct-w3000._CB406837549_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Pro React 16: : Build Powerful and Dynamic Web Apps."
            price={39.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41W9YdrRslL._SX348_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="React Projects: Build 12 real-world applications from scratch using React, React Native, and React 360"
            price={34.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51b4zK+t8HL._SX404_BO1,204,203,200_.jpg"
          />
        </div>
     
        <div className="home__row">
          <Product
            id="4903850"
            title="Advanced TypeScript Programming Projects: Build 9 different apps with TypeScript 3 and JavaScript frameworks such as Angular, React, and Vue"
            price={39.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41cZhne+jpL._SX404_BO1,204,203,200_.jpg"
          />
          <Product
            id="23445930"
            title="ASP.NET Core 3 and Angular 9: Full stack web development with .NET Core 3.1 and Angular 9, 3rd Edition"
            price={29.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/5138lNk2FgL.jpg"
          />
          <Product
            id="3254354345"
            title="Introduction to Algorithms, 3rd Edition (The MIT Press) 3rd Edition"
            price={79.89}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41T0iBxY8FL._SX440_BO1,204,203,200_.jpg"
          />
        </div>



        <div className="home__row">
          <Product
            id="90829332"
            title="Hands-On Microservices with Node.js: Build, test, and deploy robust microservices in JavaScript"
            price={44.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/518o3Lyq0KL._SX404_BO1,204,203,200_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
