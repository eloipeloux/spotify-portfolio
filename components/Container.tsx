import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

import styles from '../styles/Home.module.css'

// Props type are always declared in the component itself, it's the only exception
type ContainerProps = {
    title: string;
    children?: React.ReactNode;
};

const Container: React.FC<ContainerProps> = (props) => (
    <div className={styles.container + ' font-satoshi'}>
        <Head>
            <title>{props.title}</title>
            <meta name="description" content="Musical portfolio for Eloi PELOUX" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className={styles.main}>
            {props.children}
        </main>
        <Footer />
    </div>
)

export default Container