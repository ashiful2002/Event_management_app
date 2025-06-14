import React from "react";
import { Link, useLoaderData } from "react-router";

const ManageEvents = () => {
  const events = useLoaderData();
  console.log(events);

  return (
    <div>
      {
        <section className="py-12 bg-base-200 min-h-screen">
          <h2 className="text-3xl font-bold text-center mb-8">Manage Events</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
            {events.map((event) => (
              <div key={event._id} className="card bg-white shadow-xl">
                <figure>
                  <img
                    src={event.thumbnail}
                    alt={event.title}
                    className="h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <p className="text-gray-600">📍 {event.location}</p>
                  <p className="text-gray-500">🗂 {event.eventType}</p>
                  <p className="text-gray-700">
                    📅{" "}
                    {new Date(event.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>

                  <div>
                    <button className="btn btn-warning">edit events</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      }
    </div>
  );
};

export default ManageEvents;
