import React from "react";
import { Link } from "react-router-dom";
import { FaArrowsTurnToDots, FaBell, FaBuilding } from "react-icons/fa6";
import { MdOutlineRailwayAlert } from "react-icons/md";

const Service = () => {
  return (
    <section className="hero min-h-screen bg-base-300 flex items-center justify-center p-14">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary uppercase">
                Meri Rail
              </span>
              <h2 className="mb-3 text-3xl font-bold">What We Offer</h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Indian Railway is the backbone of the country's transportation
                system, connecting millions of people and goods across vast
                distances.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center items-center gap-y-3">
          <ServiceCard
            title="PNR Details"
            details="Get real-time updates on your train's PNR status, including confirmation status, coach and seat number, and current position."
            icon={<FaBell className="w-8 h-8 text-gray-50" />}
            link="/pnr-status/"
          />
          <ServiceCard
            title="Train Between Stations"
            link={"/tbis/"}
            details="Find trains running between two stations, along with their schedules, routes, and availability."
            icon={<FaArrowsTurnToDots className="w-8 h-8 text-gray-50" />}
          />
          <ServiceCard
            title="Train Details"
            link={"/trains/"}
            details="Get comprehensive information about a specific train, including its route, schedule, halts."
            icon={<MdOutlineRailwayAlert className="w-8 h-8 text-gray-50" />}
          />
          <ServiceCard
            title="Station Details"
            link={"/stations/"}
            details="Get comprehensive information about a specific stations, including its location, google map link."
            icon={<FaBuilding className="w-8 h-8 text-gray-50" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details, link }) => {
  return (
    <>
      <Link to={link} className="w-full px-4 md:w-1/2 lg:w-1/3 cursor-pointer">
        <div className="mb-9 rounded-xl p-10 shadow-md hover:shadow-lg transition border border-gray-500 hover:border-primary h-full">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{details}</p>
        </div>
      </Link>
    </>
  );
};
