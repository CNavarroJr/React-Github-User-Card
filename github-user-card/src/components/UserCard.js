import React from 'react';

function UserCard(props) {
  console.log(props);
  const {follower: {login, avatar_url, id, html_url}} = props
  return (
    <div className='follower-cards'>
      <h1><a href={html_url} target='_blank'>{login}</a></h1>
      <img width='50%' src={avatar_url} alt='Profile Pic' key={id} />
    </div>
  )
}

export default UserCard;