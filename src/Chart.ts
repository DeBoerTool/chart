import IChart, { TolerancesDefinition } from './IChart'
import { IMeasurement } from '@deboertool/vo-measurement'

const EmptyTolerancesDefinition: TolerancesDefinition = {
  range: [0, 0],
  upper: 0,
  lower: 0,
  precision: 0,
  units: 'none'
}

const findInRange = item => measurement => 
  measurement.isInRange(item.range) 
    && measurement.unit().isCode(item.units)

class Chart implements IChart
{
  constructor (private chart: Array<TolerancesDefinition>) {}

  all (): Array<TolerancesDefinition>
  {
    return this.chart
  }

  find (measurement: IMeasurement): TolerancesDefinition
  {
    return this.chart.find(item => findInRange(item)(measurement)) || EmptyTolerancesDefinition
  }
}

export { Chart, EmptyTolerancesDefinition }
export default Chart