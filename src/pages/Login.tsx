import React from "react";
import { useLocation } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const LoginPage = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h2 className="mb-3 flex place-content-center">Login to Contribute</h2>
      <form className="mx-auto max-w-sm space-y-3">
        <Input placeholder="Email address" />
        <Input placeholder="Password" />

        <Button>Login</Button>
      </form>
    </div>
  );
};

export default LoginPage;
