import React from 'react';
import s from './new_posts.module.css';

const New_posts = (props) => {
    //debugger
    let New_Post_element = React.createRef ()

    let AddPost = () => {
       // debugger
        let text = New_Post_element.current.value;
        props.AddPost (text);
        props.updateNewPostText ('');
    }
    let On_Post_Change = () => {
        let text = New_Post_element.current.value
        props.updateNewPostText(text)

    }
    return (
        <div className= {s.new_posts}>
            <div>
              <textarea onChange={On_Post_Change} ref={New_Post_element} value={props.New_Post_Text}/>
            </div>
            <button onClick={AddPost}>нахуярить пост</button>
        </div>
    
        
    );
}
export default New_posts;