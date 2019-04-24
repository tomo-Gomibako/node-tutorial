import React from "react"
import { render } from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Top from "./pages/top"
import Counter from "./pages/counter"
import NotFound from "./pages/notfound"

class App extends React.Component {
	render() {
		return <Router>
			<Switch>
				<Route exact path="/" component={Top} />
				<Route exact path="/counter" component={Counter} />
				<Route component={NotFound}/>
			</Switch>
		</Router>
	}
}

render(<App />, document.getElementById("app"))
