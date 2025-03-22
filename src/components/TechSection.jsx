import React from 'react'
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
export default function TechSection() {
    return (
        <div className="flex justify-around items-center flex-col w-10/12">
            <div className="max-w-[700px] flex flex-col gap-10 justify-between items-center">
                <h1 className="text-4xl font-bold">Technologies I use</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 mt-2">

                <div className="tech-icons flex items-center flex-col justify-center">
                    <DiJavascript1 className="" />
                    <p className="mt-[5px] text-[0.4em] text-center ">Java Script</p>
                </div>
                <div className="tech-icons flex items-center flex-col justify-center">
                    <DiReact className="" />
                    <p className="mt-[5px] text-[0.4em] text-center ">React</p>
                </div>
                <div className="tech-icons flex items-center flex-col justify-center">
                    <DiNodejs className="" />
                    <p className="mt-[5px] text-[0.4em] text-center ">Node.js</p>
                </div>
                <div className="tech-icons flex items-center flex-col justify-center">
                    <DiMongodb className="" />
                    <p className="mt-[5px] text-[0.4em] text-center ">MongoDB</p>
                </div>
                <div className="tech-icons flex items-center flex-col justify-center">
                    <DiPython className="" />
                    <p className="mt-[5px] text-[0.4em] text-center ">Python</p>
                </div>
                <div className="tech-icons flex items-center flex-col justify-center">
                    <DiGit className="" />
                    <p className="mt-[5px] text-[0.4em] text-center ">Git</p>
                </div>
                <div className="tech-icons flex items-center flex-col justify-center">
                    <DiJava className="" />
                    <p className="mt-[5px] text-[0.4em] text-center ">Java</p>
                </div>
                <div className="tech-icons flex items-center flex-col justify-center">
                    <SiRedis className="" />
                    <p className="mt-[5px] text-[0.4em] text-center ">Redis</p>
                </div>
                <div className="tech-icons flex items-center flex-col justify-center">
                    <SiFirebase className="" />
                    <p className="mt-[5px] text-[0.4em] text-center ">Firebase</p>
                </div>
                <div className="tech-icons flex items-center flex-col justify-center">
                    <SiNextdotjs className="" />
                    <p className="mt-[5px] text-[0.4em] text-center ">Next.js</p>
                </div>
                <div className="tech-icons flex items-center flex-col justify-center">
                    <SiSolidity className="" />
                    <p className="mt-[5px] text-[0.4em] text-center ">Solidity</p>
                </div>
                <div className="tech-icons flex items-center flex-col justify-center">
                    <SiPostgresql className="" />
                    <p className="mt-[5px] text-[0.4em] text-center ">PostgreSQL</p>
                </div>
                <div className="tech-icons flex items-center flex-col justify-center">
                    <TbBrandGolang className="" />
                    <p className="mt-[5px] text-[0.4em] text-center ">Golang</p>
                </div>
                <div className="tech-icons flex items-center flex-col justify-center">
                    <CgCPlusPlus className="" />
                    <p className="mt-[5px] text-[0.4em] text-center ">C++</p>
                </div>
                
            </div>
        </div>
    )
}
