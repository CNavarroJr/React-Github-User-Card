import React from 'react';
import UserCard from './UserCard';

function UserCards({myFollowers}) {

  return (

    <div className='followers-group'>
      {myFollowers.map(follower =>
        <UserCard follower={follower} />
        )}
    </div>
    
  )
}

export default UserCards;