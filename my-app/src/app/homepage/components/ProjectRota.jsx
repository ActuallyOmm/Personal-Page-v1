"use client";
import React from "react";
import ProjectClass from "@/app/components/DRY/ProjectClass";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Tile from "@/app/components/DRY/Tile";

async function getProjects() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/projects/records?sort=-updated&limit=4",
    { cache: "no-store" }
  );
  const data = await res.json();

  if (Array.isArray(data)) {
    return data;
  } else {
    if (data.items && Array.isArray(data.items)) {
      const projects = data.items;
      const myArray = [];
      for (let p = 0; p < 4; p++) {
        const project = new ProjectClass(
          projects[p].id,
          projects[p].Project_Name,
          projects[p].Project_Description
        );
        myArray.push(project);
      }
      return myArray;
    } else {
      // If you can't find an array, return an empty array or handle accordingly
      return [];
    }
  }
}

export default async function ProjectRota() {
  const projects = await getProjects();
  return (
    <div className="flex flex-col items-center justify-center relative overflow-hidden rounded-xl py-4 px-4 align-top dark:bg-customPeach size-auto ">
      {/* <h1 className="text-lg font-medium">My favourite Projects</h1> */}

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        size
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
              {project.name}
            </h2>
            <p className=" lg:text-xl md:text-base">{project.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
