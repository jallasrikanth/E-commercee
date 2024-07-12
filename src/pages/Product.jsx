import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../components/Breadcrums/Breadcrum';
import { ProductDIsplay } from '../components/ProductDisplay/ProductDIsplay';
import { DescriptionBox } from '../components/DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../components/RelatedProducts/RelatedProducts';

export const Product = () => {
  const{all_product}=useContext(ShopContext);
  const{productId}=useParams();
  const product=all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDIsplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>

    </div>
  )
}
