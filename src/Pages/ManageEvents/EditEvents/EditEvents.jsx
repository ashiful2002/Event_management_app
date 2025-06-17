import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Link, useLoaderData, useNavigate } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { toast } from "react-toastify";
const EditEvents = () => {
  const event = useLoaderData();
  //   const { title, thumbnail, location, date, description, eventType } = event;
  const navigate = useNavigate();
  const [eventDate, setEventDate] = useState(event.date);

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
   
    const form = e.target;
    const formData = new FormData(form);
    const updatedEvent = Object.fromEntries(formData.entries());
    updatedEvent.date = new Date(eventDate).toISOString();
    axios
      .put(`https://event-management-server-five.vercel.app/events/${event._id}`, updatedEvent)
      .then((res) => {
        console.log(res);
        if (res.data.modifiedCount) {
          toast.success("Event Updated Successfully");
          navigate("/manage-events");
        }
      });
  };
  return (
    <div>
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-2xl font-bold mb-4">Edit events</h2>
        <form onSubmit={handleUpdateSubmit}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <img
              src={event.thumbnail}
              className="w-56 mx-auto rounded-2xl"
              alt={event.title}
            />
            {/*  */}
            <label className="label">Title</label>
            <input
              className="input"
              placeholder="title"
              name="title"
              defaultValue={event.title}
            />
            {/* thumbnail */}

            <label className="label">Thumbnail</label>
            <input
              className="input"
              name="thumbnail"
              defaultValue={event.thumbnail}
            />
            {/* eventType */}
            <select
              name="eventType"
              className="select select-bordered w-full"
              required
              defaultValue={event.eventType}
            >
              <option>Cleanup</option>
              <option>Plantation</option>
              <option>Donation</option>
            </select>
            {/* location */}
            <label className="label">Location</label>
            <input
              className="input"
              name="location"
              defaultValue={event.location}
            />
            {/* date */}
            <label className="block font-medium">Event Date</label>
            <DatePicker
              selected={eventDate}
              onChange={(date) => setEventDate(date)}
              minDate={new Date()}
              placeholderText="Select a date"
              className="input input-bordered w-full"
              required
            />
            {/* description */}
            <label className="label">Description</label>
            <textarea
              className="textarea"
              placeholder="Event Description"
              name="description"
              defaultValue={event.description}
            />
            <button className="btn btn-primary btn-sm" type="submit">
              Update event
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default EditEvents;
