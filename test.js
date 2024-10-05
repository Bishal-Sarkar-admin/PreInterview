function speak(text) {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel(); // Clears the queue
    let text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "en-GB";

    text_speak.onstart = () => {
      console.log("Speech started");
    };

    text_speak.onend = () => {
      console.log("Speech finished");
    };

    text_speak.onerror = (e) => {
      console.error("Speech synthesis error:", e);
    };

    window.speechSynthesis.speak(text_speak);
  } else {
    console.error("SpeechSynthesis API is not supported in this browser.");
  }
}
// Function to get data from localStorage
function getDataFromLocalStorage(key) {
  const itemStr = localStorage.getItem(key);

  // Check if data exists in localStorage
  if (!itemStr) {
    console.log("No data found for key:", key);
    return null;
  }

  // Parse the data if found
  const item = JSON.parse(itemStr);

  // Safely check if 'data' exists and return it
  return item.data ? item.data.data : null;
}

// Function to dynamically display topic data for a given domain
function education(domain, topic, reserveUserText) {
  const newdata = getDataFromLocalStorage(domain);
  if (newdata && Array.isArray(newdata)) {
    let outputHTML = []; // Initialize an empty array for the content

    // Loop through the array and append each entry's topic data to the output string
    newdata.forEach((entry, index) => {
      if (entry[topic] && index === 0) {
        outputHTML[index] = `<p>${reserveUserText.toUpperCase()}</p>`;
      } else if (entry[topic]) {
        outputHTML[index] = `<p> ${index}: ${entry[topic]}</p>`;
      }
    });
    return outputHTML;

    // Update the HTML content of the #test div with all entries
  } else {
    console.log(`Data not found for domain: ${domain}`, newdata);
  }
}

// Call the function for domain "mern" and topic "node.js"
let output = "";
let person = prompt("Please enter one topic");
let reserveUserText = person;
function formatText(input) {
  // Remove all extra spaces and convert to lowercase
  let formattedText = input.replace(/\s+/g, "").toLowerCase();
  return formattedText;
}
person = formatText(person);
if (
  person == "java" ||
  person == "c" ||
  person == "c++" ||
  person == "python"
) {
  output = education("software_deplopment", person, reserveUserText);
} else if (person == "html" || person == "css" || person == "javascript") {
  if (person == "javascript") {
    person = "javajavascript";
  }
  output = education("web_deplopment_frontend", person, reserveUserText);
} else if (
  person == "mongodb" ||
  person == "express" ||
  person == "react" ||
  person == "node.js"
) {
  output = education("mern", person, reserveUserText);
} else if (person == "sql" || person == "aws") {
  output = education("sql_aws", person, reserveUserText);
} else if (
  person == "dsa" ||
  person == "computernetwork" ||
  person == "dbms" ||
  person == "os" ||
  person == "se"
) {
  output = education("subject", person, reserveUserText);
} else if (person == "hr" || person == "tricky") {
  output = education("hr_tricky", person, reserveUserText);
} else {
  alert(
    `Available Topics: C, C++, Java, Python, SQL, AWS, HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, DSA, Computer Networks, DBMS, OS, SE, HR, Tricky Questions.
`
  );
}

const testDiv = document.getElementById("test");
// testDiv.innerHTML = output;

//currentIndex
let currentIndex = 0;
testDiv.innerHTML = output[currentIndex];

// // Event listeners for the buttons
document.getElementById("previous").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    let outputText = output[currentIndex]
      .replace("<p>", "")
      .replace("</p>", "");
    speak(outputText);
    testDiv.innerHTML = output[currentIndex];
  }
  document.querySelector("#feedback").innerHTML = "";
  startTimer("end");
});
//Jump To Custom Index
const Jump = document.getElementById("jump");
Jump.addEventListener("click", () => {
  currentIndex = prompt("Enter the custom index that you want to jump");
  let outputText = output[currentIndex].replace("<p>", "").replace("</p>", "");
  speak(outputText);
  testDiv.innerHTML = output[currentIndex];
  updatedetect();
});

