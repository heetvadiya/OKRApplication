import {useState} from "react";
import {Frown} from "lucide-react";

type KeyResultType = {
  title: string,
  initialValue: number,
  currentValue: number,
  targetValue: number
  metrics: string
}

type OKRType = {
  objective: string
  keyResults: KeyResultType[];
}


function App() {
  const newKeyResult: KeyResultType = {
    title: "",
    initialValue: 0,
    currentValue: 0,
    targetValue: 0,
    metrics: "",
  }

  const [newObjective, setNewObjective] = useState<string>("");
  const [keyResults, setKeyResults] = useState<KeyResultType[]>([newKeyResult]);
  const [okrs, setOkrs] = useState<OKRType[]>([]);

  function addObjective() {
    let newOKR: OKRType = {
      objective: newObjective,
      keyResults: keyResults
    }
    setOkrs([...okrs, newOKR]);
  }

  function addNewKeyResult() {
    setKeyResults([...keyResults, newKeyResult]);
  }

  return (
    <div>
      <div className="mx-8 my-4 flex flex-row">
        <div className="border-black border-2 px-4 py-8 space-y-4 rounded-md">
          <p className="font-bold text-3xl">Create Objective Form</p>
          <div className="space-y-4">
            <div className="space-x-4 max-w-2xl px-4">
              <label htmlFor="objective-input" className="ml-4">New Objective</label>
              <input
                className="w-full px-1 py-2 border border-blue-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1 "
                type="text"
                placeholder="Add Objective"
                onChange={(e) => setNewObjective(e.target.value)}/>
            </div>

            {
              keyResults?.map((keyResult, index) => (
                <>
                  <div id="new-key-result" className="space-y-2 bg-gray-50 rounded-md py-2" key={index}>
                    <div className="space-x-4 max-w-2xl px-4">
                      <label htmlFor="objective-input" className="ml-4">New KeyResults</label>
                      <input
                        className="w-full px-1 py-2 border border-blue-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1 "
                        type="text"
                        placeholder="Add KeyResult Title"
                        onChange={(e) => {
                          keyResult.title = e.target.value;
                          setKeyResults([...keyResults])
                        }}/>
                    </div>
                    <div className="flex ml-4">

                      <div className="space-x-4 max-w-2xl px-4">
                        <input
                          className="w-full px-1 py-2 border border-blue-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1 "
                          type="number"
                          placeholder="Initial Value"
                          onChange={(e) => {
                            keyResult.initialValue = parseInt(e.target.value);
                            setKeyResults([...keyResults])
                          }}/>
                      </div>
                      <div className="space-x-4 max-w-2xl px-4">
                        <input
                          className="w-full px-1 py-2 border border-blue-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1 "
                          type="number"
                          placeholder="Current Value"
                          onChange={(e) => {
                            keyResult.currentValue = parseInt(e.target.value);
                            setKeyResults([...keyResults])
                          }}/>
                      </div>
                      <div className="space-x-4 max-w-2xl px-4">
                        <input
                          className="w-full px-1 py-2 border border-blue-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1 "
                          type="number"
                          placeholder="Target Value"
                          onChange={(e) => {
                            keyResult.targetValue = parseInt(e.target.value);
                            setKeyResults([...keyResults])
                          }}/>
                      </div>
                    </div>
                    <div className="space-x-4 max-w-2xl px-4">
                      <input
                        className="px-1 py-2 border border-blue-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1 ml-4"
                        type="text"
                        placeholder="Add Metrics"
                        onChange={(e) => {
                          keyResult.metrics = e.target.value;
                          setKeyResults([...keyResults])
                        }}/>
                    </div>
                    <button>
                      Delete Key Result
                    </button>
                  </div>
                </>
              ))
            }

          </div>

          <button
            className="bg-gray-400 px-2 py-1 ml-4 rounded-md text-white ring-2 ring-gray-800 hover:bg-gray-500"
            onClick={addNewKeyResult}>Add Key Result
          </button>
          <div className="grid justify-items-center">
            <button
              className="bg-blue-400 px-2 py-1 rounded-md text-white ring-2 ring-gray-800 hover:bg-blue-500 justify-self-end"
              onClick={addObjective}>Add Objective
            </button>
          </div>
        </div>
      </div>
      <div className="border-2 mx-8 my-4 px-8 py-4 rounded-md border-black space-y-8">
        {okrs.length > 0 ? (
          okrs.map((okr) => {
            return <div className="space-y-4 bg-blue-200 px-2 py-4 rounded-md">
              <p>Objective Title : {okr.objective}</p>
              {
                okr.keyResults.map((keyResult) => {
                  return <div className="bg-gray-50">
                    <p> Key Results: </p>
                    <p>Title : {keyResult.title}</p>
                    <p>Initial Value : {keyResult.initialValue}</p>
                    <p>Current Value: {keyResult.currentValue}</p>
                    <p>Target Value: {keyResult.targetValue}</p>
                    <p>Metrics : {keyResult.metrics}</p>
                  </div>;
                })
              }
            </div>
          })
        ) : (
          <div className="grid justify-items-center"><Frown/><p>No Objectives to show</p></div>
        )}
      </div>
    </div>
  );
}

export default App;
