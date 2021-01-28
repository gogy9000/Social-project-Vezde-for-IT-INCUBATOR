import React from 'react';
import s from './description.module.css' ;

const Description = (props) => {
    return (
        < div className={s.Description}>
           <p>
               <img src ='data:image/jpeg;base64,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'/>
           
          <div className={s.props}>
             {props.name} 
             {props.age}
             {props.male}
          </div>
          </p>
        </div>   
    );
}
export default Description;