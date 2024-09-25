// Generate responses based on given prompts.
console.log("start");

//Gemini aifetchAI();
fetchAI();
async function fetchAI() {
    console.log("ai");
    const apiKey = 'AIzaSyCZ-dsLDmfV8N0qaVMhNkrJhAOmTcy-cvE';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
  
    const data = {
      contents: [
        {
          parts: [
            {
              text: "Explain how spaceX works"
            }
          ]
        }
      ]
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      const result = await response.json();
      const data=result.candidates[0].content.parts[0].text;
      document.querySelector(".data").textContent=data;
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      console.log("end");
    }
  }