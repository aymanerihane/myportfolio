import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden max-w-[400px] transform transition duration-300 hover:scale-105 p-5">
      <img className="w-full h-48 object-cover rounded-t-2xl" src={props.imgPath} alt="card-img" />
      <div className="p-5">
        <h3 className="text-white text-xl font-semibold mb-2">{props.title}</h3>
        <p className="text-gray-300 text-sm mb-4 text-justify">{props.description}</p>
        <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
          <a
            href={props.ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center"
          >
            <BsGithub className="mr-2" /> {props.isBlog ? "Blog" : "GitHub"}
          </a>
          {!props.isBlog && props.demoLink && (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center justify-center"
            >
              <CgWebsite className="mr-2" /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
