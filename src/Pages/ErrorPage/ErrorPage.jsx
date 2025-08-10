import { Link } from "react-router"; // should be react-router-dom, not react-router
import Title from "../../Components/Title/Title";
import Lottie from "lottie-react";
import animation from "../../assets/404_error.json";
import { PiKeyReturnFill } from "react-icons/pi";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      {/* Page Title for SEO */}
      <Title title="404 Error" />

      {/* Animation */}
      <div className="max-w-md w-full">
        <Lottie animationData={animation} loop={true} />
      </div>

      {/* Message */}
      <h1 className="text-4xl font-bold text-gray-800 mt-6">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-500 mt-2 mb-6 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.  
        Let’s get you back to safety.
      </p>

      {/* Return Home Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 text-white bg-primary hover:bg-primary/90 rounded-lg shadow-md transition-all"
      >
        <PiKeyReturnFill className="text-lg" /> Return Home
      </Link>
    </div>
  );
};

export default ErrorPage;
