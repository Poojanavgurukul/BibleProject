import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';
import fbConfig from './config/fbConfig';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import { reactReduxFirebase,getFirebase } from 'react-redux-firebase';
import { createStore, applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux'; 


const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
      reduxFirestore(fbConfig),
      reactReduxFirebase(fbConfig,{useFirestoreForProfile:true,userProfile:'users',attachAuthIsReady:true})
    )
  )
store.firebaseAuthIsReady.then(()=>{
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  reportWebVitals();
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals