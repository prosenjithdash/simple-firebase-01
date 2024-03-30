/**
 * 1. Visit: firebase.google.com
 * 2. Create project (skip google analytics)
 * 3. Register app: (create config)
 * 4. install firebase: npm install firebase
 * 5. add config file add your project
 * 6.Visit: got to docs -> build -> authentication -> web -> get started 
 * 7. export app from the firebase.config.js file : export default app;
 * 8. Loin.jsx : import app from "../../Firebase/Firebase.init";
 * 9. Loin.jsx: Before return =>  const auth = getAuth(app);
 * 10. import googleAddProvider and create newProvider =>import { GoogleAuthProvider } from "firebase/auth";
    const provider = new GoogleAuthProvider();
   11. use signInPopup and pass auth and provider
* 12. Activate signIn method (google, facebook, gitHub, etc...)


 
 */