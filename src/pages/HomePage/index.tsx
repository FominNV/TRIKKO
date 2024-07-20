import { NextPage } from 'next';
import { Button } from 'primereact/button';

export const HomePage: NextPage = () => {
  return (
    <h1>Home
      <Button label='Click' />
    </h1>
  );
};

export default HomePage;
