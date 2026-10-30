// Tells Bing and the other IndexNow search engines that the site's pages have
// changed, so they recrawl now instead of on their own schedule. Bing's index
// also feeds ChatGPT search and Copilot answers.
//
// Run after a deploy is live:  npm run indexnow
const host = "ayan.is-a.dev";
const key = "d46af262ae34ec339d2579213a8eb8b3"; // must match public/d46af262ae34ec339d2579213a8eb8b3.txt

const sitemap = await fetch(`https://${host}/sitemap-0.xml`).then((res) => res.text());
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
});

// 200 and 202 both mean accepted; 403 means the key file isn't live yet.
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URLs`);
