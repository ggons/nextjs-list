import Link from 'next/link';
import styles from '../../styles/Ggons.module.css';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {
      list: data,
    },
  };
};

const Ggons = ({ list }) => {
  return (
    <div>
      <h1>All Items</h1>
      {list.map(item => (
        <Link key={item.id} href={'/ggons/' + item.id}>
          <a className={styles.single}>
            <h3>{item.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ggons;
