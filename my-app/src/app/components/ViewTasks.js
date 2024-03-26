"use client";

import { useEffect, useState } from "react";
import Task from "./Task";

export default function ViewTasks() {

  const [notes, setNotes] = useState([])
  const [isLoading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const res = await fetch("api/Note")
      const responseData = await res.json()
      setNotes(responseData)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) return (
    <div className="flex items-center justify-center">
      <span className="loading loading-infinity loading-lg "></span>
    </div>
  )

  return (
    <div className="card-container">
      {notes.map((note, index) => {
        return <Task key={note.id} taskName={note.title} description={note.text} id={note.id} dataFetcher={fetchData} />
      })}
    </div>
  )
}