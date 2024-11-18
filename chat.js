console.log("start");

let conversationHistory = []; // Array to keep track of conversation history
let userName = ""; // Variable to store user's name if provided

const form = document.getElementById("chatForm");
const inputField = document.querySelector(".inputdata");
const submitButton = document.querySelector(".submit");
const spinner = document.querySelector(".spinner");

form.addEventListener("submit", handleSubmit);

// Listen for the Enter key to trigger form submission
inputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        handleSubmit(event);
    }
});

async function handleSubmit(event) {
    event.preventDefault();

    let input = inputField.value;
    if (!input) return; // Don't process if input is empty

    // Show loading spinner
    spinner.style.display = "inline-block";

    // Check if the input contains a name introduction
    if (input.toLowerCase().includes("my name is ")) {
        userName = input.split("my name is ")[1].trim(); // Extract the name after "my name is"
    }

    // Append the user's message to conversation history
    conversationHistory.push({ role: "user", text: input });

    // Display the user message
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.textContent = input;
    document.getElementById("chatHistory").appendChild(userMessage);

    // Scroll to the latest message
    document.getElementById("chatHistory").scrollTop = document.getElementById("chatHistory").scrollHeight;

    // Clear the input field
    inputField.value = "";

    const apiKey = 'AIzaSyCZ-dsLDmfV8N0qaVMhNkrJhAOmTcy-cvE';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

    // Format the conversation history for API request
    const data = {
        contents: conversationHistory.map(message => ({
            parts: [{ text: message.text }]
        }))
    };

    // Add the user's name to the conversation history if it was provided
    if (userName) {
        data.contents.push({
            parts: [{ text: `The user's name is ${userName}.` }]
        });
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        // Check if response has the expected structure before accessing it
        let botMessageText = "I'm sorry, I couldn't process your request at the moment.";
        if (result.candidates && result.candidates[0] && result.candidates[0].content && result.candidates[0].content.parts) {
            botMessageText = result.candidates[0].content.parts[0].text;
        }

        // Append bot's message to conversation history
        conversationHistory.push({ role: "bot", text: botMessageText });

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
        // Hide the loading spinner
        spinner.style.display = "none";
        console.log("end");
    }
}
