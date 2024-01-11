import { createContext } from 'react';

const UserContext = createContext({
  default: 'Default User',
  newUser: 'rehan',
});
export default UserContext;
