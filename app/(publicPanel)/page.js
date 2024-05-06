import Hero from "./ui/Hero";
import AboutVision from "./ui/AboutVision";
import Footer from "./ui/Footer";
import CourseSection from "./ui/CourseSection";
import Course from "../models/Course";
import ConnectDb from "../utils/ConnectDb";

export default async function Home() {
  await ConnectDb();
  
  let courses = await Course.find()
  return (
   <>
   <Hero/>
   <AboutVision/>
   <CourseSection courses={courses}/>
   <Footer/>
   </>
  );
}
