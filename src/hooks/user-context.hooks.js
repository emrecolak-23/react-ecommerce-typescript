import { useContext } from 'react';

import { UserContext } from '../contexts/user.context';

const useUserContext = () => {
  return useContext(UserContext);
};

export default useUserContext;
