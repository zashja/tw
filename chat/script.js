document.addEventListener('DOMContentLoaded', () => {
    const client = new tmi.Client({
        connection: {
            secure: true,
            reconnect: true
        },
        channels: ['zashja76'] // Reemplaza con el nombre correcto de tu canal
    });

    client.connect();

    client.on('connected', (address, port) => {
        console.log(`* Conectado a ${address}:${port}`);
    });

    client.on('message', (channel, tags, message, self) => {
        if (self) return;

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
});