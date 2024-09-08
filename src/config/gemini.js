

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

// import {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
// }  from "@google/generative-ai";

// // const apiKey = process.env.AIzaSyBfhFY49fDOhfKmPbBtLQCZrmyOK3J825I;
// const apiKey = 'AIzaSyBfhFY49fDOhfKmPbBtLQCZrmyOK3J825I';
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//     model: "gemini-1.5-flash",
// });

// const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 64,
//     maxOutputTokens: 8192,
//     responseMimeType: "text/plain",
// };

// async function run(prompt) {
//     const chatSession = model.startChat({
//         generationConfig,
//         // safetySettings: Adjust safety settings
//         // See https://ai.google.dev/gemini-api/docs/safety-settings
//         history: [
//         ],
//     });

//     const result = await chatSession.sendMessage(prompt);
//     console.log(result.response.text());
//     return response.text();
// }

// export default run;



//2 



import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";

// const apiKey = process.env.AIzaSyBfhFY49fDOhfKmPbBtLQCZrmyOK3J825I;
const apiKey = 'AIzaSyBfhFY49fDOhfKmPbBtLQCZrmyOK3J825I';
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function run(prompt) {
    const chatSession = model.startChat({
        generationConfig,
        // safetySettings: Adjust safety settings
        // See https://ai.google.dev/gemini-api/docs/safety-settings
        history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    
    // Corrected to return the response from 'result'
    return result.response.text();
}

export default run;
