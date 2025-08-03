import Image from 'next/image';
import AnimateOnScroll from '@/app/components/AnimateOnScroll';
import styles from './Home.module.css'; // 作成したCSS Modulesをインポート

export default function Home() {
  return (
    <main>
      {/* --- セクション1: ヒーロー (最初の画面) --- */}
      <section
        className={styles.heroSection}
        style={{ backgroundImage: `url(/images/hero.jpg)` }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <AnimateOnScroll>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleSub}>iPhone 16</span>
              <span className={styles.heroTitleGradient}>
                Apple Intelligenceのために設計。
              </span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <p className={styles.heroSubtitle}>Pro. Beyond.</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* --- セクション2: 特徴紹介と画像 --- */}
      <section className={`${styles.section} ${styles.featureSection}`}>
        <div className={styles.featureText}>
          <AnimateOnScroll>
            <h2 className={styles.sectionTitle}>A new era for iPhone.</h2>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <p className={styles.sectionParagraph}>
              The titanium design, the A18 Pro chip...
            </p>
          </AnimateOnScroll>
        </div>
        <div className={styles.featureImageWrapper}>
          <AnimateOnScroll>
            <Image
              src="/images/feature.jpg"
              alt="iPhone Feature Image"
              width={800}
              height={800}
              className={styles.featureImage}
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* --- セクション3: カメラ紹介 --- */}
      <section className={`${styles.section} ${styles.cameraSection}`}>
        <div className={styles.cameraContent}>
          <AnimateOnScroll>
            <h2 className={styles.cameraTitle}>Gigablast your gigabits.</h2>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Image
              src="/images/camera.jpg"
              alt="iPhone Camera Image"
              width={1200}
              height={675}
              className={styles.cameraImage}
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* --- セクション4: 最後のテキストセクション --- */}
      <section className={`${styles.section} ${styles.endSection}`}>
        <div className="text-center max-w-3xl">
          <AnimateOnScroll>
            <h2 className={styles.endTitle}>The End.</h2>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
