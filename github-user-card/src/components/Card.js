import React from 'react';
// import 'github-calendar/dist/github-calendar-responsive.css';
// import GitHubCalendar from 'github-calendar';

function Card(props) {

  // GitHubCalendar('.calendar', 'Walter-Futch', {resposive: true})

  return (

    <div className='card'>
    <div className='head'>
      <h1><a href={props.myGithub.html_url} target='_blank'>{props.myGithub.name}</a></h1>
      <img src={props.myGithub.avatar_url} alt='Github Profile Pic' key={props.myGithub.id} />
    </div>
    <div className='card-info'>
      <p>{props.myGithub.bio}</p>
      <p>{props.myGithub.location}</p>
      <p>{`Followers: ${props.myGithub.followers}`}</p>
      <div className='calendar'></div>
    </div>
  </div>

  )
}

export default Card;