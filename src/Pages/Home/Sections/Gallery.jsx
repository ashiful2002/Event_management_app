import React from "react";
import { Link } from "react-router";

const Gallery = ({ events }) => {
  return (
    <>
      {/* 🖼️ Gallery Section */}
      <section className="py-16 bg-base-200">
        <h2 className="text-3xl font-bold mb-10 text-center">Event Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-4">
          {events.map((event, index) => (
            <div key={index} className="card bg-base-100  shadow-sm">
              <figure className="h-64 object-cover">
                <img src={event.thumbnail} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body ">
                <h2 className="card-title">{event.title}</h2>
                <h2>
                  Type:
                  <span className="badge badge-dash">{event.eventType}</span>
                </h2>
                <h2>
                  Location:
                  <span className="badge badge-dash">{event.location}</span>
                </h2>
                <p className="text-gray-600">
                  Date:{" "}
                  {new Date(event.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <p>{event.description}</p>

                <div className="card-actions justify-end">
                  <Link >
                    <button className="btn btn-primary btn-sm">
                      View event
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
