import Header from '@/components/Header';
import Left from '@/components/Left';
import Login from '@/components/Login';
import Right from '@/components/Right';
import FirebaseAuthContext from '@/utils/firebaseAuth';
import React, { useContext } from 'react'
function Home() {
    const { user,showChats } = useContext(FirebaseAuthContext);
    return (
      <>
        {user !== null ? (
          <>
          <main className="min-h-screen relative">
              {/* Header */}
              <div className="fixed top-0 left-0 z-40 w-full">
                <Header />
              </div>
              <div className="h-full min-h-screen flex">
                <div className={showChats ? "flex-[1_1_0%]" : "flex-[1_1_0%] hidden md:flex"}>
                  <Left />
                </div>
                <div className="flex-[3_3_0%]  overflow-y-auto">
                  <Right />
                </div>
              </div>
            </main>
          </>
        ) : (
          <>
            <Login />
          </>
        )}
      </>
    );
}

export default Home