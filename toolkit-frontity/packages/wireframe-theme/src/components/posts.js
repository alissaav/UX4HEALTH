
import { COLORS } from "./workshop-tool/colors";

export const Posts = ({ state }) => {
    const data = state.source.get(state.router.link);

    let posts = [];

    data.items.forEach(item => {
        let post = new Object;
        post.title = item.title.rendered;
        post.duration = item.duration;
        switch(item.category) {
            case 0: 
                COLORS.blue;
                break;
            case 1: 
                COLORS.green;
                break;
            case 2: 
                COLORS.pink;
                break;
            case 3:
                COLORS.red;
                break;
            case 4:
                COLORS.violet;
                break;
            case 5: 
                COLORS.yellow;
                break;
            case 6:
                COLORS.blue;
                break;
        }
        post.isInPlan = false;
        console.log(post.toString);
        posts.append(post);
        
    });
    console.log(posts.toString);
    return posts;
}
