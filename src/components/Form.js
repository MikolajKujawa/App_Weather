import React from 'react';
import '../style/Form.css' 

const Form = (props) => {
    return ( 
        <form>
            <input 
                type="text" 
                value={props.value} 
                onChange={props.change} 
                placeholder="Twoje miasto"
            />
        </form>
     );
}
 
export default Form;