import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import Rating from "./Rating";


const customStyles = {
  rows: {
    style: {
      minHeight: "72px",
    },
  },
  headCells: {
    style: {
      backgroundColor: "#007bff",
      color: "#fff",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
    },
  },
};

function ProductTable({ products, selectedCategories }) {
  const [filterText, setFilterText] = useState("");

  // Filtre les produits basés sur le texte de recherche
  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        (selectedCategories.length === 0 ||
          (product.category &&
            selectedCategories.includes(product.category))) &&
        product.title &&
        product.title.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [products, filterText, selectedCategories]);

  const subHeaderComponent = useMemo(() => {
    return (
      <input
        type="text"
        placeholder="Search..."
        className="form-control col-4"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
    );
  }, [filterText]);

  const CustomImage = styled.img`
    width: 60px;
    height: auto;
  `;

  const columns = [
    {
      name: "Image",
      selector: (row) => <CustomImage src={row.image} alt={row.title} />,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Title",
      selector: (row) => <div title={row.title}>{row.title}</div>,
      sortable: true,
      wrap: true,
      allowOverflow: true,
    },
    {
      name: "Description",
      selector: (row) => (
        <div title={row.description}>
          {row.description.length > 100
            ? `${row.description.slice(0, 100)}...`
            : row.description}
        </div>
      ),
      sortable: true,
      wrap: true,
      allowOverflow: true,
      grow: 2,
    },
    {
      name: "Price",
      selector: (row) => `$${row.price}`,
      sortable: true,
    },
    {
      name: "Rating",
      // selector: (row) => <Rating rate={row.rating.rate} count={row.rating.count} /> ,
      selector: (row) => row.rating,
      sortable: true,
      format: (row) => `${row.rating.rate} ⭐ (${row.rating.count} votes)`,
    },
  ];

  return (
    <div>
      <div className="table-responsive">
        <DataTable
          columns={columns}
          data={filteredProducts}
          pagination
          customStyles={customStyles}
          paginationRowsPerPageOptions={[5, 10]}
          className="table table-striped table-bordered"
          subHeader
          subHeaderComponent={subHeaderComponent}
        />
      </div>
    </div>
  );
}

export default ProductTable;
