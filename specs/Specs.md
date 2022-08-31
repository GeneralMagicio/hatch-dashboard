# Hatch Dashboard Specification


## Module 1 - DAO Configuration
### Inputs
#### Support Required (%)
The Support Required (%) is the percentage of YES votes from the vote-total required for a proposal to pass.

- **Implications & Parameter Options**
The Support Required (%) is measured as a percentage (YES Votes/Total Votes), and you will have the option to set this parameter between 50 and 100.
The Support Required is an important consideration when developing responsible voting configurations. We desire consensus when voting, and the Support Required percentage is a direct reflection on the degree of consensus among token holders regarding any proposal. Consensus requires deliberation, and the parameters for the Upgrade will be thoroughly debated. A high Support Required percentage means that a certain degree of consensus is required. A low Support Required percentage will allow for a small majority to dictate decisions.
- **Suggested Range**
Since support for a proposal is highly desirable, we suggest a range of 60%-95% for the Support Required parameter.
- **Related Parameters**
[Minimum Quorum](#Minimum-Quorum-(%)), [Vote Duration](#Vote-Duration-(days))

---

#### Minimum Quorum (%)
The Minimum Quorum (%) is the percentage of all tokens from the total supply of ANT that must vote on a proposal in order for it to be valid.

- **Implications & Parameter Options**
The Minimum Quorum (%) is measured as a percentage (YES Votes/ANT Supply), and you will have the option to set this parameter between 0% and 100%.
The Minimum Quorum percentage sets a baseline of support by token holders that is required for a proposal to pass. This parameter ensures that there is enough participation in a voting event to consider the proposal valid. If you set a high Minimum Quorum %, you risk a proposal not being able to pass even when the Minimum Support % has been satisfied.
- **Suggested Range**
Since there are very limited risks to a low Minimum Quorum, we suggest a range between 1%-15%.
- **Related Parameters**
[Support Required](#Support-Required-(%)), [Vote Duration](#Vote-Duration-(days))

---

#### Vote Duration (days)
This is the voting duration (usually in days) of a proposal in Tao Voting. During this time ANT holders are allowed to vote on the proposal, users cannot take back their vote and users are only allowed to vote ONCE.

Vote Duration in Disputable Voting has other voting period sections that exist within it: Quiet Ending Period and Delegated Voting Period. The Quiet Ending Extension, if triggered, will increase the Vote Duration by the duration of the QEE, however many times the QEE triggers.

Vote Execution Delay is not counted as part of the Vote Duration

- **Considerations**
It is important to allow a sufficient voting window for all users in all timezones with varying levels of mental bandwidth to be able to visit and review proposals.
- **Suggested Range**
3 to 9 days
- **Related Parameters**
[Support Required](#Support-Required-(%)), [Minimum Quorum](#Minimum-Quorum-(%)), [Delegated Voting Period](#Delegated-Voting-Period-(days)), [Quiet Ending Period](#Quiet-Ending-Period-(days)), [Quiet Ending Extension](#Quiet-Ending-Extension-(days)), [Execution Delay](#Execution-Delay-(days))

---

#### Delegated Voting Period (days)
One of the unique mechanics in Disputable Voting is the ability for ANT holders to vest their voting powers to another DAO member, this DAO member thus becoming a ‘Delegate’. Delegates will be able to use their vested voting power to cast votes on behalf of their Delegator.

Delegators are able to veto their portion of a Delegates vote once it’s cast in the event that a Delegate votes contrary to the Delegator’s preference. Delegates, same as all other voters can only vote ONCE and cannot take back their vote once it has been cast.

- **What is the Delegated Voting Period?**
This is the period of time, within the Vote Duration, when delegates can cast votes that have been vested to them. When this period ends delegates can no longer vote.
- **Implications & Parameter Options**
This parameter is set in days. It is limited by the Vote Duration since it cannot extend past the total eligible voting duration of a proposal.
The main intention of having a separate period for delegate voting is to give time for voters to verify how their delegate voted and if necessary to veto them.
- **Suggested Range**
Anywhere from 20% to 80% of the Vote Duration is suggested to leave open for Delegates to vote. However, since this parameter is expressed in days it is suggested to round to the nearest whole day.
- **Related Parameters**
[Vote Duration](#Vote-Duration-(days))

---

#### Quiet Ending Period (days)
One of the unique features of Disputable Voting is Quiet Ending. This checks for flipped outcomes during the final portion of the Vote Duration and adds more voting time in the event of a flip.
- **What is Quiet Ending Period?**
This a the specified amount of time within the latter part of the Vote Duration. During the Quiet Ending Period if the voting outcomes changes from “yes” to “no” or vice versa it will trigger the Quiet Ending Extension. The Quiet Ending Period can only happen once during a vote. Voting will close normally if the outcome does not change during the Quiet Ending Period.
- **Implications & Parameter Options**
These parameters are set in days. Quiet Ending Period is limited by the Vote Duration since it cannot extend past the total eligible voting duration of a proposal. Quiet Ending Extension however since it adds time is not constrained by the initial Vote Duration.
The intention behind this mechanic is to allow time for more voter input in the event of a contentious vote. It can also act as a safeguard if a member, particularly a whale, tries to flip a voting outcome at the last moment.
- **Suggested Range**
Anywhere from 50% to 10% of the Vote Duration is suggested for the Quiet Ending Period. However, since this parameter is expressed in days it is suggested to round to the nearest whole day.
- **Related Parameters**
[Vote Duration](#Vote-Duration-(days)), [Delegated Voting Period](#Delegated-Voting-Period-(days))

---

#### Quiet Ending Extension (days)
One of the unique features of Disputable Voting is Quiet Ending. This checks for flipped outcomes during the final portion of the Vote Duration and adds more voting time in the event of a flip.

- **What is Quiet Ending Extension?**
This is the voting duration extension that triggers only from a vote outcome flipping during the Quiet Ending Period. This will add the specified amount of time to the vote duration allowing any voters (except Delegates) more time to vote. If an outcome is flipped again during the Quiet Ending Extension another extension will trigger. There is no limit on how many times an extension can be triggered. Voting closes once there is no change of outcome during this extension period.
- **Implications & Parameter Options**
These parameters are set in days. Quiet Ending Period is limited by the Vote Duration since it cannot extend past the total eligible voting duration of a proposal. Quiet Ending Extension however since it adds time is not constrained by the initial Vote Duration.
The intention behind this mechanic is to allow time for more voter input in the event of a contentious vote. It can also act as a safeguard if a member, particularly a whale, tries to flip a voting outcome at the last moment.
- **Suggested Range**
In order to accommodate various timezones and schedules a range of 1-3 days is recommended for the Quiet Ending Extension, also taking into special consideration that this can trigger multiple times.
- **Related Parameters**
[Vote Duration](#Vote-Duration-(days)), [Delegated Voting Period](#Delegated-Voting-Period-(days))

---

#### Execution Delay (days)
The Execution Delay describes the required amount of time after a proposal passes for the proposal to be executed.

- **Implications & Parameter Options**
The Execution Delay is measured in hours, and you will have the option to set this parameter between 0 and ∞.
The Execution delay is important because we want to give token holders enough time to evaluate the implications of a proposal. They might need to decide whether or not they want to maintain their token holdings, buy more ANT, or sell off their ANT.
- **Suggested Range**
Since the [Disputable Voting Application](https://forum.tecommons.org/t/tao-voting-formerly-disputable-voting-parameters-general-discussion/267/7) has such incredible powers within the DAO it is encouraged for all ANT holders to analyze voting outcomes. We suggest a generous range of 8-24 hours for this parameter.
- **Related** Parameters
[Vote Duration](#Vote-Duration-(days))

---

### Outputs

Bar chart example:
![](https://i.imgur.com/vfyp9Du.png)

#### Voting Process (days)
$VotingProcess = Max(0, VoteDuration - QuietEndingPeriod) + QuietEndingPeriod + ExecutionDelay$

#### Delegated Voting Period (days)
$DelegatedVotingPeriod = DelegatedVotingPeriod$ (same as input)

#### Voting Process with an extension (days)
$VotingProcessWithExtension = VoteDuration + QuietEndingExtension + ExecutionDelay$

---

Table example:
![](https://i.imgur.com/BlAMEAq.png)


#### Time to Vote on Proposals (days)
$VoteProposalsNoExtension = VoteDuration$
$VoteProposals1Extension = VoteDuration + QuietEndingExtension$
$VoteProposals2Extensions = VoteDuration + 2 * QuietEndingExtension$

#### Time to Review a Delegates Vote (days)
$ReviewDelegatesVoteNoExtension = VoteDuration - DelegatedVotingPeriod$
$ReviewDelegatesVote1Extension = VoteDuration  - DelegatedVotingPeriod + QuietEndingExtension$
$ReviewDelegatesVote2Extensions = VoteDuration - DelegatedVotingPeriod + 2 * QuietEndingExtension$

#### Time to Execute a Passing Proposal (days)
$ExecutePassingProposalsNoExtension = VoteDuration + ExecutionDelay$
$ExecutePassingProposals1Extension = VoteDuration + ExecutionDelay + QuietEndingExtension$
$ExecutePassingProposals2Extensions = VoteDuration + ExecutionDelay + 2 * QuietEndingExtension$

---

## Module 2 - Impact Hour Rate

### Inputs
#### Minimum Goal (wxDai)
The Minimum Goal is the minimum amount of funds (wxDai) that needs to be collected during the Hatch Period in order to successfully deploy the HatchDAO. If this goal is not reached, 100% of the wxDai will be refunded, the Hatch DAO will not be deployed and Impact Hours will have no value.

- **Implications & Parameter Options**
The Minimum Goal is measured in wxDai (≅1USD), and you will have the option to set this parameter between 0 and ∞.
The amount of wxDai you select for your Minimum Goal (wxDai) will impact whether or not the HatchDAO is deployed. If you set your Minimum Goal to 1 wxDai, it is highly likely that the TEC Community will be able to deploy the HatchDAO, but may disincentivize the collection of additional funds. If you set your Minimum Goal to 1,000,000,000 wxDai it is highly unlikely the HatchDAO will receive enough wxDai to deploy, and all funds received will be returned.
- **Suggested Range**
We collected over 400,000 wxDai in “soft-commits” from ~100 Trusted Seed members, based on that we suggest a range for the Minimum Goal (wxDai) parameter between 200,000 wxDai and 1,500,000 wxDai.
- **Related Parameters to consider when defining the Minimum Hatch Goal (wxDai)**
[Hatch Period](), [Target Goal](), [Impact Hour Rate at Target Goal](), [Impact Hour Rate at Infinity]()

#### Target Goal (wxDai)
The Target Goal (wxDai) is the amount of funds (wxDai) that the community expects to raise during the Hatch Period.

- **Implications & Parameter Options**
The Target Goal is measured in wxDai (≅1USD), and you will have the option to set this parameter anywhere between your Minimum Goal (wxDai) and your Maximum Goal (wxDai).
This parameter is intended to help inform the design of your other parameters within the dashboard. There are also community implications surrounding the establishment of this parameter. If this parameter is set just beyond our assumptions of how much money can be raised, we can motivate community members to really push for new outreach campaigns and create a highly motivated effort to seek more funding from Trusted Seed members in order to satisfy this collective goal.
- **Suggested Range**
Since the Target Goal is a social parameter that allows the Community to rally around a particular funding goal, we suggest a range of 1,000,000 - 15,000,000 wxDai.
- **Related Parameters to consider when defining the Maximum Goal (wxDai)**
[Minimum Goal](), [Maximum Goal]()



#### Maximum Goal (wxDai)
The Maximum Goal (wxDai) is the maximum amount of funds (wxDai) that can be collected during the Hatch Period. Once this goal is reached, the Hatch Period will end and the HatchDAO will be deployed.

- **Implications & Parameter options.**
The Maximum Goal is measured in wxDai (≅1USD), and you will have to option to set this parameter between 0 and ∞, and must be larger than your Minimum Goal (wxDai).
The amount of wxDai you select for your Maximum Goal (wxDai) will create a limit to how much wxDai that can be covested into the HatchDAO. The upper limit has several implications that should be considered during parameter design, and although many concerns surrounding this parameter have been addressed, it is important to evaluate the implications of the Maximum Goal (wxDai).
All wxDai sent to the HatchDAO during the Hatch Period will result with the minting of TECH tokens which serve as voting power within the HatchDAO. If the Maximum Goal is set to ∞ , this has the potential to give a substantial amount of voting power (via TECH tokens) to “Whales” within the Trusted Seed. The Trade-off is that the amount of funds provided will increase the value of covestments made by smaller contributors in exchange for voting power that set the parameters for the Commons Upgrade.
Much of this trade-off has been mitigated through both the Trusted Seed (limiting Hatch contributors to those with value alignment with the Commons), and the 10% rule (which limits the amount of TECH tokens minted for any contributor to be no more than 10% of all TECH tokens minted.)
- **Suggested Range**
Based upon our collection of “soft-commits” from Trusted Seed members, we suggest a range for the Maximum Goal (wxDai) between 2,000,000 wxDai and 20,000,000 wxDai.
- **Related Parameters to consider when defining the Maximum Goal (wxDai):**
[Minimum Goal](),[Target Goal](), [Hatch Period](), [Membership Ratio]()



#### Impact Hour Rate at Target Goal (wxDai/IH)
The Impact Hour Rate at Target Goal parameter determines the amount of wxDai allocated for each Impact Hour earned by the Builders of our community. The source of these funds comes from the amount raised during the Hatch Period and therefore the ratio between wxDai and Impact Hours is dependent upon the amount of funds raised.

- **Implications & Parameter Options**
The Impact Hour Rate at Target Goal parameter is measured in wxDai, and you will have the option to set this parameter anywhere between 0 and ∞ .
This parameter has several implications and determines how much we reward our Community Builders in relation to the amount of Impact Hours they earned. The source of these funds come from the amount of wxDai raised during the Hatch Period, specifically from the unredeemable pool of funds determined by the Hatch% Parameter.
- **Suggested Range**
Depending on your Target Goal, we suggest an Impact Hour Rate of 20-200 wxDai.
- **Related Parameters to consider when defining the Impact Hour Rate at Target Goal**
[Target Goal](), [Minimum Goal](), [Maximum Goal](), [Impact Hour Rate at Infinity]()


#### Impact Hour Rate at Infinity (wxDai/IH)
The Impact Hour Rate at Infinity determines the theoretical maximum for the Impact Hour Rate. The rate serves as an asymptote for the curve according to the amount of funds raised during the Hatch Period.

- **Implications & Parameter Options**
The Impact Hour Rate (wxDai/IH) at Infinity is measured as a ratio, and you will have the option to set this parameter between 0 and 1000.
Since the Impact Hour Rate is dynamic based on the amount of funds raised during the Hatch Period, the Impact Hour Rate at Infinity(wxDai/IH) parameter defines the curve for this rate. The higher you set your ratio, the amount of wxDai per single Impact Hour increases as it moves beyond your Target Goal (wxDai) parameter. This parameter is at the foundation for your Hatch Strategy because it serves as a method for defining your hatch-raise incentives. The Impact Hour rate rewards our Community Builders, and this parameter establishes the magnitude of that reward. Inversely, this also impacts the amount of voting power held by Backers within the HatchDAO
- **Suggested Range**
The Impact Hour Rate at Infinity should be carefully considered, but we suggest a range of 80-1000 wxDai.
- **Related Parameters to consider when defining the Impact Hour Rate (wxDai/IH) at Infinity**
[Target Goal](), [Minimum Goal](), [Maximum Goal](), [Impact Hour Rate at Target Goal]()


#### Hatch Tribute (%)
The Hatch Tribute (%) defines the percentage of the total funds raised that cannot be removed from the Hatch by individuals who wish to exercise their RageQuit rights.

- **Implications & Parameter Options**
The Hatch Tribute (%) is measured as a percentage, and you will have the option to set this parameter between 0 and 100.
The Hatch Tribute % is one of the more contentious parameters to be voted on, and has significant implications on the incentives for funding by Trusted Seed Members.
The Implications of a high Hatch Tribute % is that it establishes a social contract between Community Backers and Community Builders that if you decide to fund the Hatch, you fully support the project regardless of its end-form. The benefits of this are that we maintain consensus within the HatchDAO, and force members to “come to the table” regarding conflicts associated with Commons Upgrade parameters. The downsides to a high Hatch Tribute % is that it does not give flexibility to Community Backers who may disagree with the parameters of the Commons Upgrade, reducing their willingness to RageQuit, and therefore increasing the probability for internal conflict. A social contract such as this also disincentivizes the amount of funding that Community Backers are willing to risk in instances where Commons Upgrade parameters are not to their liking, and may result in less funding than initially anticipated.
The implications of a low Hatch Tribute % is that it provides flexibility to Community Backers who are providing a significant source of funding to exercise their RageQuit rights, and forces Community Builders to “come to the table” to search for compromises regarding conflicts associated with Commons Upgrade parameters. This also increases the probability that Community Backers will be willing to contribute a larger sum of funds to the Hatch, knowing that they have the ability to redeem those funds if the Commons Upgrade parameters are not to their liking. A downside to a low Hatch Tribute % is the possibility of Community Backers to wield their power of funding to influence Commons Upgrade parameters.
- **Suggested Range**
The Hatch Tribute should be carefully considered, and we suggest a range between 0-50 percent.
- **Related Parameters to consider when defining the Hatch Tribute (%)**
[Membership Ratio](), [Minimum Goal]()



#### Membership Ratio (wxDai/CSTK)
The Membership Ratio creates an individual cap for how much wxDai each Trusted Seed Member is able to send to the Hatch during the Hatch Period.

- **Implications & Parameter Options**
The Membership Ratio parameter is measured in wxDai, and you will have the option to set this parameter anywhere between 0 and ∞.
The cap for each Trusted Seed Member is based on their individual CSTK score. The minimum CSTK Score possible is 1125 CSTK. Your parameter will establish how much wxDai that can be sent to the Hatch during the Hatch Period for each CSTK ‘point’ an individual holds (i.e. if you set your parameter at 2 wxDai, a Trusted Seed Member with a 2000 CSTK Score will be able to send a maximum of 4000 wxDai to the Hatch during the Hatch Period).
- **Suggested Range**
The Membership Ratio will dictate the amount of funding the Hatch receives, and we suggest a range of 1-20 wxDai.
- **Related Parameters to consider when defining the Membership Ratio**
[Minimum Goal](), [Maximum Goal](), [Target Goal]()

#### Hatch Minting Rate (TECH/wxDai)
The Hatch Minting Rate (TECH/wxDai) is the amount of TECH tokens minted for each wxDai raised during the Hatch Period.

- **Implications & Parameter Options**
The Hatch Minting Rate (TECH/wxDai) is measured in TECH tokens, and you will have the option to set this parameter anywhere between 0 and ∞.
This parameter establishes the token supply for TECH, and can be evaluated at our Minimum, Target, and Maximum Raise parameters. The token supply has implications for the psychology surrounding your token economy. A low Hatch Minting Rate (ex: 10-100), will limit the amount of tokens available resulting in a higher token price, while a high Hatch Minting Rate (ex: 1000+), will expand the amount of tokens available resulting in a lower token price.

- **Suggested Range**
The Hatch Minting Rate is a parameter of preference, and so our suggestion for a wide range between 0.00001-1,000,000 TECH is acceptable.


### Outputs

#### Impact Hour Rate (wxDai/IH)
![](https://i.imgur.com/jOnFYpx.png)

The impact hour rate (wxDai/IH) equation defines how much should be paid for each Impact Hour (IH). The IH rate depends on the total raised in the Hatch Phase. The equation is modeled as below.

$ImpactHourRate = ImpactHourRateAtInfinity * ({TotalRaisedHatch \over TotalRaisedHatch + ImpactHourSlope * TotalImpactHours})$

#### Non-Redeemable Reserve (wxDai)
The Non-Redeemable Reserve (wxDai) is a percentage of the total raised that cannot be redeemable by the Backers.

$NonRedeemableReserve = TotalRaisedHatch * HatchTribute$

#### Redeemable Reserve (wxDai)
The redeemable Reserve (wxDai) is given by the Total Raised (wxDai) subtracted by the Non-Redeemable Reserve (wxDai).

$NonRedeemableReserve = TotalRaisedHatch * (1 - HatchTribute)$

#### Impact Hour Slope (wxDai/IH)
Originally we had the designers manually choose the Maximum impact hour rate (mihr) and the Impact hour slope (ihs) but this proved very non-intuitive, so after much debate and interation we decided to derive the ihs from the mihr and point on the curve defined by the Target Goal and the impact hour rate at the Target Goal (tgihr).

$ImpactHourSlope = ({ImpactHourRateAtInfinity \over ImpactHourRateAtTargetGoal}-1) * {TargetRaise \over TotalImpactHours}$

#### Backer's Rage Quit (%)
![](https://i.imgur.com/dkxjpix.png)

$BackersRageQuit = {RedeemableReserve \over ImpactHourRate * TotalImpactHours + TotalRaisedHatch}$

#### Total Supply Held By Builders (%)
$TotalSupplyHeldByBuilders = {TotalImpactHours * ImpactHoursRate * HatchMintingRate \over TotalTokensMinted}$

#### Total Tokens Minted (tokens)
$TotalTokensMinted = HatchMintingRate * (TotalRaisedHatch  + TotalImpactHours * ImpactHoursRate)$

