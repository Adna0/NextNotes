import { createRef, useState } from "react"

export default function Task({ taskName, description, id, dataFetcher }) {

    const [isHidden, setHidden] = useState(true)
    const [isEditing, setEditing] = useState(false)

    const titleObject = createRef()
    const textObject = createRef()

    function hideButton() {
        setHidden(!isHidden)
        setEditing(!isEditing)
    }

    async function saveNote() {
        try {
            setEditing(false)
            const content = {
                "title": titleObject.current.innerHTML.replaceAll("<br>", "\n"),
                "text": textObject.current.innerHTML.replaceAll("<br>", "\n"),
                "id": id
            }
            const res = await fetch("api/Note", {
                method: "PATCH",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(content)
            })
            setHidden(true)
            dataFetcher()
        } catch (err) {
            console.log(err)
            dataFetcher()
        }
    }
    async function deleteNote() {
        try {
            const res = await fetch("api/Note", {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({"id": id})
            })
            dataFetcher()
        } catch (err) {
            console.log(err)
            dataFetcher()
        }
    }

    return (
        <div className="card w-80 bg-base-200 shadow-xl">
            <div className="card-body">
                <div className="flex justify-between">
                    <h2 className="card-title" ref={titleObject} contentEditable={isEditing}>{taskName}</h2>
                    <div>
                        <button className={"btn" + (isHidden ? "" : " hidden")} onClick={hideButton}>
                            EDIT
                        </button>
                        <button className={"btn" + (isHidden ? " hidden" : "")} onClick={saveNote}>
                            SAVE
                        </button>
                        <button className={"btn" + (isHidden ? " hidden" : "")} onClick={deleteNote}>
                            DELETE
                        </button>
                    </div>
                </div>
                <p ref={textObject} contentEditable={isEditing}>{description}</p>
            </div>
        </div>
    )
}