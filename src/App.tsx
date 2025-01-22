import {useEffect, useState} from "react";
import {OKRType} from "./okr-types.ts";
import {OkrForm} from "./Components/OkrForm.tsx";
import {DisplayOkrs} from "./Components/DisplayOkrs.tsx";
import {getStaticOKRs} from "./db/okr-store.ts";




function App() {
  const [okrs, setOkrs] = useState<OKRType[]|null>(null);
  const isLoading=  okrs===null;


  useEffect(()=>{
    (async ()=>{
      const okrStaticData= await getStaticOKRs();
      setOkrs(okrStaticData);
    })()
    return(()=>{
      console.log("I'm Cleaning Up");
    })
  },[])


  return (
    <div>
      <OkrForm setOkrs={setOkrs} okrs={okrs ?? []}/>

      {isLoading ? <p>Loading</p>:
      <DisplayOkrs okrs={okrs ?? []} setOkrs={setOkrs} />
      }

    </div>
  );
}

export default App;
