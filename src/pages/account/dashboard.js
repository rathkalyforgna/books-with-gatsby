import { navigate } from "gatsby";
import * as React from "react";
import { Layout } from "../../components/layout";

async function checkLogin(setLoginStatus) {
  const { loggedIn = false } = await fetch("/api/check-auth").then((res) =>
    res.json()
  );

  setLoginStatus(loggedIn);
}

async function logout() {
  const { status } = await fetch("/api/logout").then((res) => res.json());

  if (status !== "ok") {
    throw new Error(status);
  }

  navigate("/account/login");
}

export default function LoginPage() {
  const [loginStatus, setLoginStatus] = React.useState();

  React.useEffect(() => {
    checkLogin(setLoginStatus);
  }, []);

  if (loginStatus === false) {
    navigate("/account/login", { replace: true });
    return null;
  }

  return loginStatus === true ? (
    <Layout>
      <h1>Wow, look at all this secret stuff!</h1>
      <button onClick={logout}>Log Out</button>
    </Layout>
  ) : null;
}
