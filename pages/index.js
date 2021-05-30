import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ggons List | Home</title>
        <meta name="keywords" content="ggons" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화
          삼천리 화려 강산 대한사람 대한으로 길이 보전하세 남산 위에 저 소나무
          철갑을 두른듯 바람서리 불변함은 우리 기상일세 무궁화 삼천리 화려 강산
          대한사람 대한으로 길이 보전하세 가을 하늘 공활한데 높고 구름 없이 밝은
          달은 우리 가슴 일편단심일세 무궁화 삼천리 화려 강산 대한사람 대한으로
          길이 보전하세 이 기상과 이 마음으로 충성을 다하여 괴로우나 즐거우나
          나라사랑하세 무궁화 삼천리 화려 강산 대한사람 대한으로 길이 보전하세
        </p>
        <Link href="/ggons">
          <a className={styles.btn}>See Gggons Listing</a>
        </Link>
      </div>
    </>
  );
}
