import React from "react";
import Image from "next/image";
const Description = () => {
  return (
    <div className="">
      <div className="rounded-xl py-2 px-4 dark:bg-customPeach size-auto">
        <div className="text-lg font-medium">
          <h1>Who am I?</h1>
        </div>

        <Image
          className="relative items-center justify-center w-auto h-56 p-2 grid place-items-center"
          src="/IRL pfp.png"
          alt=""
          width="512"
          height="512"
        ></Image>
        <div className="text-sm">
          <p>
            As mentioned in the box above, I'm Omm. I'm an aspiring software
            engineer in my 3rd year, studying Computer Science at the
            Univerisity of Surrey. I'm from the South East of London, and have
            been studying Computer Science throughout my years in academia.
          </p>
          <br></br>
          <p>
            Whilst learning, I've been able to further develop and refine my
            abstraction skills within a programming setting. During my time at
            sixth form, I created several projects that utilised OOP (i.e.,
            BlackJack, Queue Testing System, etc...). As a result of this, I've
            grown a liking to object oriented programming, especially in backend
            development, when designing a web application.
          </p>
          <br></br>
          <p>
            Regarding experience, I was recently given the opportunity to be a
            Peer Assisited Lab Helper for the Operating Systems module
            (COM1032). This role taught me how to effective communicate complex
            concepts in a simple comprehensible manner to the first year
            students. In addition, I was also the Graphic Designer for the The
            University Of Surrey Computer Science Society; I created the current
            banner, and designed posters for upcoming events.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
