1. What is the difference between Component and PureComponent? give an example where it might break my app.

- React.Purecomponent the children only will rerender if they props pass through then, changes.
- React.Component the children will aways rerender with if parente rerender
- React.Component this method doesn't implement shouldComponentUpdate but PureComponent do

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

3. Describe 3 ways to pass information from a component to its PARENT.

- as a props to the child component, using any global management state

4. Give 2 ways to prevent components from re-rendering.

- dont do loop functions, use useEffect in some cases
- dont use context with shouldComponentUpdate

5. What is a fragment and why do we need it? Give an example where it might break my app.

- fragment is a "div" without properties, its a empty div.
  a case that could be break the app, is when you have 2 separated divs without any parent div, like:

  <div>
   <p>text</p>
  </div>
  <div>
   <p>text2</p>
  </div>

  im this case you will need to use fragment, like:
  <>
    <div>
    <p>text</p>
    </div>
    <div>
    <p>text2</p>
    </div>
  </>

6.  Give 3 examples of the HOC pattern.

7.  what's the difference in handling exceptions in promises, callbacks and async...await.

    - promise use catch to handle error
      then(() => {
      console.log('janedoe')
      }).catch(error => alert(error.message))

    - in a simples callback, you will need to use a setTimeout like:
      function printString(){
      console.log("Tom");
      setTimeout(function() { console.log("Jacob"); }, 300);
      console.log("Mark")
      }

    - async...await use try...catch different than promise, who use then...catch
      to deal with errors, async...await
      try {
      let message = await hello();
      console.log(message);
      } catch((error) => {
      console.log("Error:" + error.message);
      })

8.  How many arguments does setState take and why is it async.
    setState has 2 arguments, updater and callback, because the state can be wait another argument to change like,

    const { authors } = this.state;

    this.setState({
    authors : authors.filter((author, actualPos) => actualPos !== index)
    }); use index is non op, but it's just for clarify

9.  List the steps needed to migrate a Class to Function Component.
    remove classComponent and transform to a const or a functionComponent

    - class App extends Component {} to function App() {}

    - transform class state to hook

    * class App extends Component {
      state = {
      name: '',
      }
      }

    to

    function App(){
    const [name, setName] = useState('');
    }

    - transform lifecicle, if you have, into a hook

    * class App extends Component {
      state = {
      name: '',
      }

          componentDidMount() {
              this.setState({name: 'janedoe' })
          }

      }

      to

    * function App(){
      const [name, setName] = useState('');

          useEffect(() => {
              setName('janedoe')
          }, [])

      }

10. List a few ways styles can be used with components.
    scss, inline-css, css in js, external css style

11. How to render an HTML string coming from the server.

    - if you have an array of objects, you can deal like that:

    {options.map((option) => (
    <div>{option.name}</div>
    ))}

    - if you just receive a string, you can deal with that:
    <div>{option.name}</div>
