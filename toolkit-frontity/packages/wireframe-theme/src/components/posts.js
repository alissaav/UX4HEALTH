
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
    

    Object.keys(data).map(function(key, index){
        let post = {
            title: data[key].title.rendered,
            duration: data[key].duration,
            isInPlan: false
            // color: {
            //     switch(posts[key].category) {
            //         case 0: 
            //             COLORS.blue;
            //             break;
            //         case 1: 
            //             COLORS.green;
            //             break;
            //         case 2: 
            //             COLORS.pink;
            //             break;
            //         case 3:
            //             COLORS.red;
            //             break;
            //         case 4:
            //             COLORS.violet;
            //             break;
            //         case 5: 
            //             COLORS.yellow;
            //             break;
            //         case 6:
            //             COLORS.blue;
            //             break;
            //     }
            // }
        }
        console.log(post);
        postArray.push(post);
        
    });
    console.log(postArray);
    return postArray;
}
