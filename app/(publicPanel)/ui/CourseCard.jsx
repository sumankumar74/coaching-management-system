import Image from "next/image";
import Link from "next/link";
const CourseCard = ({ course }) => {
    return (
        <div className="bg-white shadow-md rounded-lg  py-2 mb-5">
            <div className="flex items-center justify-center">
                <Image className=" object-cover" height={50} width={100} src={`/course_images/${course.image}`} alt={course.title} />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-2">{course.description}</p>
                <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Fee: ₹{course.fee}</span>
                    <span className="text-gray-600">Duration: {course.duration} Weeks</span>
                </div>
                <div className="flex gap-2 flex-col">
                    <span className="text-gray-600">Difficulty: {course.difficulty}</span>
                    <span className="text-gray-600">Category: {course.name}</span>
                </div>
            </div>
            <div className="flex justify-center w-full px-2 mb-2">
                <Link href={`/course/${course._id}`} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full text-center">
                    Enroll Now
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;