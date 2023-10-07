import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import productsData from "../../assets/productsData";
import HeroCardOld from "../../components/heroCard/HeroCardOld";
import ImagesAndText from "../../components/imagesAndText/ImagesAndText";
import Navbar from "../../components/navbar/Navbar";
import transition from "../../utils/pageTranistion/transition";
import style from "./index.module.scss";

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
  const location = useLocation();
  const navigate = useNavigate();
  const displayFilters = location.pathname != "/" ? true : false;
  function handleClick() {
    !displayFilters && navigate("/products");
  }
  return (
    <>
      <Navbar />
      <HeroCardOld />
      <div className={style.container}>
        <h1>
          Featured Products <span>!</span>
        </h1>
        <div className={style.filterAndDisplayContainer}>
          <div className={style.searchContainer}>
            <input />
            <div className={style.button} onClick={handleClick}>
              Search
            </div>
          </div>
          <ImagesAndText />
        </div>
      </div>
    </>
  );
};

export default transition(Products);
