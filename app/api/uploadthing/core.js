import { createUploadthing } from "uploadthing/next";


const f = createUploadthing();

//todo task

export const OurFileRouter = {
    courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
        .middleware(() => { })
        .onUploadComplete(() => { })
}
