import React from "react";
import { useQuery, gql, useMutation } from "@apollo/client";

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
  const addProductMutation = gql`
    mutation Something(
      $_id: String!
      $name: String!
      $organisationId: String!
    ) {
      addProduct(_id: $_id, name: $name, organisationId: $organisationId) {
        _id
        name
      }
    }
  `;
  const { data, error, loading, refetch } = useQuery(getProductByIdQuery, {
    variables: {
      id: "D01",
    },
  });
  const [
    addProductFunction,
    { data: mutationData, loading: mutationLoading, error: mutationError },
  ] = useMutation(addProductMutation);

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
      <button
        className="btn"
        onClick={async () => {
          try {
            const mutationResponse = await addProductFunction({
              variables: {
                _id: "D100",
                name: "Sample product",
                organisationId: "Venus",
              },
            });
            console.log("mutationResponse is", mutationResponse);
            const refetchResponse = await refetch();
            console.log("refetchResponse is", refetchResponse);
          } catch (err) {
            console.error(err);
          } finally {
            console.log("process finished in finally block");
          }
        }}
      >
        Click to add new Product
      </button>
    </>
  );
}
