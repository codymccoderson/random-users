import React from 'react';

const UserCard = props => {
    const {user} = props;
    return (
        <div>
            <img 
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
            />
            <p>
                {user.name.first} {user.name.last}
            </p>
        </div>
    );
};

export default UserCard;