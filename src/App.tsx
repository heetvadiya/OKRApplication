import {useState} from "react";

function App() {
    const initialObjectives: string[] = [
        // "Build a frontend devloper team",
        // "Build a Backend devloper team",
        // "Build a testing team",
    ];

    const [objectives, setObjectives] = useState<String[]>([]);
    const [newObjective, setNewObjective] = useState<String>("");

    function addObjective() {
        setObjectives([...objectives, newObjective]);
    }

    return (
        <>
            <div className="mx-8 my-4">
                <div className="border-black border-2 px-4 py-8 space-y-4">
                    <p className="font-bold">Create Objective Form</p>
                    <div className="space-y-4">
                        <div className="space-x-4 max-w-2xl px-4">
                            <label htmlFor="objective-input" className="ml-4">New Objective</label>
                            <input
                                className="w-full px-1 py-2 border border-amber-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1 "
                                type="text"
                                placeholder="Add Objective"
                                onChange={(e) => setNewObjective(e.target.value)}/>
                        </div>
                        <div className="space-x-4 max-w-2xl px-4">
                            <label htmlFor="objective-input" className="ml-4">New KeyResults</label>
                            <input
                                className="w-full px-1 py-2 border border-amber-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1 "
                                type="text"
                                placeholder="Add KeyResults"
                                onChange={(e) => setNewObjective(e.target.value)}/>
                        </div>
                        <div className="flex ml-4">

                            <div className="space-x-4 max-w-2xl px-4">
                                <input
                                    className="w-full px-1 py-2 border border-amber-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1 "
                                    type="text"
                                    placeholder="Initial Value"
                                    onChange={(e) => setNewObjective(e.target.value)}/>
                            </div>
                            <div className="space-x-4 max-w-2xl px-4">
                                <input
                                    className="w-full px-1 py-2 border border-amber-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1 "
                                    type="text"
                                    placeholder="Current Value"
                                    onChange={(e) => setNewObjective(e.target.value)}/>
                            </div>
                            <div className="space-x-4 max-w-2xl px-4">
                                <input
                                    className="w-full px-1 py-2 border border-amber-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1 "
                                    type="text"
                                    placeholder="Target Value"
                                    onChange={(e) => setNewObjective(e.target.value)}/>
                            </div>
                        </div>
                        <div className="space-x-4 max-w-2xl px-4">
                            <input
                                className="px-1 py-2 border border-amber-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1 ml-4"
                                type="text"
                                placeholder="Add Metrics"
                                onChange={(e) => setNewObjective(e.target.value)}/>
                        </div>
                    </div>
                    <div className="grid justify-items-center">
                    <button
                        className="bg-blue-400 px-2 py-1 rounded-md text-white ring-2 ring-gray-800 hover:bg-blue-500 justify-self-center"
                        onClick={addObjective}>Add Objective
                    </button>
                        <button
                            className="bg-blue-400 px-2 py-1 rounded-md text-white ring-2 ring-gray-800 hover:bg-blue-500 justify-self-center"
                            onClick={addObjective}>Add Objective
                        </button>
                    </div>
                </div>
            </div>
            <div className="border-2 border-black">
                {objectives.length > 0 ? (
                    objectives.map((objective) => {
                        return <p>{objective}</p>;
                    })
                ) : (
                    <p>No Objectives</p>
                )}
            </div>
        </>
    );
}

export default App;
