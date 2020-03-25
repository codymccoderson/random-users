import React, {Component } from "react";

class UserCard extends Component {

    state = {
        UserCard: "Fetching a user..."
    }

    render() {
        const {UserCard} = this.state
        return(
            <p>{UserCard}</p>
        )
    }
}

export default UserCard;