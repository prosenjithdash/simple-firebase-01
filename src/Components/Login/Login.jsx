
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../../Firebase/Firebase.init";

const Login = () => {

    // google authentication step-1
    // google authentication step-2
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    // google authentication step-3
    //For google
    const handleGoogleSignIn = () => {
        console.log('Google mama is coming.')
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