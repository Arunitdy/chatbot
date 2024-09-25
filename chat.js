// Generate responses based on given prompts.
console.log("start");

//Gemini aifetchAI();
document.querySelector(".submit").addEventListener("click",
async function (event) {
    event.preventDefault();
    let input=document.querySelector(".inputdata").value;
    console.log("ai");
    const apiKey = 'AIzaSyCZ-dsLDmfV8N0qaVMhNkrJhAOmTcy-cvE';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
  
    const data = {
      contents: [
        {
          parts: [
            {
              text: input
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
      const data1=result.candidates[0].content.parts[0].text;
      document.querySelector(".data").textContent = data1;
      input=""
      console.log(data1);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      console.log("end");
    }
  });