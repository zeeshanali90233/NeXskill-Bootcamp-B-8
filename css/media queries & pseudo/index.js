function sendQuery() {
  const inputRef = document.querySelector("#query");
  const queryValue = inputRef.value;
  console.log(queryValue);

  axios
    .post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
      {
        contents: [
          {
            parts: [
              {
                text: "You are an swimmer and answer userQuery. Never answer anything oursite swimming and excuse for it.",
              },
              {
                text: queryValue,
              },
            ],
          },
        ],
      },
      {
        headers: {
          "X-Goog-Api-Key": "AIzaSyBDJLD9rP4c3ij5QrZ0XEf1HnWkvcMNx8k",
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      const aiReply = response.data.candidates[0].content.parts[0].text;
      const divRef = document.querySelector(".response");
      divRef.innerHTML = aiReply;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
