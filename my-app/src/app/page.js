import NavBar from "./components/NavBar"
import ViewTasks from "./components/ViewTasks";
import "./globals.css";

export default function Home() {
    return (
        <>
            <NavBar />
            <main className="container mx-auto px-20 my-5">
                <ViewTasks />
            </main>
        </>
    )
}