import { IMeasurement } from '@deboertool/vo-measurement'

type ValueRange = [number, number]

export type TolerancesDefinition = {
  range: ValueRange
  upper: number
  lower: number
  precision: number
  units: string
}

export default interface IChart 
{
  all (): Array<TolerancesDefinition>
  find (measurement: IMeasurement): TolerancesDefinition
}