function mark(id, ok, label) {
  const el = document.getElementById(id);
  el.className = ok ? "ok" : "fail";
  el.textContent = (ok ? "✅ " : "❌ ") + label;
}
const cssOk = getComputedStyle(document.body).getPropertyValue("--css-loaded").trim() === "yes";
mark("check-css", cssOk, "CSS loaded");
mark("check-js", true, "JavaScript running");
fetch("/api/health")
  .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
  .then((data) => {
    mark("check-api", true, "API function (/api/health)");
    document.getElementById("details").textContent = JSON.stringify(data, null, 2);
  })
  .catch((err) => {
    mark("check-api", false, "API function (/api/health) — only works on Vercel");
    document.getElementById("details").textContent =
      "Page loaded at: " + new Date().toString() + "\nAPI error: " + err;
  });
