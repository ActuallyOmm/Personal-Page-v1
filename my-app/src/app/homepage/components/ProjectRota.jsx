"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

async function fetchData() {
  const jsonData = {
    swiper: [
      {
        Project_Description:
          "Created an interactive, dynamic webpage using HTML, PHP and CSS which was linked to a backend database; allowing the user to perform actions (logging in, booking sessions, etc.). Implemented JavaScript functions to handle erroneous data entered by the user. Utilised tools such as: HeidiSQL to create a database based of the EERD, and Laragon to host the website on a local server.",
        Project_Name: "COM1028 Coursework - Database Analytics System",
        Skills: ["SQL", "Java"],
      },
      {
        Project_Description:
          "Utilised Django framework to develop a user friendly, functional web application. Designed and put into effect a backend infrastructure (models, views, URLs), ensuring reliant data management. Enhanced user experience by programming views, enabling user actions such as album/song creation, viewing, editing and deletion. Implemented a login system, that also displayed infomation back to users about comments they made on each album in a list.",
        Project_Name: "COM2025 Coursework - Django Web Application",
        Skills: ["Django", "Python", "HTML", "CSS", "JavaScript"],
      },
      {
        Project_Name: "COM2027 Coursework - Software Engineering Project",
        Project_Description:
          "Created Project Workfox, a full stack web application which was functional and interactive. The purpose of the application was to further improve an employees retention and engagement, whilst working from home. Features that I implemented: a weather widget that allows the user to find the weather of location; maps & activities feature that shows activities around the user based on current weather; and a BeReal feature implemented using SSE (real time client streaming requirement).",
        Skills: ["Django", "Python", "HTML", "JavaScript", "APIs"],
      },
      {
        Project_Description:
          "Further developed the ResNet-18 Model (supplemented by PyTorch) to classify whether a breast ultrasound was cancerous or non-cancerous. Hyper-parameter tuning was performed: Epochs, learning rate, momentum, dropout probability, weight decay and batch size. Additional layers were also added to add randomness and to stop the model from remembering rather than learning. All these modifications aided in the increase in AUC and overall accuracy of the model.",
        Project_Name: "COM2028 Coursework - Classification of Ultrasounds",
        Skills: ["Scikit-Learn", "PyTorch", "Python"],
      },
    ],
  };
  return jsonData.swiper;
}
export default async function ProjectRota() {
  const projects = await fetchData();
  return (
    <div className="flex flex-col items-center justify-center relative overflow-hidden rounded-xl py-4 px-4 align-top dark:bg-customPeach size-auto ">
      <h1 className="text-lg font-medium">My favourite Projects</h1>

      <Swiper
        key={1}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full w-full rounded-lg"
      >
        {projects.map((project) => (
          <SwiperSlide
            key={project.id}
            className="flex flex-col items-center justify-center w-full h-full rounded-xl dark:bg-customPurple p-4"
          >
            <Image
              className="justify-center items-center sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-full"
              src="/cat.png"
              alt=""
              width="128"
              height="128"
            />
            <h2 className="lg:text-xl md:text-base underline font-bold break-words">
              {project.Project_Name}
            </h2>
            <p className=" lg:text-xl md:text-base">
              {project.Project_Description}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
