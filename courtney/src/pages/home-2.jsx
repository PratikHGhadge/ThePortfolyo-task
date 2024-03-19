import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "@library/posts";

import HeroOneSection from "@components/sections/HeroOne";
import AboutSection from "@components/sections/About";
import ServicesSection from "@components/sections/Services";
import SkillsOneSection from "@components/sections/SkillsOne";
import SkillsTwoSection from "@components/sections/SkillsTwo";
import LatestPostsSection from "@components/sections/LatestPosts";
import CallToActionSection from "@components/sections/CallToAction";

const TestimonialSlider = dynamic(
  () => import("@components/sliders/Testimonial"),
  { ssr: false }
);

const Home2 = (props) => {
  return (
    <Layouts social_handles={props.data.user.social_handles} fullWidth>
      <HeroOneSection Data={props.data.user.about} />
      <AboutSection Data={props.data.user.about} />
      <ServicesSection Data={props.data.user.services} />
      <SkillsOneSection />
      <SkillsTwoSection Data={props.data.user.skills} />
      <TestimonialSlider Data={props.data.user.testimonials} />
      <LatestPostsSection posts={props.posts} />
      <CallToActionSection />
    </Layouts>
  );
};
export default Home2;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  const data = await (
    await fetch(
      `https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`
    )
  ).json();
  return {
    props: {
      posts: allPosts,
      data,
    },
  };
}
