import productsData from "../../assets/productsData";
import HeroProductCard from "../../components/HeroProductCard/HeroProductCard";
import ProductCard from "../../components/productCard/ProductCard";
import transition from "../../utils/pageTranistion/transition";
import style from "./index.module.scss";
const Home = () => {
  return (
    <>
      <div className={style.container}>
        <HeroProductCard />
        <div className={style.moreProducts}>
          <h3>
            Similar <span>Products</span>
          </h3>
          {productsData.map((item, i) => (
            <ProductCard data={item} key={i} />
          ))}
          {/* <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard /> */}
        </div>
      </div>
    </>
  );
};

export default transition(Home);
