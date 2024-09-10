import React from "react";

export default function Hero() {
  return (
    <div className="mt-16 md:mt-0">
      <div className="flex flex-col my-8 text-center md:text-left">
        <h1 className="font-bold text-4xl leading-normal">
        Step into my digital workshop! 👋😎, <br />
          I'm{" "}
          <span className="ml-1 bg-gradient-to-br from-sky-500 to-cyan-400 text-transparent bg-clip-text">
           Daniel Hagos .......
          </span>
        </h1>
        <p className="text-lg font-light mt-5">
        A Full Stack Developer with a passion for transforming ideas into captivating web experiences. With over 5 years of hands-on wizardry,
         I've been weaving frontend magic with backend sorcery to create seamless, powerful web applications.
        </p>
      </div>
    </div>
  );
}
   
