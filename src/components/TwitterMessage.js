import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: "",
      remainingCharacters:280
    };
  }

  handleTweet = (e) => {
    // console.log(e.target.value.length)
    // console.log(this.state.tweet.length)
    this.setState({
      tweet:e.target.value,
      remainingCharacters:(this.props.maxChars - e.target.value.length)
    })
  }

  remaining

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          onChange={event => this.handleTweet(event)}
          value={this.state.tweet} />
          <strong>{this.state.remainingCharacters}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
