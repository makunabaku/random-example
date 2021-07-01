addEventListener("fetch", (event: any) => {
  const response = new Response("random example", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});