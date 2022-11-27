import { useState, useEffect } from "react";
import axios from "axios";

// useRequest({url: "https://example.com", method: "GET"})
const useRequest = (config, depedencies = []) => {
  // state lưu trữ data từ API
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      // call API
      const response = await axios(config);
      // thành công
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, depedencies);

  return { data };
};

export default useRequest;