const proxyUrl = "https://fathomless-cliffs-24896-d1ef41ca71c3.herokuapp.com/";
const apiUrl = "https://translation.googleapis.com/v2/projects/webtranslateapp/translations/text:translate";

document.getElementById("translationForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const text = document.getElementById("inputText").value;

  const translate = await fetch(proxyUrl + apiUrl, {
    method: "POST",
    headers: {
      "Authorization": "Bearer YOUR_API_KEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "source": "en",
      "target": "es",
      "text": text
    })
  });

  const response = await translate.json();

  console.log(response);

  document.getElementById("outputText").value = response.data.translations[0].translatedText;
});