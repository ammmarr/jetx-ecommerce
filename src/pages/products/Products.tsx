import productsData from "../../assets/productsData";
import DisplayProducts from "../../components/DisplayProducts/DisplayProducts";
import Navbar from "../../components/navbar/Navbar";

import style from "./index.module.scss";
const Products = () => {
  const handleFilterChange = () => {};
  return (
    <div className="container">
      <Navbar />
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
