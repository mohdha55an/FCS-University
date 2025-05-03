import React from 'react';

const Section = () => {
  const data = [
    { id: 1, headings: "QS World Ranking", hags: 801-850, word: "World University Ranking" },
    { id: 2, headings: "Nirf", hags: 17, word: "india University Ranking" },
    { id: 3, headings: "scopus", hags: 1097, word: "publication in 2023" },
    { id: 4, headings: "mou", hags: 79, word: "mou's singned" },
    { id: 5, headings: "ongoing projects", hags: 179, word: "ongoing projects" },
  ];

  return (
    <section className='conitainer mt-2 mx-auto' >
      <div className=''>
        {data.map(item => (
          <div className=' bg-green-200 gap-2 rounded-xl text-center h-40 flex flex-col  justify-center ' key={item.id} style={{ marginBottom: '1rem' }}>
            <h2 className='font-extrabold text-3xl text-red-800 uppercase'>{item.headings}</h2>
            <p className='font-extrabold  opacity-85 text-2xl'>Rank: #{item.hags}</p>
            <p className='text-2xl font-bold capitalize text-purple-600'>{item.word}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;
