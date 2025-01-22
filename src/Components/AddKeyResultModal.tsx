import {OKRType} from "../okr-types.ts";
import {useState} from "react";
import {KeyResultType} from "../okr-types.ts";

const newKeyResult: KeyResultType = {
  title:"",
  initialValue: 0,
  currentValue: 0,
  targetValue: 0,
  metrics: "",
}


type AddKeyResultModalProps = {
  isModalOpen: boolean,
  setIsModalOpen:(value:boolean)=>void,
  okrs: OKRType[],
  index: number
  setOkrs: React.Dispatch<React.SetStateAction<OKRType[] | null>>
}

export function AddKeyResultModal(
  {
    isModalOpen,
    setIsModalOpen,
    okrs,
    index,
    setOkrs
  }: AddKeyResultModalProps
) {
  const [keyResult, setKeyResult] = useState<KeyResultType>({...newKeyResult})

  function addNewKeyResult() {
    console.log("our index : " + index)
    okrs[index].keyResults.push(keyResult)
    setOkrs([...okrs])
    setIsModalOpen(false);
    setKeyResult({...newKeyResult});
  }

  return !isModalOpen ? null : (
    <div className="inset-0 bg-black-8s00 bg-opacity-50  fixed flex justify-center items-center">
      <div className="bg-gray-300 space-y-8 px-4 py-8 rounded-md">

        <div className="space-x-4 max-w-2xl px-4 " key={okrs[index].keyResults.length}>
          <label htmlFor="objective-input" className="ml-4">New Key Results</label>
          <input
            className="w-full px-1 py-2 border border-blue-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1 "
            type="text"
            placeholder="Add KeyResult Title"
            value={keyResult.title}
            onChange={(e) => {
              keyResult.title = e.target.value;
              setKeyResult({...keyResult})
            }}
          />
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
                setKeyResult({...keyResult})
              }}
            />
          </div>
          <div className="space-x-4 max-w-2xl px-4">
            <input
              className="w-full px-1 py-2 border border-blue-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1 "
              type="number"
              placeholder="Current Value"
              value={keyResult.currentValue}
              onChange={(e) => {
                keyResult.currentValue = parseInt(e.target.value);
                setKeyResult({...keyResult})
              }}
            />
          </div>
          <div className="space-x-4 max-w-2xl px-4">
            <input
              className="w-full px-1 py-2 border border-blue-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1 "
              type="number"
              placeholder="Target Value"
              value={keyResult.targetValue}
              onChange={(e) => {
                keyResult.targetValue = parseInt(e.target.value);
                setKeyResult({...keyResult})
              }}
            />
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
                setKeyResult({...keyResult})
              }}
            />
          </div>


          <button className="bg-red-400 px-2 py-1 rounded-md text-white
                       focus:ring-gray-800 hover:bg-red-500 justify-self-end border-none mr-4"
          onClick={()=>{
            setIsModalOpen(false);
          }}>
            <span>Cancel</span>
          </button>
          <button
            className="bg-gray-400 px-2 py-1 mr-4 rounded-md text-white hover:bg-gray-500 border-none"
            onClick={addNewKeyResult}
          >Add Key Result
          </button>
        </div>

      </div>
    </div>
  )
}

