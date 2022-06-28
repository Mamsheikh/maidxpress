import type { NextPage } from 'next';
import { products } from '../data/data';
import Layout from '../components/Layout';
import ProductItem from '../components/Products/ProductItem';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {products.map((product) => (
          <ProductItem key={product.slug} product={product} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
