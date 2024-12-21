"use client";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
export default function Project() {
  const [selectedImage, setSelectedImage] = useState(null);
  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };
  const closeModal = () => {
    setSelectedImage(null);
  };
  const technologies = [
    "Frontend: Vue, Nuxt.js, Tailwind CSS,Apollo client",
    "Backend: Golang, Hasura",
    "Database: PostgreSQL",
    "Payment Integration: Chapa Payments",
    "Authentication: JWT",
  ];

  const features = [
    {
      title: "Movie Management",
      description:
        "Admins can create, update, and delete movies, including details such as title, description, and images.",
    },
    {
      title: "Schedule Management",
      description:
        "Movies are assigned showtimes, allowing users to view and book tickets for available slots.",
    },
    {
      title: "Bookmark and Rating System",
      description:
        "Users can bookmark their favorite movies for easy access later and can rate it.",
    },
    {
      title: "Payment Integration",
      description:
        "Users can securely purchase tickets through Chapa Payments integration.",
    },
  ];

  const images = [
    {
      src: "/userHome.png",
      alt: "Home Page UI",
      label: "Home Page UI",
    },
    {
      src: "/AdminHome.png",
      alt: "Admin Dashboard",
      label: "Admin Dashboard",
    },
    {
      src: "/RateplusBook.png",
      alt: "Admin Dashboard",
      label: "Rate and Book",
    },

    {
      src: "/TicketBought.png",
      alt: "Chapa Payments",
      label: "Chapa Payments",
    },
  ];

  const challenges = [
    "Handled concurrent users and optimized database queries for peak traffic.",
    "Successfully integrated Chapa Payments for secure and seamless transactions.",
    "Ensured a responsive UI/UX optimized for mobile and desktop devices.",
  ];

  return (
    <div className="mt-20 px-4 sm:px-4 md:px-6">
      <div className="text-center">
        <div className="text-center text-lg mb-6">
          Welcome to my project showcase! Below, you'll find a curated selection
          of my work, showcasing my skills in crafting intuitive, visually
          appealing, and highly functional solutions. Each project represents my
          dedication to solving real-world problems with creativity and
          precision. Explore and see what I can create for you!
        </div>

        <h2 className="md:text-3xl text-xl font-bold text-teal-500 mb-6">
          1. Cinema Ticketing System
        </h2>
        <p className="text-base md:text-xl mb-2">
          A dynamic platform for browsing movies, booking tickets, and managing
          schedules with a robust backend built in Golang and payment
          integration via Chapa Payments.
        </p>
      </div>

      {/* Technology Section */}
      <div className="text-center mb-6 md:10">
        <h3 className="text-base md:text-xl font-semibold text-teal-400 mb-4">
          Technology Used
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-base">
          {technologies.map((tech, index) => (
            <li key={index} className="py-2 px-2 rounded-full">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Features Section */}
      <div className="mb-10">
        <h3 className="text-xl mx-4 flex items-center justify-center font-semibold text-teal-400 text-center mb-4">
          <ShieldCheckIcon className="md:h-6 md:w-6 h-4 w-4 text-teal-500 mr-2" />
          Key Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2 ">
          {features.map((feature, index) => (
            <div key={index} className="p-4 rounded-lg shadow-lg ">
              <h4 className="font-bold text-lg text-teal-500 mb-2">
                {feature.title}
              </h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mb-10 flex flex-row items-center justify-center gap-4">
        <a
          href="https://github.com/berahaan/cinema-ticket"
          className="text-teal-500 font-semibold md:text-lg text-base inline-block mb-2 hover:underline"
        >
          View GitHub Repo
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mb-10">
        {images.map((image, index) => (
          <div key={image.src} className="p-2 rounded-lg">
            <div
              className="h-auto rounded-lg mb-4 cursor-pointer"
              onClick={() => openModal(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500} // Specify the width
                height={256} // Specify the height
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center">{image.label}</p>
          </div>
        ))}
      </div>

      {/* Challenges Section */}
      <div className="p-6 rounded-lg mb-10">
        <h3 className="text-xl font-semibold text-teal-400 text-center mb-4">
          Challenges Overcome
        </h3>
        <ul className="list-disc list-inside">
          {challenges.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
      </div>

      {/* Hospital Management System Section */}
      <div className="text-center">
        <div className="text-center">
          <h2 className="md:text-3xl text-xl font-bold text-teal-500 mb-6">
            2. Hospital Management System
          </h2>
          <p className="text-xl mb-4">
            This project was developed as part of a semester-long collaborative
            effort with a team of skilled peers. My primary responsibility was
            the Human Resources (HR) module. In this role, I implemented
            features for managing the employee lifecycle, including hiring,
            firing, announcing vacancies, and maintaining employee records. The
            HR module aimed to streamline processes and ensure seamless
            management of hospital staff, contributing to overall operational
            efficiency.
          </p>
        </div>

        {/* Technology Used */}
        <div className="text-center mb-10">
          <h3 className="text-xl font-semibold text-teal-400 mb-4">
            Technology Used
          </h3>
          <ul className="flex flex-wrap justify-center gap-4 text-lg">
            <li className="py-2 px-2 rounded-full">
              Frontend: React, Redux, Tailwind CSS
            </li>
            <li className="py-2 px-2 rounded-full">
              Backend: Node.js, Express.js
            </li>
            <li className="py-2 px-2 rounded-full">Database: MongoDB</li>
            <li className="py-2 px-2 rounded-full">Authentication: JWT</li>
          </ul>
        </div>

        {/* Key Features */}
        <div className="mb-10">
          <h3 className="text-xl mx-2 flex items-center justify-center font-semibold text-teal-400 text-center mb-4">
            <ShieldCheckIcon className="md:h-6 md:w-6 h-4 w-4 text-teal-500 mr-2" />
            Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg shadow-lg">
              <h4 className="font-bold text-lg text-teal-500 mb-2">
                HR Management
              </h4>
              <p>
                Streamlined hiring, firing, and vacancy announcements, with
                tools to manage employee details, schedules, and performance.
              </p>
            </div>
            <div className="p-4 rounded-lg shadow-lg">
              <h4 className="font-bold text-lg text-teal-500 mb-2">
                Patient Management
              </h4>
              <p>
                Manage patient records, appointments, and billing processes to
                ensure smooth healthcare delivery.
              </p>
            </div>
            <div className="p-4 rounded-lg shadow-lg">
              <h4 className="font-bold text-lg text-teal-500 mb-2">
                Employee Self-Service
              </h4>
              <p>
                Employees can access schedules, apply for leaves, and view
                payroll details through a secure portal.
              </p>
            </div>
            <div className="p-4 rounded-lg shadow-lg">
              <h4 className="font-bold text-lg text-teal-500 mb-2">
                Analytics Dashboard
              </h4>
              <p>
                Real-time data visualization for key metrics like patient
                inflow, staff efficiency, and HR analytics.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mb-10 flex flex-row items-center justify-center gap-6">
          <span>
            <a
              href="https://github.com/nahom124578/mygit"
              className="text-teal-500 font-semibold text-lg inline-block mb-2 hover:underline"
            >
              View GitHub Repo
            </a>
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mb-10">
          <div className="p-4 rounded-lg">
            <div className="h-64 rounded-lg mb-2 md:mb-4">
              <div
                className="bg-gray-300 h-64 rounded-lg mb-2 md:mb-4 cursor-pointer"
                onClick={() => openModal("/HospitalHome.png")}
              >
                <Image
                  src="/HospitalHome.png"
                  width={500} // Specify the
                  height={256} // Specify the height
                  alt="HR Management UI"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <p className="text-center">HR Management UI</p>
          </div>

          <div className="p-4 rounded-lg">
            <div className="h-64 rounded-lg mb-2 md:mb-4">
              <div
                className="bg-gray-300 h-64 rounded-lg mb-2 md:mb-4 cursor-pointer"
                onClick={() => openModal("/PatientDashBoard.png")}
              >
                <Image
                  src="/PatientDashBoard.png"
                  width={500} // Specify the
                  height={256} // Specify the height
                  alt="Patient Dashboard"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <p className="text-center">Patient Dashboard</p>
          </div>
          <div className="p-4 rounded-lg">
            <div className="h-64 rounded-lg mb-4">
              <div
                className="bg-gray-300 h-64 rounded-lg mb-4 cursor-pointer"
                onClick={() => openModal("/Employelist.png")}
              >
                <Image
                  src="/Employelist.png"
                  width={500} //
                  height={256} // Specify the height
                  alt="Employelist"
                  className="w-full h-full object-cover mb-2 md:mb-4"
                />
              </div>
            </div>
            <p className="text-center">Analytics Dashboard</p>
          </div>
          <div className="p-4 rounded-lg">
            <div className="h-64 rounded-lg mb-4">
              <div
                className="bg-gray-300 h-64 rounded-lg mb-4 cursor-pointer"
                onClick={() => openModal("/EmployeRegistartion.png")}
              >
                <Image
                  src="/EmployeRegistartion.png"
                  width={500} //
                  height={300} // Specify the height
                  alt="Employelist"
                  className="w-full h-full object-cover mb-2 md:mb-4"
                />
              </div>
            </div>
            <p className="text-center">Analytics Dashboard</p>
          </div>
        </div>

        <div className="p-6 rounded-lg mb-10">
          <h3 className="text-xl font-semibold text-teal-400 text-center mb-4">
            Challenges Overcome
          </h3>
          <ul className="list-disc list-inside">
            <li>
              Built responsive UIs tailored for both desktop and mobile devices.
            </li>
            <li>
              Ensured secure role-based access control for sensitive data.
            </li>
            <li>
              Optimized HR workflows for large-scale hospitals with hundreds of
              employees.
            </li>
            <li>
              Achieved seamless integration of real-time updates using
              WebSockets and Redux.
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        {/* Project Title */}
        <div className="text-center">
          <h2 className="md:text-3xl text-xl font-bold text-teal-500 mb-6">
            3. Hotel Management System
          </h2>
          <p className="text-xl mb-4">
            This project was developed for a local hotel in my city to
            digitalize and streamline their operations. The system provides a
            seamless experience for both guests and administrators, enhancing
            the overall efficiency of hotel management. My role involved
            designing and implementing features such as room reservations, food
            ordering, feedback portals, and a robust admin dashboard to oversee
            hotel activities.
          </p>
        </div>

        {/* Technology Used */}
        <div className="text-center mb-10">
          <h3 className="text-xl font-semibold text-teal-400 mb-4">
            Technology Used
          </h3>
          <ul className="flex flex-wrap justify-center gap-4 text-lg">
            <li className="py-2 px-2 rounded-full">
              Frontend: React, Tailwind CSS
            </li>
            <li className="py-2 px-2 rounded-full">
              Backend: Node.js, Express.js
            </li>
            <li className="py-2 px-2 rounded-full">Database: MySQL</li>
            <li className="py-2 px-2 rounded-full">
              Payment Integration:Chapa Payment
            </li>
          </ul>
        </div>

        {/* Key Features */}
        <div className="mb-10">
          <h3 className="text-xl mx-4 flex items-center justify-center font-semibold text-teal-400 text-center mb-4">
            <ShieldCheckIcon className="md:h-6 md:w-6 h-4 w-4 text-teal-500 mr-2" />
            Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg shadow-lg">
              <h4 className="font-bold text-lg text-teal-500 mb-2">
                Room Reservation System
              </h4>
              <p>
                Guests can browse available rooms, view pricing, and reserve
                rooms online from the comfort of their homes. Includes payment
                options for online or in-person transactions.
              </p>
            </div>
            <div className="p-4 rounded-lg shadow-lg">
              <h4 className="font-bold text-lg text-teal-500 mb-2">
                Food Ordering
              </h4>
              <p>
                A menu display for available food items allows guests to order
                meals directly to their rooms. Admins can update menu items and
                pricing in real-time.
              </p>
            </div>
            <div className="p-4 rounded-lg shadow-lg">
              <h4 className="font-bold text-lg text-teal-500 mb-2">
                Feedback Portal
              </h4>
              <p>
                Guests can leave feedback about their experience, enabling the
                hotel to improve services. Admins can review feedback to make
                data-driven decisions.
              </p>
            </div>
            <div className="p-4 rounded-lg shadow-lg">
              <h4 className="font-bold text-lg text-teal-500 mb-2">
                Admin Dashboard
              </h4>
              <p>
                A centralized control panel for hotel administrators to manage
                room availability, food orders, guest records, and hotel
                operations with ease.
              </p>
            </div>
          </div>
        </div>

        {/* GitHub Repo and Live Demo */}
        <div className="text-center mb-10 flex flex-row items-center justify-center gap-6">
          <span>
            <a
              href="https://github.com/berahaan/Hotel_managament_system"
              className="text-teal-500 font-semibold text-lg inline-block mb-2 hover:underline"
            >
              View GitHub Repo
            </a>
          </span>
        </div>

        {/* Project Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mb-10">
          <div className="p-4 rounded-lg">
            <div
              className="h-64 rounded-lg mb-2 md:mb-4 cursor-pointer"
              onClick={() => openModal("/HotelHome.png")}
            >
              {/* Placeholder for Room Reservation UI */}
              <Image
                src="/HotelHome.png"
                width={500} //
                height={300} // Specify the height
                alt="Room Reservation UI"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="text-center">Home UI</p>
          </div>
          <div className="p-4 rounded-lg">
            <div
              className="h-64 rounded-lg mb-2 md:mb-4 cursor-pointer"
              onClick={() => openModal("/Roomlist.png")}
            >
              {/* Placeholder for Food Ordering UI */}
              <img
                src="/Roomlist.png"
                width={500} //
                height={300} // Specify the height
                alt="Food Ordering UI"
                className="w-full h-full object-cover "
              />
            </div>
            <p className="text-center">Food Ordering UI</p>
          </div>
          <div className="p-4 rounded-lg">
            <div
              className="h-64 rounded-lg mb-4 cursor-pointer"
              onClick={() => openModal("/ReservedRoom.png")}
            >
              {/* Placeholder for Admin Dashboard */}
              <Image
                src="/ReservedRoom.png"
                width={500} //
                height={300} // Specify the height
                alt="ReservedRoom"
                className="w-full h-full object-cover rounded-lg mb-2 md:mb-4"
              />
            </div>
            <p className="text-center">Reserved Room</p>
          </div>
          <div className="p-4 rounded-lg">
            <div
              className="h-64 rounded-lg mb-4 cursor-pointer"
              onClick={() => openModal("/ManagerAddRoom.png")}
            >
              {/* Placeholder for Admin Dashboard */}
              <Image
                src="/ManagerAddRoom.png"
                width={500} //
                height={300}
                alt="ManagerAddRoom"
                className="w-full h-full object-cover rounded-lg mb-2 md:mb-4"
              />
            </div>
            <p className="text-center">Add Rooms</p>
          </div>
        </div>

        <div className="p-6 rounded-lg mb-10">
          <h3 className="text-xl font-semibold text-teal-400 text-center mb-4">
            Challenges Overcome
          </h3>
          <ul className="list-disc list-inside">
            <li>
              Ensured scalability to accommodate future features like
              multi-hotel management.
            </li>
            <li>
              Designed responsive UIs for both desktop and mobile devices using
              Tailwind CSS.
            </li>
            <li>
              Integrated secure payment gateways like PayPal and Stripe for
              smooth transactions.
            </li>
            <li>
              Built a dynamic reservation system ensuring real-time room
              availability to prevent Overbooking.
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        {/* Project Title */}
        <div className="text-center">
          <h2 className="md:text-3xl text-xl font-bold text-teal-500 mb-6">
            4. Realtime Chat Application
          </h2>
          <p className="text-xl mb-4">
            A dynamic and feature-rich real-time chat application designed for
            seamless communication. This project combines cutting-edge
            technologies to deliver a smooth user experience with instant
            messaging capabilities, ensuring users stay connected in real-time
            across devices.
          </p>
        </div>

        {/* Technology Used */}
        <div className="text-center mb-10">
          <h3 className="text-xl font-semibold text-teal-400 mb-4">
            Technology Used
          </h3>
          <ul className="flex flex-wrap justify-center gap-4 text-lg">
            <li className="py-2 px-2 rounded-full">
              Frontend: React, Tailwind CSS
            </li>
            <li className="py-2 px-2 rounded-full">
              Backend: Node.js, Express.js
            </li>
            <li className="py-2 px-2 rounded-full">Database: MongoDB</li>
            <li className="py-2 px-2 rounded-full">
              Realtime Communication: WebSockets
            </li>
          </ul>
        </div>

        {/* Key Features */}
        <div className="mb-10">
          <h3 className="text-xl mx-4 flex items-center justify-center font-semibold text-teal-400 text-center mb-4">
            <ShieldCheckIcon className="md:h-6 md:w-6 h-4 w-4 text-teal-500 mr-2" />
            Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg shadow-lg">
              <h4 className="font-bold text-lg text-teal-500 mb-2">
                Real-Time Messaging
              </h4>
              <p>
                Enables instant communication between users with
                WebSocket-powered real-time updates for messages, ensuring zero
                delay in conversations.
              </p>
            </div>

            <div className="p-4 rounded-lg shadow-lg">
              <h4 className="font-bold text-lg text-teal-500 mb-2">
                Message Read Receipts
              </h4>
              <p>
                Users can see when their messages are delivered and read,
                providing a more interactive and intuitive chatting experience.
              </p>
            </div>
            <div className="p-4 rounded-lg shadow-lg">
              <h4 className="font-bold text-lg text-teal-500 mb-2">
                Secure Authentication
              </h4>
              <p>
                User accounts are secured with JWT-based authentication,
                ensuring secure access to the chat application.
              </p>
            </div>
            <div className="p-4 rounded-lg shadow-lg">
              <h4 className="font-bold text-lg text-teal-500 mb-2">
                Responsive Design
              </h4>
              <p>
                The application is optimized for all devices, offering a
                seamless experience on desktops, tablets, and mobile devices.
              </p>
            </div>
          </div>
        </div>

        {/* GitHub Repo and Live Demo */}
        <div className="text-center mb-10 flex flex-row items-center justify-center gap-6">
          <span>
            <a
              href="https://github.com/berahaan/Chat_Applications"
              className="text-teal-500 font-semibold text-lg inline-block mb-2 hover:underline"
            >
              View GitHub Repo
            </a>
          </span>
        </div>

        {/* Project Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          <div className="p-4 rounded-lg">
            <div
              className="h-64 rounded-lg mb-2 md:mb-4 cursor-pointer"
              onClick={() => openModal("/chatSignup.png")}
            >
              <Image
                src="/chatSignup.png"
                width={500}
                height={300}
                alt="Create an account page"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="text-center">Signup pages</p>
          </div>
          <div className="p-4 rounded-lg">
            <div
              className="h-64 rounded-lg mb-2 md:mb-4 cursor-pointer"
              onClick={() => openModal("/chatLogin.png")}
            >
              <Image
                src="/chatLogin.png"
                width={500}
                height={300}
                alt="Login to chat"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="text-center">Login page</p>
          </div>
          <div className="p-4 rounded-lg">
            <div
              className="h-64 rounded-lg mb-2 md:mb-4 cursor-pointer"
              onClick={() => openModal("/chatPage.png")}
            >
              <img
                src="/chatPage.png"
                width={500}
                height={300}
                alt="Chat Page"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="text-center">Realtime Messaging UI</p>
          </div>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div
              className="relative max-w-full max-h-full flex justify-center items-center p-4"
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
            >
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-full max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-4xl font-bold mix-blend-difference"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}

        {/* Challenges Overcome */}
        <div className="p-6 rounded-lg mb-10">
          <h3 className="text-xl font-semibold text-teal-400 text-center mb-4">
            Challenges Overcome
          </h3>
          <ul className="list-disc list-inside">
            <li>
              Ensured secure user authentication and data transmission using JWT
              and HTTPS protocols.
            </li>
            <li>
              Designed a responsive UI to ensure optimal performance across all
              devices and screen sizes.
            </li>
            <li>
              Overcame challenges with MongoDB indexing to optimize message
              storage and retrieval speed.
            </li>
            <li>
              Implemented a scalable WebSocket architecture to handle concurrent
              users in real-time effectively.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
