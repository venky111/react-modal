# React Modal App
This is a simple example application where we have created a modal library and used it to show 2 different components: Login and Sign Up in form of Modals.

## How To Use the Modal?

The Modal component can be imported as a module in the application with:
`import Modal from './Modal';`

### Example 1.
`<Modal buttonTitle='Login' onClose={onLogin}>`<br />
  `<LoginForm />`<br />
`</Modal>`<br />

### Example 2.
`<Modal buttonTitle='SignUp' closeOnEsc={false} onClose={onSignUp}>`<br />
  `<SignUpForm />`<br />
`</Modal>`<br />

## What props can it take?
The Modal component accepts several props

`show` accepts a **boolean** (true/false), default value is false, controls when to show the modal and when to hide it.<br />
`onClose` accepts a **function** (call back), default value is an empty call back function, controls how to close the modal and the next action after the modal is closed.<br />
`closeOnEsc` accepts a **boolean**, default value is set to true, closes the Modal component on pressing the escape key.<br />
`buttonTitle` accepts a **string**, default value is 'Submit', controls what text to show on the Modal triggering button.<br />

