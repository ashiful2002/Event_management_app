import React from "react";

const HomePageSections = () => {
  return (
    <div className="bg-gray-">
      {/* 🖼️ Banner Section */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2013/10/25/17/26/tree-200795_1280.jpg')",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">
              Take a Step Today for Better World.
            </h1>
            <p className="mb-5">
              SODEV – (SOcial DEVelopment) is a social development organization
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageSections;
