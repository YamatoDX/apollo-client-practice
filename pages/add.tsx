import React from "react";
import { useMutation, gql, useQuery } from "@apollo/client";

export default function Add() {
  const addProductMutation = gql`
    mutation something {
      addProduct(
        _id: "D60"
        name: "Sample React Product"
        organisationId: "Mercury"
      ) {
        _id
      }
    }
  `;
  const allProductsQuery = gql`
    query something {
      queryProduct {
        _id
        name
        organisation {
          _id
          name
        }
      }
    }
  `;
  const [addProductFunction] = useMutation(addProductMutation);
  const {
    data,
    loading,
    error,
    refetch: refetchAllProducts,
  } = useQuery(allProductsQuery);
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          addProductFunction();
          refetchAllProducts();
        }}
      >
        Click to add Product
      </button>
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
        Click to see all data
      </button>
    </>
  );
}
