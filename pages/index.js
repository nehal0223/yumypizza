import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in our City</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <PizzaList/>
    </div>
  );
}

// http://localhost:3000/orders/21
// http://localhost:3000/product/213
// http://localhost:3000/cart
//
//npm install -g next
//next build
//


//yarn dev