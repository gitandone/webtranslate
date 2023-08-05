document.getElementById("translationForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const text = document.getElementById("inputText").value;
  
    const translate = await fetch("https://translation.googleapis.com/v2/projects/webtranslateapp/translations/text:translate", {
      method: "POST",
      headers: {
        "Authorization": "Bearer AIzaSyBQ1uv1kQobCdpi68jKsHJ2UJqr-sBt2u4",
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