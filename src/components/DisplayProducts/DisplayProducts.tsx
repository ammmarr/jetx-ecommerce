import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
import { useState } from "react";
import ProductCard from "../productCard/ProductCard";
import style from "./index.module.scss";
import ProductCardSquare from "../productCard/productCardSquare/ProductCardSquare";
import FilterCard from "../filterCard/FilterCard";

interface DisplayProductsProps {
  data: any;
  onFilterChange: Function;
}
const DisplayProducts: React.FC<DisplayProductsProps> = (props) => {
  const [gridView, setGridView] = useState(true);
  const { data, onFilterChange } = props;
  // console.log(props, "mid");
  return (
    <div className={style.container}>
      <div className={style.optionContainer}>
        <FilterCard products={data} onFilterChange={onFilterChange} />
        <div className={style.searchContainer}>
          <input />
          <div className={style.button}>Search</div>
        </div>
        <div className={style.viewContainer}>
          <div
            className={style.iconBg}
            style={
              gridView
                ? { backgroundColor: "transparent", color: "var(--dark)" }
                : { backgroundColor: "var(--dark)" }
            }
            onClick={() => setGridView(false)}
          >
            <GridViewIcon />
          </div>
          <div
            className={style.iconBg}
            style={
              !gridView
                ? { backgroundColor: "transparent", color: "var(--dark)" }
                : { backgroundColor: "var(--dark)" }
            }
            onClick={() => setGridView(true)}
          >
            <ListIcon />
          </div>
        </div>
      </div>

      {gridView
        ? data.map((item: any, i: number) => (
            <ProductCard data={item} key={i} />
          ))
        : data.map((item: any, i: number) => (
            <ProductCardSquare data={item} key={i} />
          ))}
    </div>
  );
};

export default DisplayProducts;
