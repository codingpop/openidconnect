import React from 'react';
import Link from 'next/link';

import Layouts from '../Layouts';

const App = () => (
  <Layouts>
    <h1>
      Page Home
    </h1>

    <Link href="/login">Login</Link>
  </Layouts>
);

// IndexPage.getInitialProps = async ({ req }) => {
//   const res = await getPosts()
//   const json = await res.json()
//   return { posts: json }
// }

export default App;
