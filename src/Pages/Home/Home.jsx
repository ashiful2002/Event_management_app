import React from "react";
import Banner from "./Sections/Banner";
import Feature from "./Sections/Feature";
import Gallery from "./Sections/Gallery";
import NewsLetter from "./Sections/NewsLetter";
import { useLoaderData } from "react-router";
import { Helmet } from "react-helmet";

const Home = () => {
  const events = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Home | Event management</title>
      </Helmet>
      <Banner />
      <Feature />
      <Gallery events={events} />
      <NewsLetter />
    </div>
  );
};

export default Home;
