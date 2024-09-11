import { create } from 'zustand';

interface State {
  isBurgerMenuOpen: boolean;
  openBurgerMenu: () => void;
  closeBurgerMenu: () => void;
}

const useModalStore = create<State>((set) => ({
  isBurgerMenuOpen: false,
  openBurgerMenu() {
    set({ isBurgerMenuOpen: true });
  },
  closeBurgerMenu() {
    set({ isBurgerMenuOpen: false });
  },
}));

export default useModalStore;
