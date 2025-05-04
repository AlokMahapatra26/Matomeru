import { currentUser } from "@clerk/nextjs/server";
import { UploadThingError } from "uploadthing/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";


const f = createUploadthing();

export const ourFileRouter = {
    pdfUploader : f({pdf: {maxFileSize : "8MB"}}).
        middleware(
            async({ req }) => {
                const user = await currentUser();
                if(!user) throw new UploadThingError("Unauthorized")
                return { userId : user.id }
            }
        ).onUploadComplete(async({metadata , file}) => {
            console.log('upload completed' , metadata.userId);
            console.log('file url' , file.ufsUrl);
            // Ensure the return type is void or a compatible JsonObject
            return { userId: metadata.userId, file };
        })
} satisfies FileRouter;


export type OurFileRouter = typeof ourFileRouter;


// import { currentUser } from "@clerk/nextjs/server";
// import { UploadThingError } from "uploadthing/server";
// import { createUploadthing, type FileRouter } from "uploadthing/next";


// const f = createUploadthing();

// export const ourFileRouter = {
//     pdfUploader : f({pdf: {maxFileSize : "8MB"}}).
//         middleware(
//             async({ req }) => {
//                 const user = await currentUser();
//                 if(!user) throw new UploadThingError("Unauthorized")
//                 return { userId : user.id }
//             }
//         ).onUploadComplete(async({metadata , file}) => {
//             console.log('upload completed' , metadata.userId);
//             console.log('file url' , file.url)
//             return { userId: metadata.userId , file : file}
//         })
// } satisfies FileRouter;


// export type OurFileRouter = typeof ourFileRouter;