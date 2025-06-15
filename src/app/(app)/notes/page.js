import { Card, CardContent } from "@/components/ui/card";
import moment from "moment";
import { Form } from "./form";
import { getUsername } from "@/utils/getUsername";

export default async function Page() {
    const username = await getUsername();
    const res = await fetch(`https://v1.appbackend.io/v1/rows/Lc4tUUMP1Fhr/?filterKey=username&filterValue=${username}`);
    const { data: notes } = await res.json();

    return (
        <main className="space-y-4 py-8">
            <h3>All notes</h3>
            <Form username={username} />
            {notes.map((note) => {
                return (
                    <Card key={note._id}>
                        <CardContent className="space-y-2">
                            <h3 className="text-lg font-medium">{note.title}</h3>
                            <p className="text-sm">{note.content}</p>
                            <p className="text-sm text-zinc-300">{moment(note.createdAt).format("MMM Do, YYYY")}</p>
                        </CardContent>
                    </Card>
                )
            })}
        </main>
    )
}
