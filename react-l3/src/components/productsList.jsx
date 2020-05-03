import React from "react";

function ProducsList(props) {
  const {products} = props;
  return (
    <div className="row justify-content-center m-2">
      <ul className="list-group">
        {products.map((product) => (
          <li key={product.id} className="list-group-item">
            <span className="m-2">
              <p>{product.name}</p>
              <img width="100" src={product.avatar} alt="" />
            </span>
            <span className="m-5">
              <button
                onClick={() => props.onDelete(product)}
                className="btn btn-danger btn-sm "
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProducsList;
