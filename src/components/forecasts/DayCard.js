import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Container, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'

const DayCard = props => {
	
	// let dayInfo = props.

    // useEffect(() => {

    // })

    return (
        <Container>
            <Card>
        		<CardBody>
          		<CardTitle>"Day of the Week"</CardTitle>
				<CardImg top width="100%" src="/assets/318x180.svg" alt="climate picture" />
          		<CardSubtitle>Temperature</CardSubtitle>
				  {/* Temperature color for high/low - gradient scale of color? -50 (deep purple) to 125 (dark red) */}
				<CardText>(Optional text if API call give me anything cool)</CardText>
        		</CardBody>
      		</Card>
        </Container>
    )
}

export default DayCard