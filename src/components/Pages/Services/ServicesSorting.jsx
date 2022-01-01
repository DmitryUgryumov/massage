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

    console.log(newActiveSort);

    setSorting((prev) =>
      prev.map((sort) => ({
        ...sort,
        selected: sort.title === newActiveSort.title,
      }))
    );

    setServices((prev) => newActiveSort.sortFunc(prev.slice()));
  };

  return (
    <section>
      <select value={activeSort.title} onChange={changeSorting}>
        {sorting.map((sort) => (
          <option key={sort.id} value={sort.title}>
            {sort.title}
          </option>
        ))}
      </select>
    </section>
  );
};

export default ServicesSorting;
