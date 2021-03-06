import React from 'react';
import '../style/Form.sass' 

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