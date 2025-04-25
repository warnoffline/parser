import { Loader } from "@/shared";
import { useVacancyStore } from "../model/store";
import { VacancyCard } from "./VacancyCard";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export const VacancyList = () => {
  const { vacancies, getVacancies, isLoading, totalPages } = useVacancyStore();
  const [currentPage, setCurrentPage] = useState(1);

  const fetchMoreData = () => {
    if (isLoading || currentPage >= totalPages) return;

    const nextPage = currentPage + 1;
    getVacancies({
      text: "React Frontend",
      area: "113",
      order_by: "publication_time",
      page: currentPage + 1,
      per_page: 30,
    });

    setCurrentPage(nextPage);
  };

  useEffect(() => {
    getVacancies({
      text: "React Frontend",
      order_by: "publication_time",
      area: "113",
      page: 1,
      per_page: 30,
    });
  }, [getVacancies]);

  if (isLoading && totalPages < 1)
    return (
      <div className="w-full h-[80dvh] flex justify-center items-center">
        <Loader />
      </div>
    );

  return (
    <InfiniteScroll
      dataLength={vacancies.length}
      next={fetchMoreData}
      hasMore={currentPage < totalPages}
      loader={
        <div className="w-full flex justify-center">
          <Loader />
        </div>
      }
      endMessage={<div>Больше нет вакансий</div>}
    >
      <div className="flex flex-wrap gap-5 justify-center px-2">
        {vacancies.map((v) => (
          <VacancyCard key={v.id} vacancy={v} />
        ))}
      </div>
    </InfiniteScroll>
  );
};
