import { create } from 'zustand';

interface GameState {
	players: string[];
	maxPlayers: number;
	gameStatus: 'waiting' | 'inProgress' | 'finished';
	messages: { sender: string; text: string }[];
	addPlayer: (player: string) => void;
	addMessage: (message: { sender: string; text: string }) => void;
}

export const useGameStore = create<GameState>((set) => ({
	players: [],
	maxPlayers: 6,
	gameStatus: 'waiting',
	messages: [],
	addPlayer: (player) =>
		set((state) => ({ players: [...state.players, player] })),
	addMessage: (message) =>
		set((state) => ({ messages: [...state.messages, message] })),
}));
