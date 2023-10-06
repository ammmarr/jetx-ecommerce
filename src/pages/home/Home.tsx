import { useState } from "react";
import productsData from "../../assets/productsData";
import DisplayProducts from "../../components/DisplayProducts/DisplayProducts";
import Navbar from "../../components/navbar/Navbar";
import transition from "../../utils/pageTranistion/transition";
import style from "./index.module.scss";
import HeroCard from "../../components/heroCard/HeroCard";

// interface FilterObject {
//   brand: string[];
//   itemGroup: string[];
// }
const Products = () => {
  // const [listOfProducts, setListOfProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  // const [filterObject, setFilterObject] = useState<FilterObject>({
  //   brand: [],
  //   itemGroup: [],
  // });
  // Handle filter change

  const handleFilterChange = () => {
    // const inputCategory = e.target.getAttribute("data-inputCategory");
    // const checked = e.target.checked;
    // const value = e.target.value;
    // if (checked && inputCategory == "brand") {
    //   const filteredArray = [...filterObject.brand].filter(
    //     (item) => item != value
    //   );
    //   setFilterObject({ ...filterObject, brand: [...filteredArray, value] });
    //   return;
    // }
    // if (!checked && inputCategory == "brand") {
    //   const filteredArray = [...filterObject.brand].filter(
    //     (item) => item != value
    //   );
    //   setFilterObject({ ...filterObject, brand: [...filteredArray] });
    //   return;
    // }
    // if (checked && inputCategory == "itemGroup") {
    //   const filteredArray = [...filterObject.itemGroup].filter(
    //     (item) => item != value
    //   );
    //   setFilterObject({
    //     ...filterObject,
    //     itemGroup: [...filteredArray, value],
    //   });
    //   return;
    // }
    // if (!checked && inputCategory == "itemGroup") {
    //   const filteredArray = [...filterObject.itemGroup].filter(
    //     (item) => item != value
    //   );
    //   setFilterObject({ ...filterObject, itemGroup: [...filteredArray] });
    //   return;
    // }
    // console.log(value);
  };
  const [data, setData] = useState(productsData);
  // const [error, setError] = useState("");
  console.log(setData);

  //   useEffect(() => {
  //     async function getDataFunction() {
  //       const url = "https://tazzweed.com/api/method/tazzweed.api.products";
  //       try {
  //         const { data } = await axios.get(url);
  //         setData(data.message);
  //         setFilteredProducts(data.message);
  //       } catch (err) {
  //         console.log(err);
  //         setError("No Resuts");
  //       }
  //     }
  //     getDataFunction();

  //     return () => {
  //       setError("");
  //     };
  //   }, []);
  //   console.log(filteredProducts);
  //   useEffect(() => {
  //     const filtered = [...listOfProducts].filter((item: any) => {
  //       if (filterObject.brand.length == 0 && filterObject.itemGroup.length == 0)
  //         return true;
  //       if (filterObject.brand.includes(item.brand)) return true;
  //       if (filterObject.itemGroup.includes(item.itemGroup)) return true;
  //     });
  //     setFilteredProducts(filtered);
  //   }, [filterObject]);
  return (
    <>
      <Navbar />
      <HeroCard />
      <div className={style.container}>
        <h1>
          Featured Products <span>!</span>
        </h1>
        <div className={style.filterAndDisplayContainer}>
          <DisplayProducts data={data} onFilterChange={handleFilterChange} />
        </div>
      </div>
    </>
  );
};

export default transition(Products);
