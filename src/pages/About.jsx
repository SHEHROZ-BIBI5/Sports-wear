import React from "react";

const About = () => {
  return (
    <div>
      <h1>about</h1>

      <div className="resume">
        <header>
          <h1 className="text-red-500 text-4xl font-bold">Shehroz Bibi</h1>
          <p className="text-gray-700 text-lg">Full Stack Developer</p>
          <p className="text-sm text-gray-500">
            Karachi, Pakistan | +92 300 0000000 | shehroz@email.com | LinkedIn
          </p>
        </header>

        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b-2 border-red-500">
            Experience
          </h2>
          <div className="mt-2">
            <h3 className="font-bold">Freelancer + Full Stack Developer</h3>
            <p className="text-sm text-gray-600">
              Self-employed | 2022 - Present
            </p>
            <p>
              Built multiple full-stack applications using React, Node.js, and
              MongoDB.
            </p>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b-2 border-red-500">
            Skills
          </h2>
          <ul className="list-disc list-inside">
            <li>React.js</li>
            <li>Node.js</li>
            <li>Tailwind CSS</li>
            <li>MongoDB</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
