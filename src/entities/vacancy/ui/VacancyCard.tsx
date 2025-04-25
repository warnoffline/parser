import {
  getCurrencySymbol,
  getSalaryRange,
  Card,
  Button,
  formatDate,
} from "@/shared";
import { Vacancy } from "../model/types";
import { MapPin, Flame } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  vacancy: Vacancy;
}

export const VacancyCard = ({ vacancy }: Props) => {
  const navigate = useNavigate();
  const description = (
    <>
      {vacancy.salary_range ? (
        <div className="text-sm text-gray-400 font-medium">
          <p>
            {getSalaryRange(vacancy.salary_range.from, vacancy.salary_range.to)}{" "}
            {getCurrencySymbol(vacancy.salary_range.currency)}{" "}
            {vacancy.salary_range.mode.name}
          </p>
        </div>
      ) : (
        <p className="text-sm text-gray-400 font-medium">Зарплата не указана</p>
      )}
      <span className="text-sm font-bold flex items-center text-gray-100 gap-1">
        <Flame width={"0.875rem"} />
        {vacancy.employer.name}
      </span>
      {vacancy.address?.city && (
        <span className="text-sm flex items-center gap-1 text-gray-100">
          <MapPin width={"0.875rem"} /> г. {vacancy.address?.city}{" "}
        </span>
      )}
      <p className="text-sm flex items-center gap-1 text-gray-100">
        {vacancy.experience?.name}
      </p>
      <p className="text-sm font-bold flex items-center gap-1 text-gray-500">
        {formatDate(vacancy.published_at)}
      </p>
    </>
  );
  const actionSlot = (
    <>
      <Button
        className="py-2 w-1/3"
        onClick={() => navigate(`/vacancy/${vacancy.id}`)}
      >
        Подробнее
      </Button>
      <Button
        className="w-full"
        fill
        onClick={() => window.open(vacancy.alternate_url, "_blank")}
      >
        Перейти к вакансии
      </Button>
    </>
  );

  return (
    <Card
      title={vacancy.name}
      description={description}
      actionSlot={actionSlot}
    />
  );
};
