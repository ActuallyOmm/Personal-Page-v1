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
    <>
      <div className="flex flex-col relative overflow-hidden rounded-xl py-4 px-4 align-top dark:bg-black size-auto ">
        <div className="text-lg font-medium">
          <h1>My favourite Projects</h1>
        </div>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
            }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="rounded-xl"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="size-auto">
                <Tile
                  name={project.name}
                  description={project.description}
                ></Tile>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
