import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(("email is", email))
    console.log("password is", password)

    setEmail("")
    setPassword("")
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center jestify-center"
        >
          <input
            value = {email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-grey-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value = {password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full mt-3 placeholder:text-grey-400"
            type="password"
            placeholder="Enter your password"
          />
          <button className="mt-5 text-white border-none outline-none border-2 bg-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
