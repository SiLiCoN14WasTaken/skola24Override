/*
self.addEventListener("fetch", (event) => {
  event.respondWith(
    Promise.all([
      fetch("https://cdn.jsdelivr.net/gh/SiLiCoN14WasTaken/skola24Override@main/url.txt"),
      fetch("https://cdn.jsdelivr.net/gh/SiLiCoN14WasTaken/skola24Override@main/transform.js")
    ]).then(async ([urlResponse, transformResponse]) => {
      const targetUrl = (await urlResponse.text()).trim();
      if (event.request.url !== targetUrl) return fetch(event.request);
      const text = await fetch(event.request).then(r => r.text());
      const transform = eval(await transformResponse.text());
      return new Response(transform(text), {
        headers: { "Content-Type": "text/html" },
      });
    })
  );

});
*/
const configPromise = Promise.all([
  fetch("https://api.github.com/repos/SiLiCoN14WasTaken/skola24Override/contents/url.txt")
    .then(r => r.json()).then(data => atob(data.content).trim()),
  fetch("https://api.github.com/repos/SiLiCoN14WasTaken/skola24Override/contents/transform.js")
    .then(r => r.json()).then(data => atob(data.content))
]);

self.addEventListener("fetch", (event) => {
  if (!event.request.url.includes("skola24.se")) return;

  event.respondWith(
    configPromise.then(async ([targetUrl, transformText]) => {
      if (event.request.url !== targetUrl) return fetch(event.request);
      const transform = eval(`(${transformText})`);
      const response = await fetch(event.request.url, { credentials: "include" });
      const text = await response.text();
      return new Response(transform(text), {
        status: response.status,
        headers: response.headers,
      });
    })
  );
});
