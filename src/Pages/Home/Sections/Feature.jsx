import React from "react";

const Feature = () => {
  return (
    <div>
      {/*  Feature Section */}
      <section className="py-16 bg-base-100 text-center">
        <h2 className="text-3xl font-bold mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          <div className="card bg-base-200 shadow-lg p-6">
            <h3 className="text-xl font-semibold">Create Events</h3>
            <p className="mt-2">
              Plan public or private events effortlessly with custom options.
            </p>
          </div>
          <div className="card bg-base-200 shadow-lg p-6">
            <h3 className="text-xl font-semibold">Manage Events</h3>
            <p className="mt-2">
              Track RSVPs, edit schedules, and keep everything organized.
            </p>
          </div>
          <div className="card bg-base-200 shadow-lg p-6">
            <h3 className="text-xl font-semibold">Join Events</h3>
            <p className="mt-2">
              Browse and participate in trending events with one click.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
