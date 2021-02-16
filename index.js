//-------------------------------------------------------------------------------//
//           Bot de Twitch creado por Francisco Freire (franfreire.com)          //
//-------------------------------------------------------------------------------//

const tmi = require('tmi.js')

const client = new tmi.Client({
	options: { debug: true },
	connection: { reconnect: true },
	identity: {
		username: 'PanchoUY', //Nombre de tu canal de twitch
		password: 'oauth:f1ht8e44cthzjey5ezns6oxt1q0hlj' //OAuth de tu canal de twitch (https://twitchapps.com/tmi/)
	},
	channels: [ 'PanchoUY' ] //Nuevamemte el nombre de tu canal de twitch
});

//Conexión al canal
client.connect();

//Eventos del bot
client.on('message', (channel, tags, message, self) => {
	if(self) return;
	const args = message.slice(1).split(' ');
	const command = args.shift().toLowerCase();

    //Comandos del bot
    if(command === 'comandos') {
        client.say(channel, 'Comandos disponibles: hola, decir')
    }
    
	if(message.toLowerCase() === 'hola') {
		client.say(channel, `@${tags.username}, hola! ¿Como estás?`);
	}

	if(command === 'decir') {
		client.say(channel, `@${tags.username}, has dicho: "${args.join(' ')}"`);
	}
});

//Eventos con los comandos default de twitch 
client.on("clearchat", (channel) => {
    client.say(channel, `Un moderador ha limpiado el chat por completo.`);
});