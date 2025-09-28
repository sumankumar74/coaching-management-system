import React from 'react'
import ViewCoursePage from '../../ui/ViewCoursePage'
import Course from '@/app/models/Course';
import Category from '@/app/models/Category';
import CategoriesBadges from '../../ui/CategoriesBadges';


const page = async ({params}) => {
    let courseId = params.course_id;

    let course = await Course.findById(courseId).populate("category")
    let category = await Category.find({})

  return (
    <div className='md:px-[5%] h-auto '>
      <CategoriesBadges items={category}/>
        <ViewCoursePage course={course}/>
    </div>
  )
}

export default page