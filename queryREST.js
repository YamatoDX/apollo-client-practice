const axios = require("axios");

const sampleFunction = () => {
  const url = "https://apollo-practice-2.vercel.app/";
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = {
    query: `
        query something{
            queryProduct{
                _id
                name
            }
        }
    `,
  };
  axios
    .post(url, JSON.stringify(body), config)
    .then((res) => {
      const { data } = res;
      console.log("data is", data.data.queryProduct);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log("process finished in finally");
    });
};

sampleFunction();
