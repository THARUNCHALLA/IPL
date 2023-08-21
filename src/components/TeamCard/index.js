import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {TeamsList} = props
  const {name, teamUrl, id} = TeamsList

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="TeamContainer">
        <img src={teamUrl} className="TeamImage" alt={name} />
        <p className="TeamHead">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
