export default function handler(_req, res) {
  res.setHeader("Set-Cookie", "user-auth=true; path=/;");
  res.json({ status: "ok" });
}
