import Head from 'next/head';
import '../globals.css'
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Whatsapp Web Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;