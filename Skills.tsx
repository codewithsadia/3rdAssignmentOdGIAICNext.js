import React from "react";

const Skills = () => {
  return (
    <div id='skills' className="  container pt-32">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div data-aos="zoom-in-up">
          <h2 className="text-4xl md:text-5xl text-pink-600">Technologies I work with! </h2>
          <p className="text-gray-500 pt-2">
            I have a solid foundation in web development specialalizing in HTML
            CSS and JavaScript. My exprience extends to using frameworks like
            React and Next.js to creat dynamic and user-friendly app;ications.
            I'm also proficient in Tailwind CSS for efficent styling
            anddesign.With a passion for learning. I stay updated on the
            latesttecnologist to enhance my skill set and contibut efficeively
            to projects.
          </p>
        <div>
          <div className="grid grid-cols-3 text-accent text-2px sm:text-2px">
            <div className="space-y-2">
              <h2>TypeScript</h2>
              <h2>React.js</h2>
              <h2>Next.js</h2>
            </div>
            <div className="space-y-2">
              <h2>Tailwind</h2>
              <h2>CSS</h2>
              <h2>Node.js</h2>
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
