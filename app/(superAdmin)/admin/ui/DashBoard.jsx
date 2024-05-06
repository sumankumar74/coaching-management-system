// components/AdminDashboard.js

import Course from "@/app/models/Course";
import User from "@/app/models/User";
import DashBoardCard from "./DashBoardCard";


const AdminDashboard = async () => {
  //sample data
  const totalStudents = await User.countDocuments({ status: true });
  const totalCourses = await Course.countDocuments({ status: true });
  const totalAdmissions = await User.countDocuments();
  const totalPayments = await Course.countDocuments({ status: true });


  let CountData= [
    {
      name:"Total Students",
      value:totalStudents
    },
    {
      name:"Total Courses",
      value:totalCourses
    },
    {
      name:"Total Admissions",
      value:totalAdmissions
    },
    {
      name:"Total Payment",
      value:totalPayments
    }
  ]

  return (
  <div className="flex md:flex-row flex-col flex-1 gap-4 px-10 py-5 ">
    {CountData.map((card)=><DashBoardCard text={card.name} count={card.value}/>)}
  </div>
  );
};

export default AdminDashboard;
