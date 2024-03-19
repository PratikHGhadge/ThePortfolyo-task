import { useState } from "react";

import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import ProjectsGrid from "@components/ProjectsGrid";
import CallToActionSection from "@components/sections/CallToAction";

import { getSortedProjectsData } from "@library/projects";

import Link from "next/link";

const Projects4 = (props) => {
  return (
    <Layouts fullWidth>
      <PageBanner
        pageTitle={"Designing a <br>Better World Today"}
        breadTitle={"Portfolio"}
        align={"center"}
      />

      <ProjectsGrid projects={props.data.user.projects} columns={2} />

      <CallToActionSection />
    </Layouts>
  );
};
export default Projects4;

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
