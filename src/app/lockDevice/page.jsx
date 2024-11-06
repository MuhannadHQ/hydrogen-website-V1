import Image from 'next/image';
import styles from '../styles/PreOrder.module.css';

export default function PreOrder() {
  return (
    <div className={styles.container}>
      <h1>Pre-Order Our New Product</h1>
      <p>Be the first to experience our latest innovation! Pre-order now to secure your device at launch.</p>

      <div className={styles.imageContainer}>
        {/* Replace src with your product image URLs */}
        <Image
          src="/images/product-image1.jpg"
          alt="Product Image 1"
          width={300}
          height={300}
          className={styles.productImage}
        />
        <Image
          src="/images/product-image2.jpg"
          alt="Product Image 2"
          width={300}
          height={300}
          className={styles.productImage}
        />
      </div>

      <button className={styles.preOrderButton}>Pre-Order Now</button>
    </div>
  );
}