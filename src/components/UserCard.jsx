import React, {Component } from "react";

class UserCard extends Component {

    state = {
        UserCard: "Fetching a user..."
    }

    async componentDidMount () {
        try {
            const response = await fetch("https://randomuser.me/api/?results=1");
            const data = await response.json();
            console.log(data)
            
        } catch(error) {
            this.setState({
                error: error.message
            })
        }
    }

    render() {
        const {results} = this.state
        return(
            <div className="randomCard">
                <p>{results}</p>
            </div>
        )
    }
}

export default UserCard;