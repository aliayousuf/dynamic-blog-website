"use client";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-blue-200 shadow-md rounded-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-4 sm:mb-6">
          Contact Us
        </h2>

        <div className="text-center mb-6 sm:mb-8">
          <p className="text-gray-600 text-sm sm:text-base">
            We love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
          </p>
        </div>

        <form className="space-y-4 sm:space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-semibold mb-1 sm:mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mb-1 sm:mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Gmail"
              className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-semibold mb-1 sm:mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message here..."
              className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="text-center mt-4 sm:mt-6">
          <p className="text-gray-600 text-sm sm:text-base">Or reach us at:</p>
          <p className="text-blue-500 mt-1 sm:mt-2"> aliayousuf.izzat@gmail</p>
        </div>
      </div>
    </div>
  );
}
