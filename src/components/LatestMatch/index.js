import './index.css'

const LatestMatch = ({match}) => {
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = match

  return (
    <div className="latest-match">
      <div className="match-info">
        <p className="match-result">{result}</p>
        <p className="match-date">{date}</p>
        <p className="match-venue">{venue}</p>
      </div>
      <div className="teams-info">
        <div className="team-info">
          <img
            src={competingTeamLogo}
            alt={`competing team ${competingTeam}`}
            className="team-logo"
          />
          <p className="team-name">{competingTeam}</p>
        </div>
        <div className="team-info">
          <p className="innings">{firstInnings}</p>
          <p className="innings">{secondInnings}</p>
        </div>
      </div>
      <p className="match-status">{matchStatus}</p>
      <p className="man-of-the-match">Man of the Match: {manOfTheMatch}</p>
      <p className="umpires">Umpires: {umpires}</p>
    </div>
  )
}

export default LatestMatch
