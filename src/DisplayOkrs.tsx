import {Frown, Trash2} from "lucide-react";
import {OKRType} from "./okr-types.ts";

type DisplayOkrsProps = {
  okrs: OKRType[]
  setOkrs: React.Dispatch<React.SetStateAction<OKRType[]>>

}

export function DisplayOkrs({
                              okrs,
                              setOkrs,

                            }: DisplayOkrsProps) {

  return (
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
  )
}