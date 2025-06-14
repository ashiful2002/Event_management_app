import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router";
import DatePicker from "react-datepicker";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Helmet } from "react-helmet";
const CreateEvents = () => {
  const { user } = useContext(AuthContext);
  const [eventDate, setEventDate] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const eventType = form.type.value;
    const location = form.location.value;
    const thumbnail = form.thumbnail.value;
    if (!eventDate || eventDate < new Date()) {
      toast("Please select a valid future date");
      return;
    }
    const eventData = {
      title,
      description,
      eventType,
      location,
      thumbnail,
      date: eventDate.toISOString(),
      createdBy: user?.email,
    };
    console.log("created event:", eventData);

    axios
      .post("http://localhost:3000/events", eventData)
      .then((res) => {
        if (res.data.insertedId || res.data.success) {
          toast.success("Event created successfully!");
          setTimeout(() => {
            navigate("/upcoming-events");
          }, 1500);
        } else {
          toast.error("Failed to create event");
        }
      })
      .catch((err) => {
        console.log("Errow to create event", err);
        toast.error("server error while creating event");
      });
  };

  return (
    <div>
      <Helmet>
        <title>Create events | Event management</title>
      </Helmet>
      <div className="max-w-2xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Create New Event
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <>
            {/* <label className="label">Name</label> */}
            <input
              name="title"
              type="text"
              placeholder="Event Title"
              className="input input-bordered w-full"
              required
            />
          </>
          <textarea
            name="description"
            placeholder="Event Description"
            className="textarea textarea-bordered w-full"
            required
          />
          <select
            name="type"
            className="select select-bordered w-full"
            required
          >
            <option disabled selected>
              Select Event Type
            </option>
            <option>Cleanup</option>
            <option>Plantation</option>
            <option>Donation</option>
          </select>
          <input
            name="thumbnail"
            type="text"
            placeholder="Thumbnail Image URL"
            className="input input-bordered w-full"
            required
          />
          <input
            name="location"
            type="text"
            placeholder="Event Location"
            className="input input-bordered w-full"
            required
          />
          <label className="block font-medium">Event Date (future only):</label>
          <DatePicker
            selected={eventDate}
            onChange={(date) => setEventDate(date)}
            minDate={new Date()}
            placeholderText="Select a date"
            className="input input-bordered w-full"
            required
          />

          <button type="submit" className="btn btn-primary w-full">
            Create Event
          </button>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default CreateEvents;
