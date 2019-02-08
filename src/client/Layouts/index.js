import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import Nav from '../components/Nav';
// import Footer from '../components/Footer';

const Layouts = ({ children, title }) => (
  <Wrapper>
    <Head>
      <title>{title}</title>
    </Head>
    {/* <header>
      <nav>sdflkj</nav>
    </header> */}

    <main>
      {children}
    </main>

    {/* <footer>
      Footer
    </footer> */}
  </Wrapper>
);

Layouts.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Layouts.defaultProps = {
  title: 'OpenIDConnect/OAUTH2 server',
};

export default Layouts;

export const Wrapper = styled.footer`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  main {
    flex: 1;
  }
`;
