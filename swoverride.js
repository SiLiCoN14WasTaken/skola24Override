self.addEventListener("fetch", (event) => {
  event.respondWith(
    Promise.all([
      fetch("https://raw.githubusercontent.com/SiLiCoN14WasTaken/skola24Override/main/url.txt"),
      fetch("https://raw.githubusercontent.com/SiLiCoN14WasTaken/skola24Override/main/transform.js")
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
