import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/events").then((res) => {
      const today = new Date();
      const filteredDate = res.data.filter(
        (event) => new Date(event.date) > today
      );
      setEvents(filteredDate);
    });
  }, []);
  return (
    <>
      <section className="py-12 bg-base-200 min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>

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
                <Link
                  to={`/event-details/${event._id}`}
                  className="btn btn-primary btn-sm mt-3"
                >
                  View Event
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default UpcomingEvents;
