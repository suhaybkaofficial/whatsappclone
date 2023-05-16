import { db, storage } from "@/utils/firebase";
import FirebaseAuthContext from "@/utils/firebaseAuth";
import { addDoc, arrayUnion, collection, serverTimestamp } from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import React, { useContext, useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import ReactLoading from "react-loading";
import { v4 } from "uuid";

function CreateChat() {
  const { isCreateChat, setIsCreateChat, user } =
    useContext(FirebaseAuthContext);
  const [chatName, setChatName] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatAvatar, setChatAvatar] = useState("");
  const closeChat = () => {
    setIsCreateChat(false);
  };
  const createChat = (e) => {
    e.preventDefault();
    setLoading(true);
    const chatAvatarRef = ref(storage, `chatAvatars/${chatAvatar.name + v4()}`);
    uploadBytes(chatAvatarRef, chatAvatar).then((snapshot) => {
      const uploadTask = uploadBytesResumable(chatAvatarRef, chatAvatar);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const userInfo = {
                displayName:user.displayName,
                email:user.email,
                photoURL:user.photoURL,
                userId:user.uid,
            }
            const data = {
              chatName: chatName,
              chatAvatar:downloadURL,
              user:userInfo,
              createdAt: serverTimestamp(),
            };
            const colRef = collection(db, "chats");
            addDoc(colRef, data)
              .then((docRef) => {
                setIsCreateChat(false);
                setChatName("");
                setLoading(false);
              })
              .catch((error) => {
                console.log(error);
              });
          });
        }
      );
    });
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white p-8 rounded-lg  ">
        {/* Modal content */}
        <h2 className="text-lg font-semibold text-thirdColor">
          Create Chat Group
        </h2>
        <form className="py-4" onSubmit={createChat}>
          <div>
            <label
              htmlFor="chatAvatar"
              className="text-thirdColor flex items-center justify-center my-4 space-x-2 cursor-pointer"
            >
              <BsCloudUpload size={20} />
              {!chatAvatar ? (
                <>
                  <h1 className="text-thirdColor">Upload Chat Avatar</h1>
                </>
              ) : (
                <>
                {/* chatAvatar.name.length > 15 && chatAvatar.name.substring(0, 15) + "..."+chatAvatar.type.substring(5) */}
                  <h1 className="text-thirdColor">Uploaded</h1>
                </>
              )}
            </label>
            <input
              type="file"
              id="chatAvatar"
              className="hidden border-b-2 text-sm rounded-lg text-gray-800 focus:ring-gray-500 outline-0 focus:border-gray-200 w-full p-2.5 "
              placeholder="Chat Name"
              required
              onChange={(e) => setChatAvatar(e.target.files[0])}
              accept="image/*"
            />
          </div>

          <div>
            <input
              type="text"
              id="chatName"
              className="border-b-2 text-sm rounded-lg text-gray-800 focus:ring-gray-500 outline-0 focus:border-gray-200 block w-full p-2.5 "
              placeholder="Chat Name (Not more than 12 characters)"
              maxLength={12}
              required
              value={chatName}
              onChange={(e) => setChatName(e.target.value)}
            />
          </div>
        </form>
        {/* Modal actions */}
        {loading ? (
          <>
            <div className="mt-4 flex justify-center  items-center space-x-40">
              <ReactLoading type="bubbles" color="#00a884" />
              <h1 className="text-thirdColor">Loading....</h1>
            </div>
            {/* <ReactLoading
                type="bubbles"
                color="#00a884"
                height={"50px"}
                width={"400px"}
              /> */}
          </>
        ) : (
          <>
            <div className="mt-4 flex justify-end space-x-40">
              <button
                className="px-4 py-2 bg-thirdColor text-white rounded-md"
                disabled={chatName.length < 1 || !chatAvatar}
                onClick={createChat}
              >
                Create Chat
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md"
                onClick={closeChat}
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CreateChat;
