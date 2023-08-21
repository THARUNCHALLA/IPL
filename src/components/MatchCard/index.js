import './index.css'

const MatchCard = props => {
  const {userValue} = props
  console.log(userValue)
  const {competingTeam, competingTeamLogo, matchStatus, result} = userValue
  console.log(matchStatus)
  let auth
  if (matchStatus === 'Won') {
    auth = <p className="result">{matchStatus}</p>
  } else {
    auth = <p className="result1">{matchStatus}</p>
  }
  return (
    <li className="list12">
      <div className="mumbai">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="image"
        />
        <p className="heading1234">{competingTeam}</p>
      </div>
      <p className="para">{result}</p>
      {auth}
    </li>
  )
}

export default MatchCard
