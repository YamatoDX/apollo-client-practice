import React from "react";
import { useLazyQuery, gql } from "@apollo/client";

export default function Lazy() {
  const allProductsQuery = gql`
    query something {
      queryProduct {
        _id
        name
        country
        city
        price
      }
    }
  `;
  const [activatorFunction, { data, error, loading, refetch }] = useLazyQuery(
    allProductsQuery,
    {
      pollInterval: 60000,
    }
  );
  return (
    <>
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
        Click to see lazy data
      </button>
      <button
        className="btn"
        onClick={() => {
          activatorFunction();
        }}
      >
        Click to activate
      </button>
      <button className="btn" onClick={() => refetch()}>
        Click to refetch
      </button>
    </>
  );
}
