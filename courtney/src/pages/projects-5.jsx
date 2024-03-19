import { useState } from "react";

import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedProjectsData } from "@library/projects";

const ProjectsSlider = dynamic(() => import("@components/sliders/Projects"), {
  ssr: false,
});

const Projects5 = (props) => {
  return (
    <Layouts fullWidth fullWidth100 noFooter>
      <ProjectsSlider projects={props.data.user.projects} />
    </Layouts>
  );
};
export default Projects5;

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
