"use server";

import { getUsername } from "@/utils/getUsername";
import { revalidatePath } from "next/cache";

export async function createNoteAction(_, formData) {
    const title = formData.get("title");
    const content = formData.get("content");
    const username = await getUsername();

    // let success=false;

    try {
        await fetch("https://v1.appbackend.io/v1/rows/Lc4tUUMP1Fhr", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([{ title, content, username }])
        });
        // success=true;
    } catch (error) {
        //success=false
        //ga masalah karna akan di log di server
        console.log(error)
        return {
            status: "error",
            message: "Can not add the note"
        }
    }

    revalidatePath("/notes");

    return {
        status: "success",
        message: "Note has been added"
    }

    // if(success){
    //     revalidatePath("/notes");
    //     return {
    //         status: "success",
    //         message: "Note has been added"
    //     }
    // }
    // return{}
}
