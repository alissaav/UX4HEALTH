
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
            id: data[key].id,
            title: data[key].title.rendered,
            duration: data[key].duration,
            isInPlan: false,
            color: getColor(data[key].categories[0])
        }
        
        console.log(post);
        postArray.push(post);
        
    });
    console.log(postArray);
    return postArray;
}

function getColor(cat) {
    switch(cat) {
        case 3: 
            return COLORS.blue;
        case 5: 
            return COLORS.pink;
        case 6:
            return COLORS.red;
        case 7:
            return COLORS.violet;
        case 8: 
            return COLORS.yellow;
        default:
            return COLORS.green;
    }
}
