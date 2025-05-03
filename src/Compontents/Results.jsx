import React from 'react';

const subjects = ['Mathematics', 'Science', 'English', 'History'];

const generateResults = () => {
  const students = [];
  for (let i = 1; i <= 50; i++) {
    subjects.forEach((subject) => {
      students.push({
        id: `${i}-${subject}`,
        studentId: i,
        studentName: `Student ${i}`,
        subject,
        score: Math.floor(Math.random() * 41) + 60
      });
    });
  }
  return students;
};

const resultsData = generateResults();

const Results = () => {
  return (
    <div className="p-6 overflow-auto">
      <h1 className="text-2xl font-bold mb-4">Results of All Students</h1>
      <table className="min-w-full table-auto border-collapse border border-gray-300 text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">Student ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Subject</th>
            <th className="border px-4 py-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {resultsData.map((result) => (
            <tr className='hover:bg-gray-400' key={result.id}>
              <td className="border px-4 hover:bg-gray-400 py-1 text-center">{result.studentId}</td>
              <td className="border px-4 py-1">{result.studentName}</td>
              <td className="border px-4 py-1">{result.subject}</td>
              <td className="border px-4 py-1 text-center">{result.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
