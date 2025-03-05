import React from "react";
import { Link } from "react-router-dom";

const UnAuthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500 mb-4">403</h1>
      <p className="text-2xl text-gray-700 mb-8">Unauthorized Access</p>
      <p className="text-gray-600 mb-4">
        You do not have permission to access this page.
      </p>
      <Link to="/" className="btn btn-primary">
        Go to Home
      </Link>
    </div>
  );
};

export default UnAuthorized;
