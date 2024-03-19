import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import ProjectsMasonry from "@components/ProjectsMasonry";
import CallToActionSection from "@components/sections/CallToAction";

import { getSortedProjectsData } from "@library/projects";

import Link from "next/link";

const Projects3 = (props) => {
  return (
    <Layouts fullWidth>
      <PageBanner
        pageTitle={"Designing a <br>Better World Today"}
        breadTitle={"Portfolio"}
        align={"center"}
      />

      <ProjectsMasonry projects={props.data.user.projects} masonry />

      <CallToActionSection />
    </Layouts>
  );
};
export default Projects3;

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
