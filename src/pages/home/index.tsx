import ArtWall from './ArtWall';
import HomeContextProvider from './Context';
import Layout from './Layout';

const Home = () => {
  return (
    <HomeContextProvider>
      <Layout>
        <ArtWall />
      </Layout>
    </HomeContextProvider>
  );
};

export default Home;
