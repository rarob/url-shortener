const ACCESS_TOKEN = "77fad78b18c3ebb8c9d271138988419dcd437d9c";

const form = document.getElementById("main-form");

const urlField = document.getElementById("url");

const result = document.getElementById("result");

const debug = document.getElementById("debug");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // https://dev.bitly.com/api-reference

  const data = { long_url: urlField.value };

  fetch("https://api-ssl.bitly.com/v4/shorten", {
    method: "POST",

    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,

      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    })

    .then((json) => {
      result.innerHTML = json.link;

      debug.innerHTML = JSON.stringify(json, null, 2);
    })

    .catch((err) => (debug.innerHTML = err));
});
