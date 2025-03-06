document.addEventListener('DOMContentLoaded', function() {
    const promptInput = document.getElementById('prompt');
    const submitButton = document.getElementById('submit');
    const chatHistory = document.getElementById('chat-history');
    const apiKey = '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';
    const apiUrl = 'https://openrouter.ai/api/v1/chat/completions';
    const model = 'google/gemini-2.0-flash-thinking-exp:free';

    function formatMessage(message) {
        message = message.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Bold
        message = message.replace(/\*(.*?)\*/g, '<em>$1</em>'); // Italics

        let lines = message.split("\n");
        let formattedMessage = "";
        let inList = false;

        for (let line of lines) {
            if (line.startsWith("- ")) {
                if (!inList) {
                    formattedMessage += "<ul>";
                    inList = true;
                }
                formattedMessage += `<li>${line.substring(2)}</li>`;
            } else {
                if (inList) {
                    formattedMessage += "</ul>";
                    inList = false;
                }
                formattedMessage += `<p>${line}</p>`;
            }
        }
        if (inList) {
            formattedMessage += "</ul>";
        }

        return formattedMessage;
    }

    function addMessage(message, className) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add(className);
        messageDiv.innerHTML = formatMessage(message);

        if (className === "user-message") {
            let textLength = message.length;
            let widthPercentage = Math.max(10, Math.min(40, textLength / 2)) + "%";
            messageDiv.style.width = widthPercentage;
        }

        chatHistory.appendChild(messageDiv);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    submitButton.addEventListener('click', async () => {
        const prompt = promptInput.value;
        if (!prompt.trim()) return;

        addMessage(prompt, 'user-message');
        promptInput.value = '';

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: model,
                    messages: [{ role: "user", content: prompt }]
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const aiResponse = data.choices[0].message.content;
            addMessage(aiResponse, 'ai-message');

        } catch (error) {
            console.error('Error:', error);
            addMessage(`Error: ${error.message}`, 'ai-message');
        }
    });

    promptInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            submitButton.click();
        }
    });
});
