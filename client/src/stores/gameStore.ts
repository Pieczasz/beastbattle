import { create } from 'zustand';

interface GameState {
	players: string[];
	addPlayer: (player: string) => void;
}

export const useGameStore = create<GameState>((set) => ({
	players: [],
	addPlayer: (player) =>
		set((state) => ({ players: [...state.players, player] })),
}));
