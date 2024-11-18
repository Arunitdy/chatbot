console.log("start");

document.querySelector(".submit").addEventListener("click", async function (event) {
    event.preventDefault();

    let input = document.querySelector(".inputdata").value;
    if (!input) return; // Don't process if input is empty

    // Display the user message
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.textContent = input;
    document.getElementById("chatHistory").appendChild(userMessage);

    // Scroll to the latest message
    document.getElementById("chatHistory").scrollTop = document.getElementById("chatHistory").scrollHeight;

    // Clear the input field
    document.querySelector(".inputdata").value = "";

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
        const botMessageText = result.candidates[0].content.parts[0].text;

        // Display the bot message
        const botMessage = document.createElement("div");
        botMessage.classList.add("message", "bot-message");
        botMessage.textContent = botMessageText;
        document.getElementById("chatHistory").appendChild(botMessage);

        console.log(botMessageText);

        // Scroll to the latest message
        document.getElementById("chatHistory").scrollTop = document.getElementById("chatHistory").scrollHeight;

    } catch (error) {
        console.error('Error:', error);
        const errorMessage = document.createElement("div");
        errorMessage.classList.add("message", "bot-message");
        errorMessage.textContent = "Sorry, there was an error processing your request.";
        document.getElementById("chatHistory").appendChild(errorMessage);
    } finally {
        console.log("end");
    }
});
