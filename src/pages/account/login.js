import * as React from "react";
import { navigate } from "gatsby";
import { Layout } from "../../components/layout";

async function checkLogin(setLoginStatus) {
  const { loggedIn = false } = await fetch("/api/check-auth").then((res) =>
    res.json()
  );

  setLoginStatus(loggedIn);
}

async function login() {
  const { status } = await fetch("/api/login").then((res) => res.json());

  if (status !== "ok") {
    throw new Error(status);
  }

  navigate("/account/dashboard");
}

export default function LoginPage() {
  const [loginStatus, setLoginStatus] = React.useState();

  React.useEffect(() => {
    checkLogin(setLoginStatus);
  }, []);

  if (loginStatus === true) {
    navigate("/account/dashboard", { replace: true });
    return null;
  }

  return (
    <Layout>
      <button onClick={login}>Login</button>
    </Layout>
  );
}
