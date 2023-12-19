function sendMessage() {
     const messageInput = document.getElementById('message_input');
    const chatMessage = document.getElementById('chat_messages');
}

if (messageInput.ariaValueMax.trim() !== '') {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message' ;
    messageDiv.textContent = messageInput.value;
    chatMessages.appendChild(messageDiv);
    messageInput.value = '';
}