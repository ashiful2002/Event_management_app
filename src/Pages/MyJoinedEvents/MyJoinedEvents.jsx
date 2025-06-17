import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import useAxiosToken from "../../Hooks/useAxiosToken";
import Title from "../../Components/Title/Title";

const MyJoinedEvents = () => {
  const axiosSecure = useAxiosToken();
  const { user } = useContext(AuthContext);
  const [joinedEvents, setJoinedEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const accessToken = user.accessToken;

  useEffect(() => {
    if (user?.email) {
      // axios
      //   .get(`https://event-management-server-five.vercel.app/joined-events/${user.email}`, {
      //     headers: {
      //       authorization: `Bearer ${accessToken}`,
      //     },
      //   })
      fetch(`https://event-management-server-five.vercel.app/joined-events/${user.email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch joined events");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          const sortedEvents = data.sort(
            (a, b) => new Date(a.date) - new Date(b.date)
          );
          setJoinedEvents(sortedEvents);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) {
    return <p className="text-center mt-10">Loading your joined events...</p>;
  }
  // console.log("Toen in the context", user.accessToken);

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
            <Title title="Joined Events" />

      <h2 className="text-3xl font-bold mb-6">My Joined Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {joinedEvents.length === 0 ? (
          <p>You haven't joined any events yet.</p>
        ) : (
          joinedEvents.map((event) => (
            <div
              key={event._id}
              className="p-4 border rounded-lg shadow-md bg-white"
            >
              <img
                src={event.thumbnail}
                alt={event.title}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-xl font-semibold mt-2">{event.title}</h3>
              <p className="text-gray-600">{event.location}</p>
              <p className="text-gray-500 text-sm">
                {new Date(event.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyJoinedEvents;
