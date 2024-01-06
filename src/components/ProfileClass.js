import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: '',
        location: '',
      },
    };
    console.log('Child - constructor ');
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log('component will unmount');
  }
  componentDidUpdate() {
    console.log('Child componentDidUpdate');
  }
  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log('hello');
    }, 1000);
    console.log('child - componentDidMount ');
  }

  render() {
    console.log('child - render ');
    return (
      <>
        <h1> Profile class component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>Public Repositories: {this.state.userInfo.public_repos}</h3>
      </>
    );
  }
}
export default Profile;
