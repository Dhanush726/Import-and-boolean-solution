import './index.css'

const TeamCard = ({team}) => {
  const {name, teamImageUrl} = team

  return (
    <div className="team-card">
      <img src={teamImageUrl} alt={name} className="team-image" />
      <p className="team-name">{name}</p>
    </div>
  )
}

export default TeamCard
