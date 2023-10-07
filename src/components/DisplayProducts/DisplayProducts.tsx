import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FilterCard from "../filterCard/FilterCard";
import ProductCard from "../productCard/ProductCard";
import ProductCardSquare from "../productCard/productCardSquare/ProductCardSquare";
import style from "./index.module.scss";

interface DisplayProductsProps {
  data: any;
  onFilterChange: Function;
}
const DisplayProducts: React.FC<DisplayProductsProps> = (props) => {
  const [gridView, setGridView] = useState(true);
  const { data, onFilterChange } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const displayFilters = location.pathname != "/" ? true : false;
  function handleClick() {
    !displayFilters && navigate("/products");
  }
  const width = window.innerWidth;
  let gridViewDisplay = true;
  useEffect(() => {
    if (width < 855) {
      gridViewDisplay = false;
      setGridView(false);
    }
  }, []);

  return (
    <div className={style.container}>
      <div className={style.optionContainer}>
        {displayFilters && (
          <FilterCard products={data} onFilterChange={onFilterChange} />
        )}
        <div className={style.searchContainer}>
          <input />
          <div className={style.button} onClick={handleClick}>
            Search
          </div>
        </div>
        {gridViewDisplay && (
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
        )}
      </div>

      {gridView
        ? data.map((item: any, i: number) => (
            <ProductCard data={item} key={i} />
          ))
        : data.map((item: any, i: number) => (
            <ProductCardSquare data={item} key={i} />
          ))}
      <div className={style.buttonContainer}>
        <div className="button">Load more products ...</div>
      </div>
    </div>
  );
};

export default DisplayProducts;
