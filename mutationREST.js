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
            mutation something{
                addProduct(_id: "D1000", name: "Sample Bro", organisationId: "Mercury"){
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
      console.log("data is", data);
    })
    .catch((err) => {
      console.error(err.message);
    })
    .finally(() => {
      console.log("process finished in finally");
    });
};

sampleFunction();
