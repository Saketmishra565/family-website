// Is file ka kaam sirf AI se message lana hai
export const getAIWelcome = async () => {
  // Yahan apni Gemini API Key daalein
  const apiKey = "YOUR_GEMINI_API_KEY_HERE"; 
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  const prompt = {
    contents: [{
      parts: [{
        text: "Write a 1-line very short, warm, and traditional Indian wedding/family welcome greeting in Hindi for 'Gautam Family'. Use words like 'Swaagat', 'Maanglik'. Keep it royal. Mention Indore's love."
      }]
    }]
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(prompt)
    });
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("AI Error:", error);
    return "गौतम परिवार के मंगल उत्सव में आपका हार्दिक स्वागत है!"; 
  }
};