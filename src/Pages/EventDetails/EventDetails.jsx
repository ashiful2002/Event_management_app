import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Title from "../../Components/Title/Title";

const EventDetails = () => {
  const event = useLoaderData();
  const { user } = useContext(AuthContext);
  const [isJoined, setIsJoined] = useState(false);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `http://localhost:3000/joined-events/${event._id}?email=${user?.email}`
        )
        .then((res) => {
          setIsJoined(res.data.joined);
        });
    }
  }, [user, event._id]);

  const handleJoin = () => {
    if (!user) {
      toast("PLease sign in to join the event");
      return;
    }
    const joinedData = {
      ...event,
      eventId: event._id,
      userEmail: user?.email,
      joinedAt: new Date().toISOString(),
    };

    axios
      .patch("http://localhost:3000/joined-events", joinedData)
      .then((res) => {
        if (res.data.insertedId || res.data.success) {
          toast.success("You have joined the event");
          setIsJoined(true);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error("Failed to join ");
      });
  };
  return (
    <div>
     <Title title={'Event Details'}/>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
        <img
          src={event.thumbnail}
          alt={event.title}
          className="w-full h-60 object-cover rounded-lg"
        />
        <h2 className="text-3xl font-bold capitalize my-4">{event.title}</h2>
        <p className="text-gray-600 mb-2 px-3 first-letter:uppercase">{event.description}</p>
        <p className="text-gray-700 mb-2">📍 Location: {event.location}</p>
        <p className="text-gray-700 mb-2">🗂 Type: {event.eventType}</p>
        <p className="text-gray-700 mb-2">
          📅 Date:{" "}
          {new Date(event.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        {isJoined ? (
          <button disabled className="btn btn-primary">
            Already joined
          </button>
        ) : (
          <button onClick={handleJoin} className="btn btn-primary">
            Join Event
          </button>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default EventDetails;
