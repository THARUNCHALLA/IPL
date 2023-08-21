import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {FinalTeamList: [], isLogged: true}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const List = await response.json()
    const Teams = List.teams
    const UpdatedTeams = Teams.map(each => ({
      id: each.id,
      name: each.name,
      teamUrl: each.team_image_url,
    }))
    this.setState({FinalTeamList: UpdatedTeams, isLogged: false})
  }

  render() {
    const {FinalTeamList, isLogged} = this.state
    const Full = isLogged && 'ha'
    return (
      <div className={`HomeContainer ${Full}`} data-testid="loader">
        <div className="ContainerForLogo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="dashboard">IPL Dashboard</h1>
        </div>
        {isLogged ? (
          <div data-testid="loader" className="loader12">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="unOrdered">
            {FinalTeamList.map(eachItem => (
              <TeamCard TeamsList={eachItem} key={eachItem.id} />
            ))}
          </ul>
        )}
        )
      </div>
    )
  }
}

export default Home
