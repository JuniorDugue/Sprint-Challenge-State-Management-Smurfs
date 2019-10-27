1. What problem does the context API help solve?

Context API helps component share state by directly injecting props to the component from the created context


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are information that contain a type of action & data that we want associated with the action type.

Reducers specify how the application's state changes in response to actions sent to the store.

Store holds the complete state tree of your app.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

App state is the general state vs component state which is the local state inside of a component. It is good to use local state when you are sure that piece of state does not need to be used anywhere else in the application in the near future or ever.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets us intersect the cycle that is created in redux and use asychronous functions before rendering a component

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I guess redux since you can do more with middleware like holders e.g. "loading..." or "please wait"
