import React from "react";
import { Link } from "react-router-dom";

function ProgramsNservices() {
  return (
    <div>
      <section id="scholarships" className="bg-blue-50 text-blue-900 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Programs and Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Combined Opportunities Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4 text-blue-900">
                Scholarships and Opportunities
              </h3>
              <p className="mb-4 text-gray-700">
                We regularly upload undergraduate scholarships, graduate
                scholarships, internships, and other opportunities to help
                students achieve their academic and career goals. Our platform
                is your one-stop destination for finding the best opportunities
                tailored to your needs.
              </p>
              <div className="flex justify-between items-center">
                <Link to="/scholarship-list">
                  <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            {/* Application Essay Guidance Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4 text-blue-900">
                Application Essay Guidance
              </h3>
              <p className="mb-4 text-gray-700">
                Struggling with your scholarship or university application
                essays? Our expert team provides personalized guidance to help
                you craft compelling essays that stand out for affordable
                pricing!
              </p>
              <div className="flex justify-between items-center">
                <span className="text-red-600 font-semibold">
                  Coming Soon...
                </span>
              </div>
            </div>

            {/* Application Assistance Program Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4 text-blue-900">
                Application Assistance Program
              </h3>
              <p className="mb-4 text-gray-700">
                Our application assistance program offers step-by-step support
                for scholarship and university applications. From document
                preparation to submission, we’ve got you covered - all for very
                affordable pricing!
              </p>
              <div className="flex justify-between items-center">
                <span className="text-red-600 font-semibold">
                  Coming Soon...
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProgramsNservices;
