// Configuración del cliente de TMI.js
const client = new tmi.Client({
    connection: {
        secure: true,
        reconnect: true
    },
    channels: [ 'tu_canal_de_twitch' ]
});

// Conectarse al chat de Twitch
client.connect();

// Escuchar los mensajes
client.on('message', (channel, tags, message, self) => {
    if(self) return;

    const chatContainer = document.getElementById('chat-messages');

    // Crear un nuevo mensaje
    const chatMessage = document.createElement('li');
    chatMessage.classList.add('chat-message');
    chatMessage.innerHTML = `<span class="username">${tags['display-name']}</span><span class="message">${message}</span>`;

    // Añadir el mensaje al contenedor
    chatContainer.appendChild(chatMessage);

    // Desplazar hacia abajo para ver el nuevo mensaje
    chatContainer.scrollTop = chatContainer.scrollHeight;
});