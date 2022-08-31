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

  res.status(200).json(hatchConfiguration)
}
