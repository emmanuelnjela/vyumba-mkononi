1. what is display ruby and its uses
2. change from css to scss
3. use uuid instead of id
4. why you cant use ( console.log(state) ) right after update
4. how to get the url params with use params
5. why justify content doent work as intended in overflow element
6. Is tranform have larger browser compability than translate

LEARNED DURING PROJECT

1.) react doent render the dom every time you give a same value
    Example: [counter, setCounter] = useState(0) // calling setCounter(1) will trigger dom update
        but [user, setUser] = useState({name: 'emmanuel'}) // calling setUser({name: 'alex'}) // will not trigger 
        dom update because the object in js are passed by reference but not by value so changing the inner 
        component doesnt change its reference
            Solution
        the solution here is to use an spread operator which will change the reference of an object

2.) Passing the intial state to a component as a prop is an anti-pattern because the getInitialState (in our
    case the constuctor) method is only called the first time the component renders. Never more. Meaning that, if   you re-render that component passing a different value as a prop, the component will not react          accordingly, because the component will keep the state from the first time it was rendered. It's very error prone