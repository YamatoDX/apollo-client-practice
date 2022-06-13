import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";

export default function Home() {
  const allProductsQuery = gql`
    query something {
      queryProduct {
        _id
        name
      }
    }
  `;
  const { data, loading, error, refetch } = useQuery(allProductsQuery, {
    pollInterval: 60000,
  });
  return (
    <>
      <div className="text-center underline text-red-700 font-bolder">
        hello
      </div>
      <button
        className="btn"
        onClick={() => {
          if (loading) {
            console.log("still loading");
            return;
          }
          if (error) {
            console.error("error is", error);
            return;
          }
          console.log("data is", data);
        }}
      >
        Click to see allProducts Data
      </button>
      <button onClick={() => refetch()}>Click to refetch</button>
    </>
  );
}
