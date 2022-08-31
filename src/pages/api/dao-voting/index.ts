import type { NextApiRequest, NextApiResponse } from 'next'
import DaoVoting from '../../../models/voting'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  const {
    supportRequired,
    minimumQuorum,
    voteDuration,
    voteProposalBuffer,
    ragequitDelay,
    tollgateFee,
  } = req.body.daoVoting

  let daoVoting = new DaoVoting(
    supportRequired,
    minimumQuorum,
    voteDuration,
    voteProposalBuffer,
    ragequitDelay,
    tollgateFee
  )

  res.status(200).json(daoVoting)
}
