import { paths } from "@/shared/api/types";

export type VacanciesResponse =
  paths["/vacancies"]["get"]["responses"]["200"]["content"]["application/json"];

export type VacancyByIdResponse =
  paths["/vacancies/{vacancy_id}"]["get"]["responses"]["200"]["content"]["application/json"];

export type VacanciesParams = paths["/vacancies"]["get"]["parameters"]["query"];
export type Vacancy = VacanciesResponse["items"][0];
