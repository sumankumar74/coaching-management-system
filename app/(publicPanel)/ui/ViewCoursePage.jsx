import IconBadges from "@/components/IconBadges";
import { Button } from "@/components/ui/button";
import { formatDuration, formatPrice } from "@/lib/format";
import { BarChart, Clock, List, ListChecks, Presentation } from "lucide-react";
import Image from "next/image";

const ViewCoursePage = ({ course }) => {
    return (
        <>
        <div className="w-full h-auto bg-teal-600" >
            <div className="px-[10%] py-10 flex flex-col gap-y-3 w-9/12 h-full ">
                <h1 className="text-white text-3xl capitalize ">{course.title}</h1>
                <div className="flex items-center  text-white text-md ">
                  <List  className="w-4 h-4 mr-2"/>
                    <span>{course.category?.name}</span>
                </div>
                <p className="text-md text-white">{course.description}</p>
            </div>
            <div className="flex justify-end items-start right-[50px]  ">
                <div className="w-3/12 h-auto overflow-hidden bg-white border-teal-600 rounded-md border -mt-40">
                    <Image  width={300} height={250} className="object-cover" src={course.image} alt={course.title} />
                    <div className="p-4 space-y-2">
                        <div className="flex items-center gap-x-2 ">
                            <IconBadges size="sm" icon={Presentation} />
                            <span>Instructor:{course.instructor}</span>
                        </div>
                        <div className="flex items-center gap-x-2 ">
                            <IconBadges size="sm" icon={Clock} />
                            <span>Duration:{formatDuration(course.duration)}</span>
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <IconBadges size="sm" icon={ListChecks} />
                            <span>Prerequisites:{course.prerequisites}</span>
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <IconBadges size="sm" icon={BarChart} />
                            <span>Difficulty:{course.difficulty}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-2xl">{formatPrice(course.fee)}</span>
                            <Button size="lg">Enroll Now</Button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        
    </>
    );
};

export default ViewCoursePage;