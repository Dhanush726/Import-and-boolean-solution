import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

const teamsApiUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {
    isLoading: true,
    teams: [],
  }

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    try {
      const response = await fetch(teamsApiUrl)
      if (response.ok === true) {
        const data = await response.json()
        const updatedTeams = data.teams.map(team => ({
          name: team.name,
          id: team.id,
          teamImageUrl: team.team_image_url,
        }))
        this.setState({teams: updatedTeams, isLoading: false})
      }
    } catch (error) {
      this.setState({isLoading: false})
    }
  }

  renderTeamsList = () => {
    const {teams} = this.state
    return (
      <ul className="teams-list">
        {teams.map(team => (
          <li key={team.id} className="team-card">
            <Link to={`/team-matches/${team.id}`}>
              <TeamCard team={team} />
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="home">
        <h1 className="main-heading">IPL Dashboard</h1>
        {isLoading ? (
          <div testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamsList()
        )}
      </div>
    )
  }
}

export default Home
