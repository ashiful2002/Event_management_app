import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import useAxiosToken from "../../Hooks/useAxiosToken";
import Title from "../../Components/Title/Title";

const MyJoinedEvents = () => {
  const { user } = useContext(AuthContext);
  const [joinedEvents, setJoinedEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const accessToken = user.accessToken;

  useEffect(() => {
    if (user?.email) {
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
  // this connti shoud be done before 
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
  <Title title="Joined Events" />

  <h2 className="text-3xl font-bold mb-6">My Joined Events</h2>

  {joinedEvents.length === 0 ? (
    <p>You haven't joined any events yet.</p>
  ) : (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Location</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {joinedEvents.map((event, index) => (
            <tr key={event._id}>
              <th>{index + 1}</th>
              <td>
                <img
                  src={event.thumbnail}
                  alt={event.title}
                  className="w-16 h-12 object-cover rounded"
                />
              </td>
              <td className="font-medium">{event.title}</td>
              <td>{event.location}</td>
              <td>
                {new Date(event.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>

  );
};

export default MyJoinedEvents;
