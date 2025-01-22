import {useState} from "react";
import {Frown, Trash2} from "lucide-react";
import {KeyResultType, OKRType} from "./okr-types.ts";
import {OkrForm} from "./OkrForm.tsx";


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

  function deleteKeyResults(index: number) {
    if (keyResults.length > 1) {
      keyResults.splice(index, 1);
    } else {
      keyResults[0].title = "";
      keyResults[0].initialValue = 0;
      keyResults[0].currentValue = 0;
      keyResults[0].targetValue = 0;
      keyResults[0].metrics = "";
    }
    setKeyResults([...keyResults])
  }


  return (
    <div>
      <OkrForm setNewObjective={setNewObjective} keyResults={keyResults} setKeyResults={setKeyResults}
               deleteKeyResults={deleteKeyResults} addNewKeyResult={addNewKeyResult} addObjective={addObjective}
               />
      <div className="border-2 mx-8 my-4 px-8 py-4 rounded-md border-gray-300 space-y-8">
      {okrs.length > 0 ? (
        okrs.map((okr, index) => {
          return <div className="space-y-4 bg-blue-200 px-4 py-8 rounded-md">
            <div className="flex justify-between">
              <p className="flex-grow">Objective Title : {okr.objective}</p>
              <button className="bg-red-400 px-2 py-1 rounded-md text-white
                       focus:ring-gray-800 hover:bg-red-500 justify-self-end border-none mr-4
                       "
                      onClick={() => {
                        okrs.splice(index, 1);
                        setOkrs([...okrs]);
                      }}>
                <div className="flex space-x-1"><Trash2/>
                  <span>Delete Objective</span></div>
              </button>
            </div>
            {
              okr.keyResults.map((keyResult) => {
                return <div className="bg-gray-50 px-2 py-4 rounded-md">
                  <p> Key Results </p>
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
)
  ;
}

export default App;
