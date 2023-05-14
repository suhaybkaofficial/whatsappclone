import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGoogleCircle } from "react-icons/ai";
import FirebaseAuthContext from "@/utils/firebaseAuth";
function Login() {
    const {signInWithGoogle,user} = useContext(FirebaseAuthContext)
    console.log(user);
  return (
    <div className="flex items-center justify-center  min-h-screen">
      <div className="lg:w-1/2 xl:max-w-screen-sm bg-white rounded-3xl">
        <h1 className="text-4xl font-semibold text-thirdColor p-2 my-2 text-center">
          Whatsapp Web Clone
        </h1>
        <br />
        <hr />
        <br />

        <div className="my-4 flex items-center justify-center">
          <button className="flex items-center border border-thirdColor py-2 px-4 rounded-full  space-x-2  justify-center"
          onClick={signInWithGoogle}
          >
            <FcGoogle size={40} />
            <h2 className="text-center text-xl text-thirdColor font-display font-semibold ">
              Sign In With Google{" "}
            </h2>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