//When Timer complete, Next Question appear
// Function to update content after 2 minutes
function autonext() {
  // Update currentIndex
  currentIndex >= output.length - 1 ? (currentIndex = 0) : currentIndex++;

  // Extract and modify the output text
  let outputText = output[currentIndex].replace("<p>", "").replace("</p>", "");

  // Call the speak function (assuming it's defined elsewhere)
  speak(outputText);

  // Log the output text for debugging
  console.log(outputText);

  // Update the innerHTML of testDiv
  testDiv.innerHTML = output[currentIndex];
  document.querySelector("#feedback").innerHTML = "";
  updatedetect();
}
document.getElementById("next").addEventListener("click", () => {
  if (currentIndex < output.length - 1) {
    currentIndex++;
    let outputText = output[currentIndex]
      .replace("<p>", "")
      .replace("</p>", "");
    speak(outputText);
    testDiv.innerHTML = output[currentIndex];
  }
  document.querySelector("#feedback").innerHTML = "";
  updatedetect();
});

//Get user input by clicking submit button
let input = document.querySelector("#content");
let submit = document.querySelector("#submit");

function userout() {
  let userdata = [];

  userdata[0] = `question: ${output[currentIndex]}`;
  userdata[1] = `my answer: ${input.value}`; // Get the input value
  userdata[2] = `Please provide feedback on my answer's correctness and completeness as percentages. For example: "Your answer's correctness is 95%. Your answer's completeness is 85%. Your overall Score Performance is (95%) * (85%) = 80.75%." Format the feedback in HTML with appropriate styling, and include a brief summary of the answer's strengths and areas for improvement.`;
  input.value = "";
  return userdata; // Return the user data array
}

////mic logic
let btn = document.querySelector("#mic"); // Mic button

// Initialize SpeechRecognition API (cross-browser support)
let SpeechRecognition1 =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition1();

// Set recognition parameters (optional)
recognition.continuous = false; // Stops after a single recognition
recognition.lang = "en-US"; // Language for recognition
recognition.interimResults = false; // Display only final results
recognition.maxAlternatives = 1; // Only 1 alternative is provided

// Add event listener for the mic button to start recognition
btn.addEventListener("click", () => {
  recognition.start(); // Start recognition when the button is clicked
  console.log("Voice recognition started. Speak into the mic...");
  startTimer("end");
});

// Event triggered when recognition has a result
recognition.onresult = function (event) {
  let transcript = event.results[0][0].transcript; // Get the recognized speech
  console.log("Recognized text:", transcript);

  // Set the recognized text into the input field
  input.value = transcript;
};

// Error handling for recognition
recognition.onerror = function (event) {
  console.error("Speech recognition error:", event.error);
  alert("Error occurred in recognition: " + event.error);
};

// When recognition ends (after a result or if stopped)
recognition.onend = function () {
  console.log("Speech recognition ended.");
};

// Function to check and store data in localStorage
function storeAndRetrieveAPIKey() {
  // Get the value of "apiKey" from localStorage
  let apiKey = localStorage.getItem("apiKey");

  // If "apiKey" is not present (i.e., localStorage returns null)
  if (
    apiKey == "API_KEY_INVALID" ||
    apiKey == null ||
    apiKey == undefined ||
    apiKey.length < 30
  ) {
    // Prompt the user for the API key
    if (apiKey == "API_KEY_INVALID") {
      apiKey = prompt("Invalid API key. Please enter a valid API key.");
    } else {
      apiKey = prompt("Enter Your API Key");
    }

    // Check if the user entered a valid (non-empty) key
    if (apiKey !== null && apiKey !== "") {
      // Store the API key in localStorage
      localStorage.setItem("apiKey", apiKey);
      console.log("API Key has been saved to localStorage.");
    } else {
      console.log("No valid API key was entered.");
    }
  } else {
    // API key is already stored, just retrieve it
    console.log("API Key is already stored in localStorage.");
  }

  // Return the stored or entered API key
  return apiKey;
}
