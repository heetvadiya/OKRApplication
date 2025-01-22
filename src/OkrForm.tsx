import {Trash2} from "lucide-react";
import {KeyResultType, OKRType} from "./okr-types.ts";
import {useState} from "react";

type OkrFormProps = {
  setOkrs: React.Dispatch<React.SetStateAction<OKRType[]>>,
  okrs: OKRType[],
  newKeyResult: KeyResultType
}

export function OkrForm(
  {
    setOkrs,
    okrs,
    newKeyResult
  }: OkrFormProps
) {

  const [newObjective, setNewObjective] = useState<string>("");
  const [keyResults, setKeyResults] = useState<KeyResultType[]>([newKeyResult]);
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
    <div className="mx-8 my-4 flex flex-row">
      <div className="border-gray-300 border-2 px-4 py-8 space-y-4 rounded-md">
        <p className="font-bold text-3xl justify-self-center">Create Objective Form</p>
        <div className="space-y-4 bg-gray-50 px-4 py-8">
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
                <div id="new-key-result" className="space-y-2 bg-gray-50 rounded-md py-2 flex-row" key={index}>
                  <div className="space-x-4 max-w-2xl px-4">
                    <label htmlFor="objective-input" className="ml-4">New Key Results</label>
                    <input
                      className="w-full px-1 py-2 border border-blue-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1 "
                      type="text"
                      placeholder="Add KeyResult Title"
                      value={keyResult.title}
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
                        value={keyResult.initialValue}
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
                        value={keyResult.currentValue}
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
                        value={keyResult.targetValue}
                        onChange={(e) => {
                          keyResult.targetValue = parseInt(e.target.value);
                          setKeyResults([...keyResults])
                        }}/>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="space-x-4 max-w-2xl px-4">
                      <input
                        className="px-1 py-2 border border-blue-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1 ml-4"
                        type="text"
                        value={keyResult.metrics}
                        placeholder="Add Metrics"
                        onChange={(e) => {
                          keyResult.metrics = e.target.value;
                          setKeyResults([...keyResults])
                        }}/>
                    </div>
                    <button className="bg-red-400 px-2 py-1 rounded-md text-white
                       focus:ring-gray-800 hover:bg-red-500 justify-self-end border-none mr-4
                       "
                            onClick={() => deleteKeyResults(index)}>
                      <div className="flex space-x-1"><Trash2/>
                        <span>Delete Key Result</span></div>
                    </button>
                  </div>
                </div>
              </>
            ))
          }

        </div>

        <button
          className="bg-gray-400 px-2 py-1 ml-4 rounded-md text-white hover:bg-gray-500 border-none"
          onClick={addNewKeyResult}>Add Key Result
        </button>
        <div className="grid justify-items-center">
          <button
            className="bg-blue-400 px-2 py-1 rounded-md text-white  hover:bg-blue-500 justify-self-end border-none"
            onClick={addObjective}>Add Objective
          </button>
        </div>
      </div>
    </div>
  )
}
