/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import ProductCard from "../../ProductCard/ProductCard";

const Products = () => {
    const {products} = useLoaderData();
    // console.log(products);


    return (
        <div className="bg-indigo-100 grid grid-cols-2 md:grid-cols-3 gap-2 py-5 px-8">
            {
                products.map(product => <ProductCard key={product.id} product={product}></ProductCard>) 
            }
        </div>
    );
};

export default Products;