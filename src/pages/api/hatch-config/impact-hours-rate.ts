import type { NextApiRequest, NextApiResponse } from 'next'
import HatchConfiguration from '../../../models/hatch'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  const {
    minimumGoal,
    maximumGoal,
    targetGoal,
    impactHourRateTarget,
    impactHourRateMax,
    hatchTribute,
    membershipRatio,
    hatchPeriod,
    hatchMintingRate,
    totalImpactHours,
  } = req.body.hatchConfiguration

  const raisedAmount = req.body.raisedAmount

  let hatchConfiguration = new HatchConfiguration(
    minimumGoal,
    maximumGoal,
    targetGoal,
    impactHourRateTarget,
    impactHourRateMax,
    hatchTribute,
    membershipRatio,
    hatchPeriod,
    hatchMintingRate,
    totalImpactHours
  )

  const impactHoursRate = hatchConfiguration.getImpactHoursRate(raisedAmount)

  res.status(200).json({ impactHoursRate: impactHoursRate })
}
