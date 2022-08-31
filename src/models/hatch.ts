class HatchConfiguration {
  public minimumGoal: number
  public maximumGoal: number
  public targetGoal: number
  public impactHourRateTarget: number
  public impactHourRateMax: number
  public hatchTribute: number
  public membershipRatio: number
  public hatchPeriod: number
  public hatchMintingRate: number
  public totalImpactHours: number

  constructor(
    minimumGoal: number,
    maximumGoal: number,
    targetGoal: number,
    impactHourRateTarget: number,
    impactHourRateMax: number,
    hatchTribute: number,
    membershipRatio: number,
    hatchPeriod: number,
    hatchMintingRate: number,
    totalImpactHours: number
  ) {
    this.minimumGoal = minimumGoal
    this.maximumGoal = maximumGoal
    // The target goal value needs to stay between the
    // minimum and maximum goal
    this.targetGoal =
      targetGoal > maximumGoal
        ? maximumGoal
        : targetGoal < minimumGoal
        ? minimumGoal
        : targetGoal
    // The impact hour rate at target goal cannot be
    // smaller than the maximum impact hour rate
    this.impactHourRateTarget = Math.min(
      impactHourRateTarget,
      impactHourRateMax
    )
    this.impactHourRateMax = impactHourRateMax
    this.hatchTribute = hatchTribute
    this.membershipRatio = membershipRatio
    this.hatchPeriod = hatchPeriod
    this.hatchMintingRate = hatchMintingRate
    this.totalImpactHours = totalImpactHours
  }

  public getImpactHoursSlope() {
    const impactHourSlope =
      (this.impactHourRateMax / this.impactHourRateTarget - 1) *
      (this.targetGoal / this.totalImpactHours)
    return impactHourSlope
  }

  public getImpactHoursRate(raisedAmount: number) {
    const impactHoursSlope = this.getImpactHoursSlope()
    const impactHoursRate =
      this.impactHourRateMax *
      (raisedAmount / (raisedAmount + impactHoursSlope * this.totalImpactHours))
    return impactHoursRate
  }

  public getRageQuitPercentage(raisedAmount: number) {
    const impactHoursRate = this.getImpactHoursRate(raisedAmount)
    console.log('impactHoursRate', impactHoursRate)
    const redeemableReserve = raisedAmount * (1 - this.hatchTribute)
    const rageQuitPercentage =
      redeemableReserve /
      (impactHoursRate * this.totalImpactHours + raisedAmount)
    return rageQuitPercentage
  }
}

export default HatchConfiguration
