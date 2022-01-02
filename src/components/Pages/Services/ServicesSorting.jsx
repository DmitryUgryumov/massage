import React, { useState } from "react";

const sortingList = [
  {
    id: 1,
    title: "По названию",
    selected: true,
    sortFunc: (services) => {
      return services.sort((a, b) => {
        let nameA = a.title.toLowerCase();
        let nameB = b.title.toLowerCase();

        return nameA > nameB ? 1 : -1;
      });
    },
  },
  {
    id: 2,
    title: "По цене",
    selected: false,
    sortFunc: (services) => {
      return services.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    },
  },
  {
    id: 3,
    title: "По времени",
    selected: false,
    sortFunc: (services) => {
      return services.sort((a, b) => parseInt(a.time) - parseInt(b.time));
    },
  },
];

const ServicesSorting = ({ setServices }) => {
  const [sorting, setSorting] = useState(sortingList);
  const activeSort = sorting.filter((sort) => sort.selected)[0];

  const changeSorting = (e) => {
    const newActiveSort = sorting.filter(
      (service) => service.title === e.target.value
    )[0];

    setSorting((prev) =>
      prev.map((sort) => ({
        ...sort,
        selected: sort.title === newActiveSort.title,
      }))
    );

    setServices((prev) => newActiveSort.sortFunc(prev.slice()));
  };

  return (
    <div className="services__select-container">
      <h2 className="services__select-title">Сортировать по:</h2>
      <select
        value={activeSort.title}
        onChange={changeSorting}
        className="services__select"
      >
        {sorting.map((sort) => (
          <option key={sort.id} value={sort.title} className="services__option">
            {sort.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ServicesSorting;
