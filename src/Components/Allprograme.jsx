// Programs.js

import React, { useState, useEffect } from 'react';
import axios from '../utiles/axios';
import ProgramCard from './ProgramCard';

const Programs = () => {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const response = await axios.get('/api/programs'); // Replace with your actual API endpoint
                // console.log(response.data)
                setPrograms(response.data); // Assuming the API returns an array of program objects
            } catch (error) {
                console.error('Error fetching programs:', error);
            }
        };

        fetchPrograms();
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="flex flex-wrap justify-center">
                {programs.length > 0 && (
                        programs.map((program,i) => (
                        <ProgramCard key={program._id} program={program} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Programs;
