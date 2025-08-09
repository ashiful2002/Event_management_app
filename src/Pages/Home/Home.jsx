import React from "react";
import Banner from "./Sections/Banner";
import Feature from "./Sections/Feature";
import Gallery from "./Sections/Gallery";
import NewsLetter from "./Sections/NewsLetter";
import { useLoaderData } from "react-router";
import Title from "../../Components/Title/Title";
import Slider from "./Sections/Slider/Slider";

const Home = () => {
  const events = useLoaderData();

  return (
    <div className="">
      <Title title="Home" />
      <Slider />
      <Feature />
      <Gallery events={events} />
      <NewsLetter />
    </div>
  );
};

export default Home;
