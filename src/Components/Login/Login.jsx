

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/Firebase.init";


const Login = () => {
    // google authentication step - 1
    const auth = getAuth(app);

    // google authentication step - 2
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
            console.log(result.user)
            })
            .catch((error) => {
                console.log('error',error.message);
            })
    }
    


    return (
        <div>
            <h2>login</h2>
            {/* // google authentication step-4 */}
            <button onClick={handleGoogleSignIn} className="text-white border p-4 btn bg-blue-600">Google Login</button>
        </div>
    );
};

export default Login;