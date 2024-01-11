import Profile from './Profile';
import React from 'react';
import UserContext from '../utils/UserContext.js';
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('parent constructor');
  }

  componentDidMount() {
    console.log('parent component did mount');
  }

  render() {
    console.log('parent- render');
    return (
      <>
        <h1>This is the about us page</h1>
        <UserContext.Consumer>
          {(UserContext) => <h1>{UserContext.default}</h1>}
        </UserContext.Consumer>
        <Profile key={1} />
      </>
    );
  }
}

export default About;
