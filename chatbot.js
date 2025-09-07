document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keypress", function(e) {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const input = document.getElementById("user-input");
  const msg = input.value.trim();
  if (!msg) return;

  addMessage(msg, "user-msg");
  input.value = "";

  // Simple bot response
  setTimeout(() => {
    const response = getBotResponse(msg);
    addMessage(response, "bot-msg");
  }, 500);
}

function addMessage(text, className) {
  const chatBox = document.getElementById("chat-box");
  const div = document.createElement("div");
  div.className = className;
  div.innerText = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Simple rule-based bot
function getBotResponse(input) {
  input = input.toLowerCase();

  if (input.includes("hi") || input.includes("hello")) {
    return "Hi there! 👋 Welcome to TinyRightsDefenders. I’m your buddy to learn about rights!";
  } 
  else if (input.includes("how are you")) {
    return "I'm just code, but I’m always happy to help you learn your rights 😄. How are you?";
  } 
  else if (input.includes("time")) {
    return "Current time is: " + new Date().toLocaleTimeString();
  } 
  else if (input.includes("date")) {
    return "Today's date is: " + new Date().toLocaleDateString();
  } 
  else if (input.includes("bye")) {
    return "Goodbye! 👋 Keep learning and stay safe!";
  } 

  // ✅ Children’s rights basics
  else if (input.includes("rights")) {
    return "Children have the right to education, safety, health, and to be heard. 📚👩‍⚕️💬";
  }
  else if (input.includes("education")) {
    return "Every child in India has the right to free education up to 14 years under the RTE Act 🎓.";
  }
  else if (input.includes("child labour") || input.includes("work")) {
    return "Child labour under 14 years is not allowed 🚫. Children should study and play, not work.";
  }
  else if (input.includes("safety")) {
    return "Children have the right to feel safe. If you ever feel unsafe, tell a trusted adult or call 📞 1098 (Childline).";
  }
  else if (input.includes("childline") || input.includes("1098")) {
    return "📞 1098 is a free helpline for children in India who need help.";
  }

  // ✅ Fun & gamified replies
  else if (input.includes("quiz")) {
    return "Here’s a quick one! ❓ At what age does free education stop in India? (Hint: 14 years)";
  }
  else if (input.includes("game")) {
    return "Let’s play a rights game! I’ll ask you questions and you try to answer. Type 'quiz' to begin 🎮.";
  }
  else if (input.includes("story")) {
    return "Once upon a time, there was a child who knew their rights and helped friends stay safe. 🌟 Do you want to hear more?";
  }

  // ✅ Encouragement
  else if (input.includes("thank you")) {
    return "You’re welcome! 😊 Always remember, knowing your rights makes you stronger!";
  }
  else if (input.includes("who are you")) {
    return "I’m TinyRightsBot 🤖, here to teach you about your rights in a fun way!";
  }
  else {
    return "Sorry, I don’t understand that yet. Try asking about 'education', 'child labour', 'safety', or 'childline'.";
  }
}

