export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "Anim laborum mollit nostrud irure dolore elit incididunt dolor cillum culpa enim aute id velit.",
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: "Anim laborum mollit nostrud irure dolore elit incididunt dolor cillum culpa enim aute id velit.",
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: "Anim laborum mollit nostrud irure dolore elit incididunt dolor cillum culpa enim aute id velit.",
      picture: null,
    },
  ],
});
