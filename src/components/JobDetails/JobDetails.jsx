import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../utility/localStorage';

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(job);

    const handleApplyJob = () => {
        saveJobApplication(id);
        toast('Applied Successfully')
    }

    return (
        <div>
            <h2>Job Details</h2>
            <div className='grid gap-4 md:grid-cols-4'>
                <div className='border md:col-span-3'>
                    <h2 className=''>Job Description: {job.job_description}</h2>
                    <h3>Job Responsibility: {job.job_responsibility}</h3>
                    <p>Educational Requirement:</p>
                    <p>{job.educational_requirements}</p>
                    <p>Experience:</p>
                    <p>{job.experiences}</p>
                </div>
                <div className='border'>
                    <h2 className='text-2xl'>Job Details</h2>
                    <p>Salary: {job.salary}(Per Month)</p>
                    <p>Job Title: {job.job_title}</p>

                    <h2>Contact Information</h2>
                    <p>Phone: {job.contact_information.phone}</p>
                    <p>Email: {job.contact_information.email}</p>
                    <p>Address: {job.contact_information.address}</p>
                    <button onClick={handleApplyJob} className='btn btn-primary w-full'>Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;