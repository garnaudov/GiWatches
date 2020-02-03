const INITIAL_STATE = {
  sections: [
    {
      title: "chronograph",
      imageUrl: "https://i.ibb.co/k8kbf2b/wrist-watch-3019913-1920.jpgcle",
      id: 1,
      linkUrl: "shop/chronograph"
    },
    {
      title: "automatic",
      imageUrl: "https://i.ibb.co/vXMv26K/mechanics-463011-1920.jpg",
      id: 2,
      linkUrl: "shop/automatic"
    },
    {
      title: "smart",
      imageUrl: "https://i.ibb.co/XsBxRJb/business-2560961-1920.jpg",
      id: 3,
      linkUrl: "shop/smart"
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/Tg9YqFY/leather-jacket-1663286-1920.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/womens"
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/0yt83LZ/watch-2595184-1280.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/mens"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
