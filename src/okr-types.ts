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

export type { OKRType , KeyResultType}