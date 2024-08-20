import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/appStore';
import { useState } from 'react';
import UserActive from './utils/userActiveContext';
import LoginPage from './utils/signInContext';

function App() {
  const [signedIn,setsignedIn] = useState(false);
  const [signInPage,setsignInPage] = useState(false);
  
  return (
    <div>
      <Provider store={appStore}>
        <LoginPage.Provider value={{isSignInPage: signInPage, setsignInPage}}>
          <UserActive.Provider value = {{isActive: signedIn, setsignedIn}}>
            <Body />
          </UserActive.Provider>
        </LoginPage.Provider>
      </Provider>
    </div>
  );
}

export default App;
