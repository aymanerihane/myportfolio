import React from 'react'
import myImage from '../assets/myImage.png';
import Tilt from 'react-parallax-tilt';
export default function AboutSection() {
    return (
        <div className="flex justify-around items-center flex-col w-10/12">
            <div className="flex w-full justify-around items-center gap-10">

                <div className="max-w-[700px] flex flex-col gap-10 justify-between items-center">
                    <h1 className="text-4xl font-bold">Know Who I AM</h1>
                    <p className="text-[19px] font-bold leading-[29px] grow">    I am a passionate and driven Master's student in Artificial Intelligence and Data Science, with a strong background in software development, data analysis, and machine learning. My expertise includes designing and implementing scalable applications, developing dynamic web platforms, and building data-driven solutions. I have hands-on experience with full-stack development, database management, and data processing pipelines, with a focus on optimizing performance and delivering robust solutions.<br /><br />
                        <span className="flex justify-center opacity-50">Rihane Aymane</span></p>
                </div>
                <Tilt>
                    <div className="w-[300px] h-[300px] bg-blue-950 rounded-full relative">
                        <img src={myImage} alt="myImage" className="h-[430px] w-[430px] object-cover  absolute bottom-0 rounded-full" />
                    </div>
                </Tilt>

            </div>
        </div>
    )
}
