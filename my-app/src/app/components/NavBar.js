import AddTask from "./AddTask";

export default function NavBar( updateRequired ) {

    return (
        <div className="navbar bg-base-300">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">SiimNotes</a>
            </div>
            <div className="flex-none">
                <AddTask />
            </div>
        </div>
    )
}