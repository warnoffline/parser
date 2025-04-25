import { useVacancyStore } from "@/entities/vacancy/model/store";
import { Button, getCurrencySymbol, getSalaryRange } from "@/shared";
import {
  ArrowLeft,
  ArrowUp,
  CircleUserRoundIcon,
  Loader,
  MapPin,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
export function Vacancy() {
  const { getVacancy, vacancy, isLoading } = useVacancyStore();
  const { id } = useParams();
  const navigate = useNavigate();

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 50); // показывать стрелку, если скролл вниз более чем на 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (id) getVacancy(id);
  }, [getVacancy, id]);

  if (isLoading)
    return (
      <div className="w-full h-[80dvh] flex justify-center items-center">
        <Loader />
      </div>
    );

  if (!vacancy)
    return (
      <div className="w-full h-[80dvh] flex justify-center items-center">
        <div className="fixed left-5 top-5">
          <Button fill onClick={() => navigate(-1)}>
            <ArrowLeft />
          </Button>
        </div>
        Что-то пошло не так
      </div>
    );

  return (
    <div className="w-full py-10 flex justify-center">
      <div className="fixed left-3 top-3">
        <Button fill className="p-3 rounded-full" onClick={() => navigate(-1)}>
          <ArrowLeft />
        </Button>
      </div>
      <div className="w-full sm:w-8/12 flex flex-col items-center gap-5 p-2">
        <header className="w-full flex flex-col sm:flex-row gap-5 justify-between sm:p-0">
          <div className="sm:w-[60%] border border-gray-600 rounded-4xl p-10">
            <p className="font-bold sm:text-4xl text-2xl text-gray-100">
              {vacancy?.name}
            </p>
            {vacancy.salary_range ? (
              <div className="sm:text-lg text-gray-500 font-medium">
                <p>
                  {getSalaryRange(
                    vacancy.salary_range.from,
                    vacancy.salary_range.to
                  )}{" "}
                  {getCurrencySymbol(vacancy.salary_range.currency)}{" "}
                  {vacancy.salary_range.mode.name}
                </p>
              </div>
            ) : (
              <p className="sm:text-lg text-gray-500 font-medium">
                Зарплата не указана
              </p>
            )}
            {vacancy.address?.city && (
              <span className="sm:text-lg flex items-center gap-1 text-gray-400">
                <MapPin width={"1.125rem"} /> г. {vacancy.address?.city}{" "}
              </span>
            )}
            <div className="py-2">
              <p className="sm:text-md text-sm text-gray-400">
                Опыт работы: {vacancy.experience?.name}
              </p>
              <p className="sm:text-md text-sm text-gray-400">
                {vacancy.employment_form?.name} занятость
              </p>
              <p className="sm:text-md text-sm text-gray-400">
                Формат работы:{" "}
                {vacancy.work_format?.map((format) => {
                  return <span>{format?.name} </span>;
                })}
              </p>
              <p className="sm:text-md text-sm text-gray-400">
                Рабочие часы:{" "}
                {vacancy.working_hours?.map((hours) => (
                  <span>{hours?.name} </span>
                ))}
              </p>
            </div>
            <Button
              className="p-2 w-full"
              fill
              onClick={() => window.open(vacancy.alternate_url)}
            >
              Открыть вакансию
            </Button>
          </div>
          <div className="sm:w-[35%] h-fit border border-gray-600 rounded-4xl p-10 flex gap-10">
            {vacancy.employer?.logo_urls?.original ? (
              <img
                className="w-20 h-20 border border-gray-600 rounded-full object-contain"
                src={vacancy.employer?.logo_urls?.original}
              />
            ) : (
              <CircleUserRoundIcon width={"5rem"} />
            )}
            <div className=" flex flex-col gap-2">
              <p className="font-bold text-xl text-gray-100">
                {vacancy.employer?.name}
              </p>
              {vacancy.employer?.alternate_url && (
                <Button
                  className="p-2 w-full"
                  onClick={() =>
                    window.open(vacancy.employer?.alternate_url?.toString())
                  }
                >
                  Узнать больше
                </Button>
              )}
            </div>
          </div>
        </header>
        <main className="border border-gray-600 rounded-4xl p-8">
          <div
            className="text-gray-400"
            dangerouslySetInnerHTML={{ __html: vacancy.description }}
          />
        </main>
        {showScrollTop && (
          <Button
            fill
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-5 right-5 z-50 p-3 rounded-full transition sm:hidden"
          >
            <ArrowUp />
          </Button>
        )}
      </div>
    </div>
  );
}
