export default function handler(req, res) {
  const loggedIn = Boolean(req.cookies && req.cookies["user-auth"]);

  res.json({
    loggedIn,
  });
}
