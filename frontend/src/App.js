import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterHandle from 'router';
import { PersistGate } from 'redux-persist/lib/integration/react';
// import Products from 'pages/Products';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className="App">
            <RouterHandle />
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
