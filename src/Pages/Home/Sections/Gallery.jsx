import React from "react";
import { GalleryData as events } from "./GalleryData";

const Gallery = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className=" mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">
          Event Gallery
        </h2>

        {/* Event Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden"
            >
              {/* Image */}
              <figure className="h-48 w-full overflow-hidden">
                <img
                  src={event.thumbnail}
                  alt={event.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </figure>

              {/* Card Content */}
              <div className="card-body p-4">
                <h3 className="card-title text-lg font-semibold line-clamp-1">
                  {event.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-300 text-sm mb-2 line-clamp-2">
                  {event.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="badge badge-primary badge-outline">
                    {event.eventType}
                  </span>
                  <span className="badge badge-ghost">{event.location}</span>
                </div>

                {/* Date */}
                <p className="text-gray-600 dark:text-gray-300 text-xs mt-2">
                  📅{" "}
                  {new Date(event.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
