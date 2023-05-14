import Layout from "@/components/Layout";
import { FirebaseAuthProvider } from "@/utils/firebaseAuth";
function MyApp({ Component, pageProps }) {
    return (
      <FirebaseAuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FirebaseAuthProvider>
    );
  }
  
  export default MyApp;