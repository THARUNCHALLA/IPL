import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamUrl: '',
    latestMatchDetails: {},
    RecentMatch: [],
    isLoad: true,
  }

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const Team = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const Result = await Team.json()
    const RecentMatches = Result.recent_matches
    const Recent = RecentMatches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      matchStatus: each.match_status,
      result: each.result,
      id: each.id,
    }))
    const latestMatchDetails1 = Result.latest_match_details
    const Latest = {
      competingTeam: latestMatchDetails1.competing_team,
      competingTeamLogo: latestMatchDetails1.competing_team_logo,
      date: latestMatchDetails1.date,
      firstInnings: latestMatchDetails1.first_innings,
      id: latestMatchDetails1.id,
      manOfTheMatch: latestMatchDetails1.man_of_the_match,
      matchStatus: latestMatchDetails1.match_status,
      result: latestMatchDetails1.result,
      secondInnings: latestMatchDetails1.second_innings,
      umpires: latestMatchDetails1.umpires,
      venue: latestMatchDetails1.venue,
    }

    const teamUrl1 = Result.team_banner_url
    this.setState({
      teamUrl: teamUrl1,
      latestMatchDetails: Latest,
      RecentMatch: Recent,
      isLoad: false,
    })
  }

  getColor = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    switch (id) {
      case 'MI':
        return 'mi'
      case 'RCB':
        return 'rcb'
      case 'CSK':
        return 'csk'
      case 'KKR':
        return 'kkr'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      case 'RR':
        return 'rr'
      case 'KXP':
        return 'kxp'
      default:
        return ''
    }
  }

  render() {
    const {teamUrl, latestMatchDetails, RecentMatch, isLoad} = this.state
    const className = `team-matches-container ${this.getColor()}`
    return (
      <div className={className}>
        {isLoad ? (
          <div data-testid="loader" className="loader12">
            <Loader type="Oval" color="white" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="container1234">
              <img src={teamUrl} alt="team banner" className="teamUrl" />
              <h1 className="latestMatchHeading">Latest Matches</h1>
            </div>
            <ul className="unordered12">
              <LatestMatch LATESTMATCH={latestMatchDetails} />
            </ul>
            <ul className="unorder">
              {RecentMatch.map(eachItem => (
                <MatchCard userValue={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
