import React from "react";
import { Link } from "react-router";
import { GalleryData as events } from "./GalleryData";
const Gallery = () => {
  return (
    <>
      {/* 🖼️ Gallery Section */}
      <section className="py-16 bg-base-200">
        <h2 className="text-3xl font-bold mb-10 text-center">Event Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-4">
          {events.map((event, index) => (
            <div key={index} className="card bg-base-100  shadow-sm">
              <figure className="w-64 h-48 overflow-hidden mx-auto">
                <img
                  src={event.thumbnail}
                  alt={event.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </figure>
              <div className="card-body ">
                <h2 className="card-title">{event.title}</h2>
                <p className="text-gray-500 -mb-4">{event.description}</p>
                <h2>
                  Type:
                  <span className="badge badge-dash badge-sm">
                    {event.eventType}
                  </span>
                </h2>
                <h2>
                  Location:
                  <span className="badge badge-sm border-gray-600 ml-1">
                    {event.location}
                  </span>
                </h2>
                <p className="text-gray-600">
                  Date:{" "}
                  {new Date(event.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>

                <div className="card-actions justify-end">
                  {/* <Link >
                    <button className="btn btn-primary btn-sm">
                      View event
                    </button>
                  </Link> */}
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
