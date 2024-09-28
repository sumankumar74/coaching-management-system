import Hero from "./ui/Hero";
import CourseSection from "./ui/CourseSection";
import Course from "../models/Course";
import ConnectDb from "../utils/ConnectDb";
import CategoriesBadges from "./ui/CategoriesBadges";
import Category from "../models/Category";
import { getCourse } from "../actions";

export default async function Home({searchParams}) {
  await ConnectDb();
  let courses = await getCourse({...searchParams})
  let categories = await Category.find({})
  return (
   <>
   <Hero/>
   <CategoriesBadges items={categories}/>
   <CourseSection courses={courses}/>
   
   </>
  );
}
