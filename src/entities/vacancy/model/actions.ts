import { apiInstance } from "@/shared";
import {
  VacanciesParams,
  VacanciesResponse,
  VacancyByIdResponse,
} from "./types";

export const fetchVacancies = async (
  params: VacanciesParams
): Promise<VacanciesResponse> => {
  const response = await apiInstance.get<VacanciesResponse>("/vacancies", {
    params,
  });
  return response.data;
};

export const fetchVacancyById = async (
  id: string
): Promise<VacancyByIdResponse> => {
  const response = await apiInstance.get<VacancyByIdResponse>(
    `/vacancies/${id}`,
    {
      params: {
        host: "hh.ru",
      },
    }
  );
  return response.data;
};
