import Hamburger from "hamburger-react";
import style from "./index.module.scss";
import { useState } from "react";

interface FilterCardProps {
  products: any;
  onFilterChange: Function;
}
function FilterCard({ products, onFilterChange }: FilterCardProps) {
  // Use state to track the selected filters
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <div
      className={`${style.container}
      ${filterOpen ? style.open : style.closed}`}
    >
      <div className={style.filterAndArrowContainer}>
        <h3
          style={
            filterOpen
              ? { fontSize: "1rem" }
              : { fontSize: "10px", fontWeight: "500" }
          }
        >
          Filters
        </h3>
        <div className={style.iconContainer}>
          <Hamburger size={16} toggled={filterOpen} toggle={setFilterOpen} />
        </div>
      </div>
      <div
        className={style.checkboxCollection}
        style={filterOpen ? { maxHeight: "9999px" } : { maxHeight: "0px" }}
      >
        <h4>Brand</h4>
        <form onChange={(e) => onFilterChange(e)}>
          <label>
            Mugs
            <input
              type="checkbox"
              value="Adidas"
              name="Adidas"
              data-inputCategory="brand"
            />
          </label>
          <label>
            Bags
            <input
              type="checkbox"
              value="Nike"
              name="Nike"
              data-inputCategory="brand"
            />
          </label>{" "}
          <label>
            Glasses
            <input
              type="checkbox"
              value="Puma"
              name="Puma"
              data-inputCategory="brand"
            />
          </label>
        </form>
        <h4>Item Group</h4>
        <form onChange={(e) => onFilterChange(e)}>
          <label>
            group 1
            <input
              type="checkbox"
              value="Adidas"
              name="Adidas"
              data-inputCategory="itemGroup"
            />
          </label>
          <label>
            group 2
            <input
              type="checkbox"
              value="Nike"
              name="Nike"
              data-inputCategory="itemGroup"
            />
          </label>{" "}
          <label>
            group 3
            <input
              type="checkbox"
              value="Puma"
              name="Puma"
              data-inputCategory="itemGroup"
            />
          </label>
          <label>
            group 4
            <input
              type="checkbox"
              value="Puma"
              name="Puma"
              data-inputCategory="itemGroup"
            />
          </label>
        </form>
      </div>
    </div>
  );
}

export default FilterCard;
