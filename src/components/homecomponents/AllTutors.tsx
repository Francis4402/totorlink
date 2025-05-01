"use client"

import { useState } from 'react'

const AllTutors = () => {

    const [selectedDate, setSelectedDate] = useState('');

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">

      <div className="text-center">
        <h1 className="text-3xl font-bold">Jane Doe</h1>
        <p className="text-gray-600 text-lg mt-1">Certified Math & Science Tutor</p>
      </div>


      <section>
        <h2 className="text-2xl font-semibold mb-2">About</h2>
        <p className="text-gray-700">
          Hi! I&apos;m Jane, a dedicated tutor with a degree in Education and 8+ years of experience
          helping students excel in Math and Science. I believe in personalized teaching that builds confidence and independence.
        </p>
      </section>


      <section>
        <h2 className="text-2xl font-semibold mb-2">Subjects Taught</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Mathematics (Grades 6–12)</li>
          <li>Physics (Grades 9–12)</li>
          <li>Biology (Grades 6–10)</li>
        </ul>
      </section>


      <section>
        <h2 className="text-2xl font-semibold mb-2">Rates</h2>
        <p className="text-gray-700">
          <strong>$40/hour</strong>. Discounts available for bulk sessions:
        </p>
        <ul className="list-disc list-inside text-gray-700 ml-4 mt-1">
          <li>5 sessions: $180</li>
          <li>10 sessions: $350</li>
        </ul>
      </section>


      <section>
        <h2 className="text-2xl font-semibold mb-2">Reviews</h2>
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded">
            <p className="text-yellow-500 font-bold">★★★★★</p>
            <p className="text-gray-700">
            &quot;Jane is an amazing tutor! She helped me improve my math grade from a C to an A.&quot;
            </p>
            <p className="text-sm text-gray-500 mt-1">– Alex, Grade 10</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <p className="text-yellow-500 font-bold">★★★★☆</p>
            <p className="text-gray-700">
            &quot;Very patient and knowledgeable. Great teaching style.&quot;
            </p>
            <p className="text-sm text-gray-500 mt-1">– Maya, Grade 11</p>
          </div>
        </div>
      </section>


      <section>
        <h2 className="text-2xl font-semibold mb-2">Availability</h2>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2"
        />
        {selectedDate && (
          <p className="mt-2 text-gray-700">You selected: {selectedDate}</p>
        )}
      </section>


      <section className="flex flex-col sm:flex-row gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Request Tutoring
        </button>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
          Contact Tutor
        </button>
      </section>
    </div>
  )
}

export default AllTutors