interface ProposalAcceptance {
  proposalPasses: number[]
  proposalFails: number[]
  minimumQuorum: number
}

class DaoVoting {
  public supportRequired: number
  public minimumQuorum: number
  public voteDuration: number
  public voteProposalBuffer: number
  public ragequitDelay: number
  public tollgateFee: number

  constructor(
    supportRequired: number,
    minimumQuorum: number,
    voteDuration: number,
    voteProposalBuffer: number,
    ragequitDelay: number,
    tollgateFee: number
  ) {
    this.supportRequired = supportRequired
    this.minimumQuorum = minimumQuorum
    this.voteDuration = voteDuration
    this.voteProposalBuffer = voteProposalBuffer
    this.ragequitDelay = ragequitDelay
    this.tollgateFee = tollgateFee
  }

  public getProposalAcceptance(): ProposalAcceptance {
    const proposalAcceptance = {
      proposalPasses: [this.supportRequired, 100],
      proposalFails: [0, this.supportRequired],
      minimumQuorum: this.minimumQuorum,
    }
    return proposalAcceptance
  }
}

export default DaoVoting
