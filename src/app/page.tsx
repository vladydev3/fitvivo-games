"use client";

import { useState } from "react";
import LeaderboardTable from "./components/leaderboard-table";
import EventFilter from "./components/event-filter";
import GenderSelector from "./components/gender-select";
import { athletesMale, athletesFemale } from "../data/athletes";

const events = ["General", "Skilful", "Dukic", "Firestorm", "Infinity Quads", "Midline Climb", "Chad", "Track and Field", "Clead Ladder", "Shoulder Shutdown", "Wall Break", "Triplet", "War Machine"];
const genders = ["Masculino", "Femenino"];

export default function Leaderboard() {
  const [selectedEvent, setSelectedEvent] = useState("General");
  const [selectedGender, setSelectedGender] = useState("Masculino");

  const athletes =
    selectedGender === "Masculino" ? athletesMale : athletesFemale;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-800 py-12 px-4 sm:px-6 lg:px-8 dark">
      <div className="max-w-3xl mx-auto">
        <img src="/fitvivo.png" alt="Fitvivo Logo" className="mx-auto h-24 mb-4" />
        <h1 className="text-4xl font-bold text-center text-blue-300 mb-8">
          FitVivo Games - Leaderboard
        </h1>
        <div className="flex gap-2 mb-6 justify-center">
          <EventFilter
            events={events}
            selectedEvent={selectedEvent}
            onSelectEvent={setSelectedEvent}
          />
          <GenderSelector
            genders={genders}
            selectedGender={selectedGender}
            onSelectGender={setSelectedGender}
          />
        </div>
        <LeaderboardTable
          athletes={athletes}
          selectedEvent={selectedEvent}
        />
      </div>
    </div>
  );
}