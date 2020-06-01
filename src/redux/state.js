let rerenderEntireTree = () => {
  console.log("state");
};
export let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi#1", likesCount: 12 },
      { id: 2, message: "Hi#2", likesCount: 1122 },
    ],
    newPostText: "it",
  },
  messagesPage: {
    dialogs: [
      { id: 1, name: "Dima" },
      { id: 2, name: "Nastya" },
    ],
    messages: [
      { id: 1, message: "hi - message #1" },
      { id: 2, message: "hi - message #2" },
    ],
  },
  sideBar: {
    people: [
      { id: 1, name: "Nastya" },
      { id: 2, name: "Jenya" },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPosts = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPosts);
  rerenderEntireTree(state);
};
