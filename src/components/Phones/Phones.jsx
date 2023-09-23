// import { useEffect, useState } from "react";
import useGetData from "../../Hooks/useGetData";
import PhonesCard from "./PhonesCard";
// import { useLoaderData } from "react-router-dom";

const Phones = () => {
  // const phones = useLoaderData();

  // use Custom hooks
  const [phones] = useGetData();
  // console.log(phones);

  // useEffect(() => {
  //   fetch("./phones.json")
  //     .then((res) => res.json())
  //     .then((data) => setPhones(data));
  // }, []);

  return (
    <div className="my-10">
      <h1 className="text-4xl text-center font-semibold py-5 ">
        {" "}
        Our Phone Collections:{" "}
      </h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {phones?.map((phone) => (
          <PhonesCard key={phone.id} phone={phone}></PhonesCard>
        ))}
      </div>
    </div>
  );
};

export default Phones;
