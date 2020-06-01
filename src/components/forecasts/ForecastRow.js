import React from 'react'
import { connect } from 'react-redux'

const ForecastRow = (props) => {

	let fiveDayForecast = props.fiveDayForecast

	let days = []

  	return (
    	<div>Hello</div>
  	)
}

function mapStateToProps(state){
	return {
		fiveDayForecast: state.forecasts.fiveDayForecast
	}
}

export default connect(mapStateToProps)(ForecastRow)