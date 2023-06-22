import MatchCard from '../MatchCard'

const TeamMatches = ({teamData}) => {
  const {teamName, matches, id} = teamData

  return (
    <div className="team-matches">
      <h2>{teamName}</h2>
      <ul className="team-cards">
        {matches.map(match => (
          <li key={id}>
            <MatchCard match={match} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TeamMatches
