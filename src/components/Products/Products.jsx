import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
	{ id: 1, name: 'Shoes', description: 'Running Shoes.', price: '$5', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d7057e9f-0723-4cc4-8387-8e70c93c3379/air-zoom-alphafly-next-2-proto-road-racing-shoes-8c1M69.png' },
	{ id: 2, name: 'Macbook', description: 'Apple Macbook.', price: '$10', image: 'https://www.idigital.co.il/files/Kubiyot/mbprolate2020-lob.jpeg' },
];

const Products = () => {
	return (
		<main>
			<Grid container justifyContent='center' spacing={4}>
				{products.map((product) => (
					<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
						<Product product={product} />
					</Grid>
				))}
			</Grid>
		</main>
	);
};

export default Products;
