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
      console.log(result.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      console.log("end");
    }
  }
  
/*

const key='1b7dbc78c894483b8c05dfd5925e3aa3';
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey:key,
  basePath: "https://api.aimlapi.com/",
});
const openai = new OpenAIApi(configuration);

async function run() {
  console.log("start")
  const response = await openai.createCompletion({
    model: "mistralai/Mistral-7B-Instruct-v0.2",
    prompt: "Tell me a joke",
    max_tokens: 50,
  });
  console.log(response.data.choices[0].text);
}
run();




// Generate images based on given prompts.
const axios = require('axios');
const fs = require('fs');

const url = 'https://api.aimlapi.com/images/generate';
const headers = {
  'Authorization': key,
  'Content-Type': 'application/json'
};
const payload = {
  'model': 'dalle-mini',
  'prompt': 'A sunset over a mountain range'
};

axios.post(url, payload, { headers: headers })
  .then(response => {
    fs.writeFileSync('output.png', response.data, 'binary');
  })
  .catch(error => {
    console.error(error);
  });

  // Convert audio files to text.
  const axios = require('axios');

  const url = 'https://api.aimlapi.com/stt';
  const headers = {
    'Authorization': key,
    'Content-Type': 'application/json'
  };
  const payload = {
    'model': 'g1_nova-2-general',
    'url': 'https://audio-samples.github.io/samples/mp3/blizzard_unconditional/sample-0.mp3'
  };
  
  axios.post(url, payload, { headers: headers })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });

    // Convert text to audio.

    const axios = require('axios');
const fs = require('fs');

const url = 'https://api.aimlapi.com/tts';
const headers = {
  'Authorization': key,
  'Content-Type': 'application/json'
};
const payload = {
  'model': 'g1_aura-asteria-en',
  'text': 'Hi! I\'m your friendly assistant.'
};

axios.post(url, payload, { headers: headers, responseType: 'arraybuffer' })
  .then(response => {
    fs.writeFileSync('output.wav', response.data);
  })
  .catch(error => {
    console.error(error);
  });


  /*Response Structure

Common Response Fields

id: Unique identifier for the request.

object: Type of object returned.

created: Timestamp of the request.

model: Model used for the request.

choices: List of completion choices.

usage: Token usage information.

Example Response (Chat Completion):


{
  "id": "cmpl-2zKST3SO0NMoQ",
  "object": "text_completion",
  "created": 1615241840,
  "model": "mistralai/Mistral-7B-Instruct-v0.2",
  "choices": [
    {
          "text": "\n\nSure! Here's a joke for you: Why don't scientists trust atoms? Because they make up everything!",
      "index": 0,
      "logprobs": null,
      "finish_reason": "length"
    }
  ],
  "usage": {
    "prompt_tokens": 5,
    "completion_tokens": 23,
    "total_tokens": 28
  }
}
  */






















/*
const apiKey2 = "zWu4A3enuelFIDnzMJBz3f1H6d62oQo7JzHAyDU1sCXhB_92v76RkWSGX0RrTX8-lXdGx1MHDjT3BlbkFJwK5aM6lNqSlLkLTI884ODUXFrDubdpte-oJuF-R1IGxXyIZcBFqyPCcf1fE1-EHyZZ9iGPbC4A"; // Use environment variable for API key
//import OpenAI from "node_modules\openai";
import OpenAI from "openai";

const openai = new OpenAI({
    organization: apiKey2,
    project: "$PROJECT_ID",
});

async function main() {
    const stream = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: "Say this is a test" }],
        stream: true,
    });
    for await (const chunk of stream) {
        process.stdout.write(chunk.choices[0]?.delta?.content || "");
    }
}

main();

const API_KEY = "asst_KypJzjGH7wWkD0qrFkLC9pPx";
const systemMessage = {
  "role": "system", 
  "content": "Explain things like you're talking to a software professional with 2 years of experience."
};

// Function to send a message and get a response from ChatGPT
async function getChatGPTResponse(userMessage) {
  // Create the message array
  const messages = [
    systemMessage,
    { role: "user", content: userMessage }
  ];

  // Prepare the request body
  const apiRequestBody = {
    "model": "gpt-3.5-turbo",
    "messages": messages
  };

  // Send the request to the API and get the response
  const response = await fetch("https://api.openai.com/v1/chat/completions ", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(apiRequestBody)
  });

  const data = await response.json();
  console.log(data)
}

// Example usage
async function input(){
  const userMessage = "How does a for loop work?";
  const chatGPTResponse = await getChatGPTResponse(userMessage);
  console.log("User:", userMessage);
  console.log("ChatGPT:", chatGPTResponse);
}
input();
*/