import React from "react";

const NewsLetter = () => {
  return (
    <div>
      {/*  Newsletter Section */}
      <section className="py-16 bg-violet-600 text-white text-center mb-5 sm:rounded">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="mb-6">
            Be the first to know about new events and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full sm:w-80 text-black"
            />
            <button className="btn bg-amber-500 text-white border-none">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;
