import {Frown, Trash2} from "lucide-react";
import {OKRType} from "../okr-types.ts";
import {AddKeyResultModal} from "./AddKeyResultModal.tsx";
import {useState} from "react";

type DisplayOkrsProps = {
  okrs: OKRType[]
  setOkrs: React.Dispatch<React.SetStateAction<OKRType[] | null>>

}
export function DisplayOkrs({
                              okrs,
                              setOkrs
                            }: DisplayOkrsProps) {
  function showModal(){
    setIsModalOpen( true);
    // setOkrs([...okrs]); //TODO:do something different
  }
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (

    <div className="border-2 mx-8 my-4 px-8 py-4 rounded-md border-gray-300 space-y-8">
      {okrs.length > 0 ? (
        okrs.map((okr, index) => {
          return <div className="space-y-4 bg-blue-200 px-4 py-8 rounded-md " key={index}>
            <div className="flex justify-between space-x-2">
              <p className="flex-grow">Objective Title : {okr.objective}</p>

              <AddKeyResultModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} okrs={okrs} index={index} setOkrs={setOkrs??[]}/>
              <button
                className="bg-gray-400 px-2 py-1 ml-4 rounded-md text-white hover:bg-gray-500 border-none"
              onClick={showModal}>Add Key Result
              </button>
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
              okr.keyResults.map((keyResult, keyResultIndex) => {
                return <div className="bg-gray-50 px-2 py-4 rounded-md" key={keyResultIndex}>
                  <div className="flex justify-between">
                    <p> Key Results </p>
                    <button className="bg-red-400 px-2 py-1 rounded-md text-white
                       focus:ring-gray-800 hover:bg-red-500 justify-self-end border-none mr-4
                       "
                            onClick={() => {
                              okr.keyResults.splice(keyResultIndex, 1);
                              setOkrs([...okrs]);
                            }}>
                      <Trash2/>
                    </button>
                  </div>
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