import {useState} from "react";
import {KeyResultType, OKRType} from "./okr-types.ts";
import {OkrForm} from "./OkrForm.tsx";
import {DisplayOkrs} from "./DisplayOkrs.tsx";


function App() {
  const newKeyResult: KeyResultType = {
    title: "",
    initialValue: 0,
    currentValue: 0,
    targetValue: 0,
    metrics: "",
  }


  const [okrs, setOkrs] = useState<OKRType[]>([]);


  return (
    <div>
      <OkrForm
        setOkrs={setOkrs} okrs={okrs}
        newKeyResult={newKeyResult}
      />
      <DisplayOkrs okrs={okrs} setOkrs={setOkrs}/>
    </div>
  )
    ;
}

export default App;
