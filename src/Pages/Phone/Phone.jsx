import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";

const Phone = () => {
  const [phone, setPhone] = useState({});

  const phones = useLoaderData();
  const { id } = useParams();

  //   console.log(id);
  //   console.log(phones);

  useEffect(() => {
    const findPhone = phones?.find((phone) => phone.id === id);
    setPhone(findPhone);
  }, [id, phones]);
  //   console.log(phone);

  return (
    <section className="my-10">
      <h1 className="py-16 text-3xl font-medium text-center bg-green-200">
        Phone Details{" "}
      </h1>
      <PhoneCard phone={phone}></PhoneCard>
    </section>
  );
};

export default Phone;
