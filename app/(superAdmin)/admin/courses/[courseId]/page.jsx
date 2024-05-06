import Course from "@/app/models/Course";
import ConnectDb from "@/app/utils/ConnectDb"
import IconBadges from "@/components/IconBadges";
import { IndianRupee, LayoutDashboard } from "lucide-react";
import TitleForm from "./_components/TitleForm";
import DescriptionForm from "./_components/description-form";
import InstructorForm from "./_components/instructor-form";
import FeeForm from "./_components/fee-form";
import DurationForm from "./_components/duration-form";
import DifficultyForm from "./_components/difficulty-form";
import CategoryForm from "./_components/category-form";
import Category from "@/app/models/Category";
import EnrollLimitForm from "./_components/enroll-form";
import { Action } from "./_components/actions";
import ImageForm from "./_components/image-form";
import PrerequisitesForm from "./_components/prerequisites-form";

const page = async ({ params }) => {
    await ConnectDb();
    const course = await Course.findById(params.courseId)
    const categories = await Category.find();
    const { courseId } = params

    const requiredField = [
        course.title,
        course.description,
        course.fee,
        course.instructor,
        course.duration,
        course.category,
        course.difficulty,
        course.prerequisites,
        course.image
    ]

    const totalFields = requiredField.length;
    const completedFields = requiredField.filter(Boolean).length;
    const completedText = `${completedFields}/${totalFields} completed`

    const isCompleted = requiredField.every(Boolean)

    const options = [
        {
            label:'Beginner',
            value:'Beginner'
        },
        {
            label:'Intermediate',
            value:'Intermediate'
        },
        {
            label:'Advanced',
            value:'Advanced'
        }
    ] 

    return (
        <div>
            <div className="p-6">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-y-2">
                        <h1 className="text-2xl font-medium">Course Setup</h1>
                        <span className="text-sm font-slate-600">Complete All Fields : {completedText}</span>
                    </div>
                    <Action disabled={!isCompleted} courseId={params.courseId} isPublish={course.status}/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                    <div>
                        <div className="flex items-center gap-x-2">
                            <IconBadges icon={LayoutDashboard} />
                            <h2 className="text-xl">Customize Your Course</h2>
                        </div>
                        <TitleForm initialData={course} courseId={courseId} />
                        <DescriptionForm initialData={course} courseId={courseId} />
                        <InstructorForm initialData={course} courseId={courseId} />
                        <CategoryForm initialData={course} courseId={courseId} options={categories.map((cat)=>({
                            label:cat.name,
                            value:cat._id,
                        }))}/>
                         <ImageForm initialData={course} courseId={courseId} />

                    </div>
                    <div>
                        <div className="flex items-center gap-x-2">
                            <IconBadges icon={IndianRupee} />
                            <h2 className="text-xl">Sell your course</h2>
                        </div>
                        <FeeForm initialData={course} courseId={courseId} />
                        <DurationForm initialData={course} courseId={courseId} />
                        <DifficultyForm initialData={course} courseId={courseId} options={options}/>
                        <EnrollLimitForm initialData={course} courseId={courseId} />    
                        <PrerequisitesForm initialData={course} courseId={courseId} />    
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page