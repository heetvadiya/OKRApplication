import { useState } from "react";

function App() {
  const initialObjectives: string[] = [
    // "Build a frontend devloper team",
    // "Build a Backend devloper team",
    // "Build a testing team",
  ];

  const [objectives, setObjectives] = useState<String[]>([]);
  const [newObjective, setNewObjective] = useState<String>("");

  function addObjective(){
    setObjectives([...objectives, newObjective ]);
  }
  return (
    <>
      <div className="border px-4 py-8 space-y-4">
        <div className="space-x-4">
          <input className="border" type="text" placeholder="Add Objective" onChange={(e) => setNewObjective(e.target.value)}/>
          <button className="bg-blue-400 px-2 py-1 rounded-md text-white ring-2 ring-gray-800 hover:bg-blue-500" onClick={addObjective}>Add Objective</button>
        </div>
        <div>
          {objectives.length > 0 ? (
            objectives.map((objective) => {
              return <p>{objective}</p>;
            })
          ) : (
            <p>No Objectives</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
