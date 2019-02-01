import Measurement, { IMeasurement } from '@deboertool/vo-measurement'
import { expect } from 'chai'
import { Chart, TolerancesDefinition } from '..'
import Precision from '@deboertool/vo-precision';
import { Factory } from '@deboertool/vo-unit';
import { EmptyTolerancesDefinition } from '../src/Chart';

const def1: TolerancesDefinition = {
  range: [0, 2],
  upper: 1,
  lower: -1,
  precision: 1,
  units: 'mm'
}

const def2: TolerancesDefinition = {
  range: [2, 3],
  upper: 1,
  lower: -1,
  precision: 1,
  units: 'mm'
}

const mes1: IMeasurement = new Measurement(1, new Precision(1), new Factory().make('mm'))
const mes2: IMeasurement = new Measurement(999, new Precision(1), new Factory().make('mm'))

const chart = new Chart([def1, def2])

describe('Chart', () => {
  it('returns an array of definitions', () => {
    expect(chart.all()).to.be.instanceOf(Array)
    expect(chart.all().length).to.equal(2)
  })

  it('finds the right range for the given measurement', () => {
    expect(chart.find(mes1)).to.eql(def1)
  })

  it('returns an empty definition otherwise', () => {
    expect(chart.find(mes2)).to.eql(EmptyTolerancesDefinition)
  })
})