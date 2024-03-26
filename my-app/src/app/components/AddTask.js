"use client"
import { v4 as uuidv4 } from 'uuid';

export default function AddTask() {
    async function addNote() {
        try {
            console.log("TEST")
            const content = {
                "title": "Title",
                "text": "Description",
                "id": uuidv4()
            }
            const res = await fetch("api/Note",
                {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(content)
                }
            )
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <button className="btn bg-secondary" onClick={addNote}>
            Create new note
        </button>
    )
}