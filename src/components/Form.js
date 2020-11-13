import React from 'react'; 

const Form = (props) => {
    return ( 
        <form>
            <input type="text" value={props.value} onChange={props.change} placeholder="Your City"/>
            <button>Szukaj</button>
        </form>
     );
}
 
export default Form;