import React, { useContext, useReducer, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const ManageEvents = () => {
  const events = useLoaderData();
  const { user } = useContext(AuthContext);

  const usersEvents = events.filter((event) => event.createdBy === user.email);
  const handleDeleteEvent = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:3000/events/${id}`).then((res) => {
            if (res.data.deleteCount > 0) {
              // setStateEvent((prevEvents) =>
              //   prevEvents.filter((e) => e._id !== id)
              // );

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Error", "Failed to delete event", err);
      });
  };

  return (
    <div>
      {
        <section className="py-12 bg-base-200 min-h-screen">
          <h2 className="text-3xl font-bold text-center mb-8">Manage Events</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
            {usersEvents.length > 0 ? (
              usersEvents.map((event) => (
                <div key={event._id} className="card bg-white shadow-xl">
                  <figure>
                    <img
                      src={event.thumbnail}
                      alt={event.title}
                      className="h-48 w-full object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h3 className="text-xl font-bold capitalize">
                      {event.title}
                    </h3>
                    <p>
                      Desc:{" "}
                      <span className="text-gray-500 px-2">
                        {event.description}
                      </span>
                    </p>
                    <p className="text-gray-500">📍 {event.location}</p>
                    <p className="text-gray-500">🗂 {event.eventType}</p>
                    <p className="text-gray-500">
                      📅{" "}
                      {new Date(event.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>

                    <div className="flex items-center justify-center gap-3">
                      <Link
                        to={`/update-event/${event._id}`}
                        className="btn btn-warning"
                      >
                        <FaEdit />
                        Edit Events
                      </Link>
                      <button
                        className="btn btn-warning"
                        onClick={() => handleDeleteEvent(event._id)}
                      >
                        <FaTrash />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
                <p>You haven't Created any events yet.</p>
              </>
            )}
          </div>
        </section>
      }
    </div>
  );
};

export default ManageEvents;
