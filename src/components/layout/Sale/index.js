import classNames from 'classnames/bind';
import styles from './Sale.module.scss';
import images from '../../../assets/images';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
let productsSale = [];
function Sale() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/api/v1/product')
            .then((res) => res.json())
            .then((product) => {
                setProducts(product);
            });
    }, []);
    if (products.length > 0) {
        productsSale = products.filter((p, index) => p.id >= 11 && p.id <= 15);
    }
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('text')}>
                    <h2 className={cx('title')}>Bird cages are on sale</h2>
                    <img src={images.hoa}></img>
                </div>
                <div className={cx('thumb-wrapper')}>
                    {productsSale.length > 0 &&
                        productsSale.map((p, index) => {
                            return (
                                <Link to={`/product/${p.id}`} className={cx('thumb')} key={index}>
                                    <div className={cx('thumb-img')}>
                                        <img src={p.product_image}></img>
                                    </div>
                                    <h4 className={cx('title')}>{p.name}</h4>
                                    <span className={cx('price')}>{p.price}$</span>
                                    <span className={cx('old-price')}>{Math.floor(Math.random() * 101) + 400}$</span>
                                </Link>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default Sale;
