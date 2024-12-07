import React, { useState } from "react";

// Function to handle form submission and reset
function handleSubmit(e, setFormStatus) {
  e.preventDefault();

  // Post form data to Getform.io
  fetch(e.target.action, {
    method: e.target.method,
    body: new FormData(e.target),
  })
    .then((response) => {
      if (response.ok) {
        setFormStatus("success");
        e.target.reset(); // Reset the form after successful submission
      } else {
        setFormStatus("error");
      }
    })
    .catch(() => {
      setFormStatus("error");
    });
}

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null);

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-screen">
        <div className="pb-8">
          <p className="text-4xl font-bold inline">CONTACT</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            onSubmit={(e) => handleSubmit(e, setFormStatus)}
            name="contact"
            method="POST"
            action="https://getform.io/f/a5bbeab4-3505-457e-bcda-603c8bc15711"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Send Message
            </button>

            {/* Show success or error message */}
            {formStatus === "success" && (
              <p className="text-green-500 mt-4">Message sent successfully!</p>
            )}
            {formStatus === "error" && (
              <p className="text-red-500 mt-4">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
