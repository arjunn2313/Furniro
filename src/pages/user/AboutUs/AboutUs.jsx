import React from "react";
import BackgroundSection from "../../../components/background/BackgroundSection";

export default function AboutUs() {
  return (
    <section>
      <BackgroundSection
        title="About Us"
        breadcrumb={[
          { label: "Home", active: false },
          { label: "About Us", active: true },
        ]}
      />

      <div className="w-full mx-auto px-6 py-12 bg-gradient-to-r from-yellow-50 via-white to-yellow-50">
        {/* Story Section */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          {/* Story Image */}
          <div className="md:w-1/2 w-full">
            <img
              src="https://cfeg.com/wp-content/uploads/2020/02/senior-businessman-web.jpg"
              alt="Company Story"
              className="rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            />
          </div>
          {/* Story Content */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Founded in 2010, we started with a mission to bring unique and
              high-quality products to every home. Our journey began in a small
              studio, and today, we’ve grown into a global brand recognized for
              our attention to detail and customer satisfaction.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              We believe in quality craftsmanship and sustainable production
              practices, ensuring our products are not only beautiful but also
              made with care for the environment.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Team Member */}
            <div className="text-center">
              <img
                src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                alt="Team Member 1"
                className="w-40 h-40 mx-auto rounded-full mb-4 shadow-lg transform transition duration-300 hover:scale-105"
              />
              <h3 className="text-2xl font-semibold text-gray-900">John Doe</h3>
              <p className="text-gray-700">CEO & Founder</p>
            </div>
            {/* Team Member */}
            <div className="text-center">
              <img
                src="https://aboutleaders.com/wp-content/uploads/2022/01/Transformation-Leaderhip-Traits.jpg"
                alt="Team Member 2"
                className="w-40 h-40 mx-auto rounded-full mb-4 shadow-lg transform transition duration-300 hover:scale-105"
              />
              <h3 className="text-2xl font-semibold text-gray-900">Jane Smith</h3>
              <p className="text-gray-700">Lead Designer</p>
            </div>
            {/* Team Member */}
            <div className="text-center">
              <img
                src="https://imageio.forbes.com/specials-images/imageserve/736124095/960x0.jpg?height=491&width=711&fit=bounds"
                alt="Team Member 3"
                className="w-40 h-40 mx-auto rounded-full mb-4 shadow-lg transform transition duration-300 hover:scale-105"
              />
              <h3 className="text-2xl font-semibold text-gray-900">
                Michael Brown
              </h3>
              <p className="text-gray-700">Marketing Head</p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-white py-12 sm:py-20 rounded-lg shadow-md">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Our Mission
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-center leading-relaxed mb-6 text-[12px] sm:text-lg">
            At our core, we believe in creating products that inspire. We strive
            to blend creativity with practicality, bringing you items that
            enhance your life and spark joy in your everyday surroundings. Our
            mission is to be at the forefront of home innovation, making every
            home a place of comfort and inspiration.
          </p>
          <div className="flex justify-center">
            <a
              href="/shop"
              className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-600 transition"
            >
              Shop Now
            </a>
          </div>
        </section>

        {/* Call to Action */}
        <section className="sm:py-5 mt-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Want to Learn More?
          </h2>
          <p className="text-gray-700 mb-8 text-sm sm:text-lg">
            We are always here to assist you. Reach out to us if you have any
            questions or want to know more about our products and services.
          </p>
          <a
            href="/contact"
            className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-600 transition"
          >
            Contact Us
          </a>
        </section>
      </div>
    </section>
  );
}
