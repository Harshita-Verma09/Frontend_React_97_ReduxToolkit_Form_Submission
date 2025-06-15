# Redux Name Input Application

This is a simple React application that demonstrates how to use **Redux Toolkit** to manage a user's name state. The application allows users to input their name, which is then stored in the Redux store and displayed on the screen.

---

##  Features

- **State Management with Redux Toolkit**  
  Efficiently manages the name state using `createSlice` for streamlined reducer and action creation.

- **React Integration**  
  Uses `react-redux` hooks (`useDispatch`, `useSelector`) to interact with the Redux store from functional components.

- **Responsive UI with Tailwind CSS**  
  Clean and responsive user interface using utility-first Tailwind classes.

---

##  Project Structure

.
├── src/
│ ├── app/
│ │ └── store.js # Redux store configuration
│ ├── features/
│ │ └── nameSlice.js # Redux slice for name state
│ ├── components/
│ │ └── NameForm.jsx # React component for name input and display
│ └── App.js # Main application component
├── package.json
└── README.md

yaml
Copy
Edit

---

##  Code Overview

### `src/features/nameSlice.js`

Defines the Redux slice for managing the `name` state.

```js
import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name: "user",
    initialState: {
        name: ""
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        }
    }
});

export const { setName } = nameSlice.actions;
export default nameSlice.reducer;
Note: createSlice simplifies creating reducers and actions. The setName action updates the name in state.

src/app/store.js
Configures the Redux store.

js
Copy
Edit
import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "../features/nameSlice";

const store = configureStore({
    reducer: {
        user: nameReducer,
    },
});

export default store;
configureStore simplifies the standard Redux store setup.

src/components/NameForm.jsx
The main React component for name input and display.

jsx
Copy
Edit
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '../features/nameSlice';

const NameForm = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const name = useSelector(state => state.user.name);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setName(input));
        setInput('');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Enter Your Name
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Your name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
                {name && (
                    <p className="mt-6 text-center text-green-600 font-medium">
                        Redux Store Name: <span className="font-bold">{name}</span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default NameForm;
```
# Installation and Running Locally
Follow these steps to run the project locally:

1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/redux-name-input-app.git
cd redux-name-input-app
2. Install Dependencies
bash
Copy
Edit
npm install
# or
yarn install
3. Start the Development Server
bash
Copy
Edit
npm start
# or
yarn start

# Dependencies
React

Redux Toolkit

React Redux

Tailwind CSS
