import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/appStore';
import { useState } from 'react';
import UserActive from './utils/userActiveContext';

function App() {
  const [signedIn,setsignedIn] = useState(false);
  return (
    <div>
      <Provider store={appStore}>
        <UserActive.Provider value = {{isActive: signedIn, setsignedIn}}>
          <Body />
        </UserActive.Provider>
      </Provider>
    </div>
  );
}

export default App;
