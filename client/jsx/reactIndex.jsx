//going to be webpacked, so we can use require - it NEEDS webpack (and babble??), I think?? because this is NOT javascript.
const React = require('react');
const {useState} = React; //grab useState out of react so we don't need to do React.useState over and over
const { createRoot } = require('react-dom/client');


// A Component - a component MUST start with a capital letter. 
const HelloWorld = (props) => {
    //this is a functional component because it's... a function.

    //the on change handler for input text
    const [username, setUsername] = useState(props.useState); 
        //to make it so we don't need to re-render things, we should use hooks, which is a react thing.
            //it's a react thing because functions don't have states, because they're functions
            //first thing is the actual data, in this case a username (get only, same issue as before), and the second is a setter function for that data.
            //this way react can keep track of things for us
    


    return(
        //React wants things that we return to be block even if rendering doesn't make them block scoped later. Wrap things in a div if they aren't!
                //this can be any valid html, including classes and such
                //we add variables to "props"
                //react will make the input uneditable because it wants to rerender with the actual data. to make it editable we need an "on change" handler
                    //SPECIFICALLY: the react handler needs camelCase, not all lower like other things
                
        <div> 
            Hello World!
            <label>Change Name: </label>
            <input type="text" value={username} onChange = {
                (e) => setUsername(e.target.value) //now using "username" and this function that calls setUsername with whatever was typed into the box because we're using the useState hook from above.
                                                    //this will update the username ALL throughout the page! in real time!!!! (including without user input!!!)
            } /> 
        </div>
    );
};

// since react... 16? it's wanted a root node that things are built off of. this is it.
const init = () => {
    const root = createRoot(document.getElementById('body'));
    root.render(<HelloWorld username="test name"/>); //use components like tags! in this case a self terminating one. Adding text to the inside of a tag isn't.. super helpful, so self terminating is good.
                                // you can pass things in as parameters like defining classes and such. they get added to the "props" object.
}
window.onload = init;

