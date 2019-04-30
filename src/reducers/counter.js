import { COUNTER_ADD, COUNTER_SUB } from "../constants"

const initialState = {
	count: 0
}

export default (state = initialState, action) => {
	switch (action.type) {
		case COUNTER_ADD:
			return {
				...state,
				count: state.count + 1
			}
		case COUNTER_SUB:
			return {
				...state,
				count: state.count - 1
			}
		default:
			return state
	}
}
