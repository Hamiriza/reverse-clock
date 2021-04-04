import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../layout/PageLayout';
import ReverseClock from '../../components/ReverseClock';

const Home = ({ location: { pathname } }) => {
  if (pathname !== '/') {
    return null;
  }
  return (
    <PageLayout title="Home">
      <h3>Reverse clock component shown below:</h3>
      <ReverseClock />
    </PageLayout>
  );
};

Home.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Home;
