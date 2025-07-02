import React from "react";
import Banner from "./Sections/Banner";
import Feature from "./Sections/Feature";
import Gallery from "./Sections/Gallery";
import NewsLetter from "./Sections/NewsLetter";
import { useLoaderData } from "react-router";
import { Helmet } from "react-helmet";
import Title from "../../Components/Title/Title";

const Home = () => {
  const events = useLoaderData();

  return (
    <div className="">
      <Title title="Home" />
      <Banner />
      <Feature />
      <Gallery events={events} />
      <NewsLetter />
    </div>
  );
};

export default Home;
