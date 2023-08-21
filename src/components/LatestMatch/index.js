import './index.css'

const LatestMatch = props => {
  const {LATESTMATCH} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = LATESTMATCH

  return (
    <li className="lastMatchContainer">
      <div className="bothContainer">
        <div className="first">
          <p className="competingTeamHead">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competingTeamLogo"
        />
      </div>
      <hr />
      <div className="tharun">
        <h1 className="Innings">First Innings</h1>
        <p className="inning">{firstInnings}</p>
        <h1 className="Innings">Second Innings</h1>
        <p className="inning">{secondInnings}</p>
        <h1 className="Innings">Man Of The Match</h1>
        <p className="inning">{manOfTheMatch}</p>
        <h1 className="Innings">Umpires</h1>
        <p className="inning">{umpires}</p>
      </div>
    </li>
  )
}

export default LatestMatch
