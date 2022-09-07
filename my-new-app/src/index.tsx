import * as React from "react";
import * as ReactDOM from "react-dom";

function render() {
    if (typeof window !== 'undefined')
        ReactDOM.render(<h2>Hello from React!</h2>, document.body);
}

render();
