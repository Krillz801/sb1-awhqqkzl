import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useJournalStore = create(
  persist(
    (set) => ({
      entries: [],
      checkIns: [],
      weeklyReviews: [],
      monthlyReviews: [],

      addEntry: (entry) =>
        set((state) => ({
          entries: [{ id: Date.now(), ...entry }, ...state.entries]
        })),

      addCheckIn: (checkIn) =>
        set((state) => ({
          checkIns: [{ id: Date.now(), ...checkIn }, ...state.checkIns]
        })),

      addWeeklyReview: (review) =>
        set((state) => ({
          weeklyReviews: [{ id: Date.now(), ...review }, ...state.weeklyReviews]
        })),

      addMonthlyReview: (review) =>
        set((state) => ({
          monthlyReviews: [{ id: Date.now(), ...review }, ...state.monthlyReviews]
        })),

      clearAll: () => set({ entries: [], checkIns: [], weeklyReviews: [], monthlyReviews: [] })
    }),
    {
      name: 'soul-haven-storage'
    }
  )
);

export default useJournalStore;