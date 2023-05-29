import Head from 'next/head';
import data from '../../data.json';
import { ProductCard } from '@/components/Card/Card';
import Carousel from 'react-material-ui-carousel';

export default function Home () {

    return (
        <div className="container">
            <Head>
                <title>Next.js</title>
            </Head>

            <main>
                <Carousel animation="slide" autoPlay={true} navButtonsAlwaysVisible={true} navButtonsProps={{ style: { backgroundColor: 'transparent', color: '#000', borderRadius: 0 } }}>
                        {data.map( ( item, index ) => (
                            <ProductCard key={index} data={item} />
                        ) )}
                </Carousel>
                   
               

            </main>
        </div>
    );
}