import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux';
import router from './router';

const initState={
  userInfo:null,
  loginModal:{title:"",show:false},
  signupModal:{title:"",show:false},
  signupInfo:null,
  alertModal:{show:false, message:"", onYes:()=>{}}
}
const reducer = (state=initState, action)=>{
  let newState;
  if(action.type==="USER_INFO"){
    newState={
      ...state,
      userInfo:action.payload
    }
  }else if(action.type==="LOGIN_MODAL"){
    newState={
      ...state,
      loginModal:action.payload
    }
  }else if(action.type==="SIGNUP_MODAL"){
    newState={
      ...state,
      signupModal:action.payload
    }
  }else{
    newState=state;
  }
  return newState;
}
const store = createStore(reducer);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>

  </StrictMode>
)
