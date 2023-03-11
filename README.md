# react-test-example - starter code for Github classroom

# Steps:
1. npm install
2. add mongodb atlas connection string
3. write App.test.js
the most simple example
```
    import { render, screen } from '@testing-library/react';
    import App from './App';
    import '@testing-library/jest-dom';
    
    test('renders GetToDoItem component', () => {
	render(<App />);
	const linkElement = screen.getByText('My To Do Items');
	expect(linkElement).toBeInTheDocument();
    });
 ```
4. run npm test
5. commit and push
Bonus - use fireEvent, waitFor 

On GitHub
1. Create new workflow to run the test on PR to main
2. Create a new branch for the change (new yml file) and make a PR to confirm the test runs on PR
