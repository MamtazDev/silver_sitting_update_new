import React, { useEffect, useRef, useState } from "react";
import quote from "../../../public/assets/images/child-care-message.png";
import styles from "@/styles/ChildCareMessage.module.css";
import chatProfile from "../../../public/assets/chat-profile.png";
import { useRouter } from "next/router";
import {
  useAddConversationMutation,
  useAddMessageMutation,
  useGetConversationTwoUsersQuery,
  useGetMessageByConversationQuery,
} from "@/features/chat/chatApi";
import { useDispatch, useSelector } from "react-redux";
import { setConversationId } from "@/features/chat/chatSlice";
import { useGetSingleUserQuery } from "@/features/register/registerApi";
import { formatMessageTime } from "@/utils/utils";
import { io } from "socket.io-client";
import { useTranslation } from "react-i18next";
import translations from "@/utils/translation";

const Chatting = () => {
  const { user } = useSelector((state) => state.register);
  const { conversationId } = useSelector((state) => state.chat);

  const { i18n } = useTranslation();

  const t =
    i18n.language === "en"
      ? function (str) {
          return translations.en[str];
        }
      : function (str) {
          return translations.de[str];
        };

  const dispatch = useDispatch();

  // const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [curentAllmessages, setCurentAllMessages] = useState([]);
  const socket = useRef();

  // console.log(arrivalMessage, "arrrviaaal");

  const chatContainerRef = useRef(null);

  const router = useRouter();
  const { id } = router.query;

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  useEffect(() => {
    socket.current  =io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      console.log("data", data)
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, [arrivalMessage]);


  useEffect(() => {
    arrivalMessage &&
      id.includes(arrivalMessage.sender) &&
      setCurentAllMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, id]);



  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      console.log(users)
    });
  }, [user]);

  // const getAutoAnswer = (question) => {
  //   if (question.toLowerCase().includes("hello")) {
  //     return "Hello! How can I assist you?";
  //   } else if (question.toLowerCase().includes("how are you?")) {
  //     return "I'm just a bot, but thanks for asking!";
  //   } else {
  //     return "I appreciate your question!";
  //   }
  // };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const chatContainer = chatContainerRef.current;
      const lastChatMessage = chatContainer.lastElementChild;
      if (lastChatMessage) {
        lastChatMessage.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // apisss

  const { data, isLoading, isError, isSuccess } =
    useGetConversationTwoUsersQuery({
      firstUserId: user?._id,
      secondUserId: id,
    });

  const [addConversation, { error }] = useAddConversationMutation();

  const { data: message } = useGetMessageByConversationQuery(conversationId);

  // console.log(message, "msgggg");u

  const [addMessage, { isLoading: messageLoading }] = useAddMessageMutation();

  const { data: senderInfo } = useGetSingleUserQuery(id);

  // apisss

  const createConversation = () => {
    const data = {
      senderId: user?._id,
      reciverId: id,
    };

    addConversation(data).then((res) => {
      if (res.data) {
        dispatch(setConversationId(res.data?._id));
      }
    });
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const data = {
        conversationId,
        sender: user?._id,
        text: inputMessage,
      };

      const receiverId = id;

      socket.current.emit("sendMessage", {
        senderId: user._id,
        receiverId: id,
        text: inputMessage,
      });

      addMessage(data).then((res) => {
        if (res.data) {
          setInputMessage("");
        }
      });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    socket.current = io("https://chat-8xfi.onrender.com/");
    // socket.current = io("https://chat-8xfi.onrender.com/");

    // http://16.171.47.109:8900/
    socket.current.on("getMessage", (data) => {
      console.log("data", data);
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, [arrivalMessage]);

  useEffect(() => {
    arrivalMessage &&
      id.includes(arrivalMessage.sender) &&
      setCurentAllMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, id]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      // console.log(users);
    });
  }, [user]);

  useEffect(() => {
    setCurentAllMessages(message);
  }, [message]);

  useEffect(() => {
    if (isSuccess && !data) {
      createConversation();
    } else if (isSuccess && data) {
      dispatch(setConversationId(data?._id));
    }
  }, [isSuccess]);

  



  useEffect(() => {
    scrollToBottom();
  }, [curentAllmessages]);

  return (
    <section
      className={`container mx-auto ${styles.chilCareMessageMainContainer}`}
    >
      <div className={styles.imageContainer}>
        <img src={quote.src} alt="" />
      </div>
      <div className={styles.mainContainer}>
        <div>
          <div ref={chatContainerRef} className={styles.conversation}>
            {curentAllmessages?.map((msg, index) => (
              <div key={index}>
                {msg.sender !== user?._id && (
                  <div
                    style={{ marginBottom: "30px" }}
                    className="d-flex gap-1 align-items-center "
                  >
                    <img
                      src={senderInfo?.image}
                      alt=""
                      width={75}
                      height={75}
                      className="rounded-circle"
                    />
                    <div className="d-flex w-100">
                      <div className={styles.answer_box}>
                        <div></div>
                      </div>
                      <div className={styles.answer}>
                        <h6>{msg.text}</h6>
                        <p>{formatMessageTime(msg.createdAt)}</p>
                      </div>
                    </div>
                  </div>
                )}

                {msg.sender === user?._id && (
                  <div
                    style={{ marginBottom: "30px" }}
                    className="d-flex gap-1 align-items-center"
                  >
                    <div className="d-flex w-100">
                      <div className={styles.question}>
                        <h6>{msg.text}</h6>
                        <p>{formatMessageTime(msg.createdAt)}</p>
                      </div>
                      <div className={styles.question_box}>
                        <div></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <textarea
            value={inputMessage}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className={styles.textareaInput}
            // style={{ backgroundColor: "#FFFFF" }}
            placeholder={`Type a message to ${senderInfo?.firstName}...`}
          />
          <div className={styles.buttonContainer}>
            <button
              onClick={handleSendMessage}
              className="_button"
              disabled={messageLoading}
            >
              {t("sendMsg")}
            </button>
          </div>
        </div>
      </div>
      <div className={styles.emptyContainer}></div>
    </section>
  );
};

export default Chatting;
