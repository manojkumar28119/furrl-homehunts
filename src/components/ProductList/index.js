import { useState, useEffect } from "react";
import {ColorRing} from 'react-loader-spinner'
import ProductItem from "../ProductItem"
import "./index.css";

const categories = [
    { id: 1, category: "all" },
    { id: 2, category: "home" },
    { id: 3, category: "apparel" },
    { id: 4, category: "accessories" }
];

const ProductList = () => {
    const [currentCategory, setCategory] = useState(categories[0].category);
    const [currentData,setData] = useState([])
    const [apiStatus,setApiStatus] = useState(false)
 
    useEffect(() => {
        
        const getProductsData = async() => {
            const url = 'https://furrl-json.vercel.app/'
            const response = await fetch(url)

            if(response.ok)
            {
                const data = await response.json();
                setData(data)
                setApiStatus(true)
            }
             
            console.log(response)
        }
        
        getProductsData();
    }, []);

    const renderProductCategories = () => (
        <div>
            {categories.map((each) => {
                const category = each.category;
                const onClickProductCategory = () => {
                    setCategory(category);
                };
                return (
                    <button
                        type="button"
                        key={each.id}
                        className={`categoryBtn ${currentCategory === category && 'activeBtn'}`}
                        onClick={onClickProductCategory}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );

    const renderLoader = () => (<div className="loader">
        <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#7e59e7', '#7e59e7', '#7e59e7', '#7e59e7', '#7e59e7']}
        />
    </div>)

    const renderProduct = () => {

        let currentItemNo = 0;

        return (
            <div className="products-list-card">
                {currentData.map((each) => {
                    currentItemNo += 1;
                    return (<ProductItem key={each.id} currentItemNo = {currentItemNo} item = {each}/>)
                })}
            </div>
        )
    }

    console.log(currentCategory);

    return (
        <div>
            <div className="shop-products-card">
                <p className="shop-products-heading">Shop Products</p>
                <div className="bullet-point"></div>
                <p className="no-of-products">{currentData.length}</p>
            </div>
            { !apiStatus ? renderLoader() : 
                <>
                    {renderProductCategories()}
                    {renderProduct()}
                </>
            }
        </div>
    );
};

export default ProductList;
