import { useEffect, useState } from "react";

const useGetData = () => {
  const [data, getData] = useState([]);

  useEffect(() => {
    fetch("/phones.json")
      .then((res) => res.json())
      .then((data) => getData(data));
  }, []);
  return [data];
};

export default useGetData;
