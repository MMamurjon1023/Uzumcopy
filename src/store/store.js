import { create } from 'zustand';

export const useStore = create(set => ({
	favorite: [],
	addToFavorite: productId =>
		set(state => ({ favorite: [...state.favorite, productId] })),
	removeFromFavorite: productId =>
		set(state => {
			let eski = state.favorite;
			let yangi = eski.filter(id => id != productId);
			return { favorite: yangi };
		}),
}));
