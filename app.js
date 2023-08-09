
const apiUrl = "https://translation.googleapis.com/language/translate/v2?key=AIzaSyBQ1uv1kQobCdpi68jKsHJ2UJqr-sBt2u4"

document.getElementById("translationForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const text = document.getElementById("inputText").value;

  const translate = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "target": "en",
      "q": text,
    })
  });

  const response = await translate.json();

  console.log(response);

  document.getElementById("outputText").value = response.data.translations[0].translatedText;
});