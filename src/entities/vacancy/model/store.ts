import { create } from "zustand";
import { VacanciesParams, Vacancy, VacancyByIdResponse } from "./types";
import { fetchVacancies, fetchVacancyById } from "./actions";

interface VacancyStore {
  vacancies: Vacancy[];
  vacancy: VacancyByIdResponse | null;
  isLoading: boolean;
  totalPages: number;
  getVacancies: (params: VacanciesParams) => Promise<void>;
  getVacancy: (id: string) => Promise<void>;
}

export const useVacancyStore = create<VacancyStore>((set, get) => ({
  vacancies: [],
  vacancy: null,
  isLoading: false,
  totalPages: 0,
  getVacancies: async (params) => {
    const { vacancies } = get();

    set({ isLoading: true });

    const data = await fetchVacancies(params);

    const newItems = data.items.filter(
      (item) => !vacancies.some((v) => v.id === item.id)
    );

    set({
      vacancies: [...vacancies, ...newItems],
      isLoading: false,
      totalPages: data.pages,
    });
  },
  getVacancy: async (id) => {
    set({ isLoading: true });
    const data = await fetchVacancyById(id);
    set({ vacancy: data, isLoading: false });
  },
}));
