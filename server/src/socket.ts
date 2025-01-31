import { Server } from 'socket.io';

export function setupWebSocket(server: any) {
	const io = new Server(server);

	io.on('connection', (socket) => {
		socket.on('joinGame', (roomId) => {
			socket.join(roomId);
		});

		socket.on('chatMessage', (message) => {
			io.to(message.roomId).emit('message', message);
		});
	});
}
