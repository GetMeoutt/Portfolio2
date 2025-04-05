"use client";
import React, { useEffect } from "react";

import  Navbar  from "@/components/ui/navbar";
import Hero from "@/components/ui/Hero";
import Project2 from "@/components/ui/project2";
import Skills2 from "@/components/ui/skills2";
import Contact2 from "@/components/ui/contact2";
import GithubContribution from "@/components/ui/github-contribution";
// import GithubContribution from "@/components/ui/github-contribution";
export default async function Home() {

  return (
   
    <div className=" overflow-hidden bg-[rgb(20,19,17)]">
      <Navbar />
      <Hero />
      <Project2/>
      <GithubContribution/>  
      <Skills2/>
      <Contact2 /> 
      
    </div>
    
  );
}
