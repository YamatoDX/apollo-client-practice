import React from "react";
import { useQuery, gql } from "@apollo/client";

export default function Variable() {
  const getProductByIdQuery = gql`
    query something($id: String) {
      getProductById(id: $id) {
        _id
        name
        price
        country
        city
        currency
      }
    }
  `;
  const { data, error, loading, refetch } = useQuery(getProductByIdQuery, {
    variables: {
      id: "D01",
    },
  });
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          if (loading || error) {
            console.log("loading", loading);
            console.error("error is", error);
            return;
          }
          console.log("data is", data);
        }}
      >
        Click to fetch Data
      </button>
    </>
  );
}
