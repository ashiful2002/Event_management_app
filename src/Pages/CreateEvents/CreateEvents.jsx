import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router";
import DatePicker from "react-datepicker";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Helmet } from "react-helmet";
import Loading from "../../Components/Loading/Loading";
const CreateEvents = () => {
  const { user } = useContext(AuthContext);
  const [eventDate, setEventDate] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const eventType = form.type.value;
    const location = form.location.value;
    const imageFile = form.thumbnail.files[0];

    if (!eventDate || eventDate < new Date()) {
      toast.error("Please select a valid future date");
      return;
    }
    toast.success("uploadiong image, and it's took some second");
    const formData = new FormData();
    formData.append("image", imageFile);
    const imgbbApiKey = "c44c0a8f86162e6eabae13acb609c636";
    const imgbbUrl = `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`;

    const imgRes = await axios.post(imgbbUrl, formData);
    const imageUrl = imgRes?.data?.data?.url;
    const eventData = {
      title,
      description,
      eventType,
      location,
      thumbnail: imageUrl,
      date: eventDate.toISOString(),
      createdBy: user?.email,
    };
    console.log("created event:", eventData);
    const token = await user.getIdToken();
    // console.log("firebase token", token);
    axios
      .post("http://localhost:3000/events", eventData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
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
            defaultValue={`Select Event Type`}
          >
            <option disabled={true}> Select Event Type</option>
            <option>Cleanup</option>
            <option>Plantation</option>
            <option>Donation</option>
          </select>
          {/* <input
            name="thumbnail"
            type="text"
            placeholder="Thumbnail Image URL"
            className="input input-bordered w-full"
            required
          /> */}
          <input
            name="thumbnail"
            type="file"
            accept="image/*"
            // placeholder="Thumbnail Image URL"
            className=" file-input w-full"
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
