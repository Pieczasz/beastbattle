import { Server } from 'ws';

export function setupWebSocket(server: any) {
	const wss = new Server({ server });

	wss.on('connection', (ws) => {
		console.log('Player connected');

		ws.on('message', (data) => {
			console.log('Received:', data);
		});

		ws.on('close', () => {
			console.log('Player disconnected');
		});
	});

	return wss;
}
