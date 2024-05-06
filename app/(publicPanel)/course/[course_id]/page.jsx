import React from 'react'
import ViewCoursePage from '../../ui/ViewCoursePage'
import Course from '@/app/models/Course';


const page = async ({params}) => {
    let courseId = params.course_id;

    let course = await Course.findById(courseId)

  return (
    <div>
        <ViewCoursePage course={course}/>
    </div>
  )
}

export default page