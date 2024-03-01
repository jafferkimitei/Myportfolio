
import Image from 'next/image';
import styles from '../../styles/Slider.module.scss';

const colorGrade = () => {
  return (
    <div className={styles.gradeContainer}>
      <div className={styles.imageContainer}>
        <Image src="/images/bg-image2.jpg" alt="Before" className={styles.beforeImage} width={800} height={600} />
        <Image src="/images/bg-image3.webp" alt="After" className={styles.afterImage} width={800} height={600} />
      </div>
      <div className={styles.textOverlay}>
        Color Grading
      </div>
    </div>
  );
};

export default colorGrade;
