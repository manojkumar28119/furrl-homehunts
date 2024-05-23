import { useState, useEffect } from "react";
import ShareButton from "../ShareButton"
import { ColorRing } from 'react-loader-spinner';
import ProductItem from "../ProductItem";
import "./index.css";

const categories = [
    { id: 1, category: "all" },
    { id: 2, category: "home" },
    { id: '921a91f5-e45a-4700-ba65-79dd9d5ba99a', category: "apparel" },
    { id: 'cad99555-71f7-4804-8c38-4edf328441d6', category: "accessories" }
];

const ProductList = () => {
    const [currentCategoryId, setCategory] = useState(categories[0].id);
    const [currentData, setData] = useState([]);
    const [apiStatus, setApiStatus] = useState(false);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalProducts, setTotalProducts] = useState(0);

    const getProductsData = async () => {
        setLoading(true);
        const url = `https://api.furrl.in/api/v2/listing/getListingProducts`;
        const filter = currentCategoryId === 1 || currentCategoryId === 2 ? [] :[{"id":currentCategoryId,"type":"CATEGORY"}]
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                input: {
                    page: page,
                    pageSize: 10,
                    filters: filter,
                    id: "#HomeHunts",
                    entity: "vibe"
                }
            })
        };

        try {
            const response = await fetch(url, options);

            if (response.ok) {
                const pageData = await response.json();
                const { data } = pageData;
                const { getListingProducts } = data;
                const { products, totalProducts } = getListingProducts;
                setTotalProducts(totalProducts);
                setData(prevData =>  [...prevData, ...products]);
                setApiStatus(true);
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        getProductsData();
    }, [page,currentCategoryId]);



    useEffect(() => {
        const handleScroll = () => {
            if (((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) && (!loading) && (currentCategoryId === 1 || currentCategoryId === 2)) {
                setPage(prevPage => prevPage + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const renderProductCategories = () => (
        <div>
            {categories.map((each) => {
                const category = each.category;
                const onClickProductCategory = () => {
                    setCategory(each.id);
                    setPage(1);
                    setData([]);
                };
                return (
                    <button
                        type="button"
                        key={each.id}
                        className={`categoryBtn ${currentCategoryId === each.id ? 'activeBtn' : ''}`}
                        onClick={onClickProductCategory}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );

    const renderLoader = () => (
        <div className="loader">
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#7e59e7', '#7e59e7', '#7e59e7', '#7e59e7', '#7e59e7']}
            />
        </div>
    );

    const renderProduct = () => (
        <div className="products-list-card">
            {currentData.map((each, index) => (
                <ProductItem key={each.id} currentItemNo={index + 1} item={each} />
            ))}
        </div>
    );

    const renderTopSection = () => (
        <div className="vibe-page-top-bg-img">
            <div className="top-sec-content">
                <p className="top-text">#HomeHunts</p>
                <ShareButton title={"Furrl has a #Vibe for just about any occasion, trend or need! Check out this cool #Vibe, #HomeHunts on Furrl."}
                url={'https://web.furrl.in/vibeList?vibe=HomeHunts '}/>
            </div>
        </div>
    )

    return (
        <div>
            {renderTopSection()}
            <div className="shop-products-card">
                <p className="shop-products-heading">Shop Products</p>
                <div className="bullet-point"></div>
                <p className="no-of-products">{totalProducts}</p>
            </div>
            {!apiStatus ? renderLoader() :
                <>
                    {renderProductCategories()}
                    {renderProduct()}
                    {loading && renderLoader()}
                </>
            }
        </div>
    );
};

export default ProductList;
