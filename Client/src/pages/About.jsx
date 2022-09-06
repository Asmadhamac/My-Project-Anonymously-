import React from "react";
import TopBar from "../Components/topbar/TopBar";
import Header from "../Components/header/Header";

const About = () => {
  return (
    <div>
      <TopBar />
      <Header />

      <div className="flex justify-center items-center font-bold py-10">
        About
      </div>
      <div className="flex justify-center w-3/5 m-auto py-15">
        Annoymously is a free online personal journaling and story telling,
        where you can get help and others comments. Easily keep stories and
        ideas securely on our page. get Educated, and Inspired. Annoymously is a
        free online story telling and personal journal, where you can get help
        and others comments. Easily keep stories and ideas securely on our page.
        get Educated, and Inspired. Annoymously is a free online story telling
        and personal journal, where you can get help and others comments. Easily
        keep stories and ideas securely on our page. get Educated, and Inspired.
      </div>
    </div>
  );
};

export default About;
