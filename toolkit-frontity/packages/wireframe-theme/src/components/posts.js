import { COLORS } from "./workshop-tool/colors";

export var Posts = (data) => {
  // const data = state.source.get(state.router.link);

  // console.log(data);

  // let proxyPosts = data["posts"];

  // console.log(proxyPosts);

  // let parsedData = JSON.parse(JSON.stringify(data));

  // console.log(parsedData);

  // let posts = parsedData["post"];

  // console.log(posts);

  var postArray = [];

  Object.keys(data).map(function (key, index) {
    let post = {
      id: data[key].id,

      title: data[key].title.rendered,

      duration: data[key].duration,

      isInPlan: false,
    };

    console.log(post);

    postArray.push(post);
  });

  console.log(postArray);

  return postArray;
};
