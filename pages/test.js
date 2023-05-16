import { useEffect } from "react";


import { db } from "@/utils/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
export async function getServerSideProps() {
    try {
      const collectionRef = collection(db, 'chats');
      const q = query(collectionRef, orderBy('createdAt', 'desc'));
  
      const snapshot = await getDocs(q);
  
      const chats = snapshot.docs.map((doc) => ({
        id: doc.id,
        chatName: doc.data().chatName,
        admin: doc.data().admin,
        createdAt: doc.data().createdAt.toDate().toLocaleDateString('en-US'),
      }));
  
      return {
        props: {
          chats,
        },
      };
    } catch (error) {
      console.error('Error fetching Firestore data:', error);
      return {
        props: {
          chats: [],
        },
      };
    }
  }
  
  export default function test({ chats }) {
    useEffect(() => {
      console.log(chats); // Log the value in the browser console
    }, []);
  
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
  