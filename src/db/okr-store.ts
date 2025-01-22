import {OKRType} from "../okr-types.ts";


const db = new Map<number, OKRType>();
let dbIndex = 1;

type IntialOkrDataType = OKRType & {
  id : number
}
const staticOKRDatas: IntialOkrDataType[] =
  [
    {
      id : dbIndex++,
      objective: "Obj1",
      keyResults: [{
        title: "rs1",
        initialValue: 0,
        currentValue: 2,
        targetValue: 5,
        metrics: "Devs"
      }]
    }, {
    id : dbIndex++,
    objective: "Obj2",
    keyResults: [{
      title: "rs1",
      initialValue: 0,
      currentValue: 2,
      targetValue: 5,
      metrics: "Devs"
    }, {
      title: "rs2",
      initialValue: 0,
      currentValue: 20,
      targetValue: 50,
      metrics: "Devs"
    }]
  },
  ]

staticOKRDatas.forEach((okr) => {
  db.set(dbIndex++, okr)
})

function getStaticOKRs(): Promise<OKRType[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(Array.from(db.values()));
    }, 2000);
  })
}

function insertOKR(newOkr: OKRType) : Promise < void > {
  return new Promise((resolve) => {
    setTimeout(() => {
      db.set(dbIndex++, newOkr)
      resolve();
    }, 3000);
  })
}

export {getStaticOKRs , insertOKR}