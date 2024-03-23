import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";

const Job = ({ job }) => {
  const { logo, job_title, company_name, remote_or_onsite, location,job_type,salary,job_description,job_responsibility,educational_requirements,experiences} = job;
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src={logo}
          alt={job_title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
            <button className="px-5 py-2 font-extrabold border rounded text-[#7E90FE] border-[#7E90FE] mr-4">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold border rounded text-[#7E90FE] border-[#7E90FE]">{job_type}</button>
        </div>
        <div className="flex gap-4">
            <h2 className="flex "><CiLocationOn className="text-xl mr-2" />{location}</h2>
            <h2 className="flex"><HiOutlineCurrencyDollar className="text-xl mr-2" />{salary}</h2>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
