import React from 'react'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router'
import './Instructions.css'

const Instructions = ({ name, testCategory }) => {
	const history = useHistory()

	const handleSubmit = () => {
		history.push('/quiz')
	}

	return (
		<div className='instructions'>
			<span className='sub'>Hi,{name}</span>
			<br />
			<div className='wrapper'>
				<h2 className='instructions__header'>
					Instructions For the Quiz
				</h2>
				<ol>
					<li>This Quiz contains 10 multiple choice questions</li>
					<li>
						You have to select the correct option among the choices
						provided
					</li>
					<li>
						You will be scored 1 point for each of your correct
						response
					</li>
					<li>The Quiz has a time limit of 10 minutes</li>
					<li>
						Time starts when you press the Start Quiz button below
					</li>
				</ol>
			</div>
			<Button
				variant='contained'
				color='primary'
				size='large'
				onClick={handleSubmit}>
				Start Quiz
			</Button>
		</div>
	)
}

export default Instructions
