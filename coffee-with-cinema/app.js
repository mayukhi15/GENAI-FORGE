const API_KEY = "AIzaSyAeVkhBlwArKHaJipAJQ3WcnFZ4yrGHS8s";

const genAI = new GoogleGenerativeAI(API_KEY);

async function callAI(prompt) {
    try {
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash"
        });

        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();

    } catch (err) {
        console.error("AI ERROR:", err);
        alert("Error generating content. Check API key or script URL.");
    }
}

async function generateContent() {
    const story = document.getElementById("story").value;
    const lang = document.getElementById("language").value;

    if (!story.trim()) {
        alert("Please enter a story!");
        return;
    }

    localStorage.setItem("story", story);
    localStorage.setItem("language", lang);

    const screenplay = await callAI(`Write screenplay in ${lang}. Story: ${story}`);
    localStorage.setItem("screenplay", screenplay);

    const characters = await callAI(`Write 5 characters in ${lang}. Story: ${story}`);
    localStorage.setItem("characters", characters);

    const sound = await callAI(`Write sound design in ${lang}. Story: ${story}`);
    localStorage.setItem("sound", sound);

    window.location.href = "screenplay.html";
}
