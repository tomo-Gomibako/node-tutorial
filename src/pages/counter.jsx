import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import * as counterActions from "../actions"

class Counter extends React.Component {
	render() {
		return <div>
			<div>{ this.props.count }</div>
			<input type="button" value="up" onClick={
				e => {
					this.props.counterActions.countup()
				}
			} />
		</div>
	}
}

export default connect(
	state => ({
		count: state.counter.count
	}),
	dispatch => ({
		counterActions: bindActionCreators(counterActions, dispatch)
	})
)(Counter)
