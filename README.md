# React and Redux Together
- This is a code along project done with DigitalCrafts that shows how Redux and React tie together
- We will be building a counter app utilizing redux

## Conventions (what files to put your code in)

### Redux:

- `actions.js` - action constants and your action creator functions
- `reducers.js` (or a folder) - import your actions and define reducer functions
- `CounterApp.js` - define the store so that the React app can use itu

### React:

#### 'Dumb Components' (a.k.a. "John Snow components")

- They know nothing about redux
- They accept props
    - show the props
    - use props as event handlers
- `components/` - holds all your dumb components

#### 'Smart containers' (a.k.a. "The Iron Man Suit')

- `containers/` - holds all your smart containers
- they know all about redux!
    - have access to redux state
    - can call the store's `dispatch()`
- they don't know about React
    - they import your dumb components
- they wire together your dumb components and redux's `state` and `dispatch`
    - define `mapStateToProps` function
    - define `mapDispatchToProps` function