import Profile from './Profile';
import React from 'react';

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
        <Profile key={1} />
      </>
    );
  }
}

export default About;
