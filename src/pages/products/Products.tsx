import productsData from "../../assets/productsData";
import DisplayProducts from "../../components/DisplayProducts/DisplayProducts";

import style from "./index.module.scss";
const Products = () => {
  const handleFilterChange = () => {};
  return (
    <div className="container">
      <div className={style.productsContainer}>
        <DisplayProducts
          data={productsData}
          onFilterChange={handleFilterChange}
        />
      </div>
    </div>
  );
};

export default Products;
