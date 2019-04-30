import React from "react"
import { render } from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import { createStore } from "redux"
import { Provider } from "react-redux"

// import reducer from "./reducers"
import createStore from "./store"

import Top from "./pages/top"
// import Counter from "./containers/counter"
import Counter from "./pages/counter"
import NotFound from "./pages/notfound"

const store = createStore()
// const store = createStore(reducer)

class App extends React.Component {
	render() {
		return <Provider store={ store }>
			<Router>
				<Switch>
					<Route exact path="/" component={Top} />
					<Route exact path="/counter" component={Counter} />
					<Route component={NotFound}/>
				</Switch>
			</Router>
		</Provider>
	}
}

render(<App />, document.getElementById("app"))
