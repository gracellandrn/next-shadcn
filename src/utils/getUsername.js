//hanya bisa dipanggil di server component
//utk menghindari ini dipanggil dlm client component yg sudah pasti akan break, bisa tambahin
import "server-only";

import { cookies } from "next/headers";

export async function getUsername() {
    const cookieStore = await cookies();
    const username = cookieStore.get("username").value;

    return username;
}