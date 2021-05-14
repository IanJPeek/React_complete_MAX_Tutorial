import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback (async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    console.log("requestConfig", requestConfig)
    try {
      const response = await fetch(
        // 'https://react-max-tasks-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
        requestConfig.url,
        {
          method: requestConfig.method ? requestConfig.method: "GET",
          headers: requestConfig.headers ? requestConfig.headers: {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        }
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return { isLoading, error, sendRequest };
};

export default useHttp;
