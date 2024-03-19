import { useState } from "react";

import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import ProjectsGrid from "@components/ProjectsGrid";
import CallToActionSection from "@components/sections/CallToAction";

import { getSortedProjectsData } from "@library/projects";

import Link from "next/link";

const Projects = (props) => {
  return (
    <Layouts
      rightPanelBackground={"/img/person/bg-4.jpg"}
      rightPanelImg={"/img/person/5.png"}
    >
      <PageBanner
        pageTitle={"Designing a <br>Better World Today"}
        breadTitle={"Projects"}
        align={"center"}
      />

      <ProjectsGrid projects={props.data.user.projects} columns={1} />

      <CallToActionSection />
    </Layouts>
  );
};
export default Projects;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();
  const data = await (
    await fetch(
      `https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`
    )
  ).json();

  return {
    props: {
      projects: allProjects,
      data,
    },
  };
}
