export default function handler(req, res) {
  res.status(200).json({
    status: "ok",
    time: new Date().toISOString(),
    region: process.env.VERCEL_REGION || "local",
    environment: process.env.VERCEL_ENV || "development",
    commit: process.env.VERCEL_GIT_COMMIT_SHA || "unknown",
  });
}
