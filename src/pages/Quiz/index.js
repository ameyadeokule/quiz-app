import { CircularProgress } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Question from '../../components/Question'
import CountDownTimer from '../../components/CountdownTimer'
import './Quiz.css'

const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
	const [options, setOptions] = useState()
	const [currQues, setCurrQues] = useState(0)
	const [timeLeft, setTimeLeft] = useState(true)

	const hoursMinSecs = { hours: 0, minutes: 10, seconds: 0 }
	const history = useHistory()

	!timeLeft && history.push('./result')

	useEffect(() => {
		setOptions(
			questions &&
				handleShuffle([
					questions[currQues]?.correct_answer,
					...questions[currQues]?.incorrect_answers,
				]),
		)
	}, [currQues, questions])

	const handleShuffle = (options) => {
		return options.sort(() => Math.random() - 0.5)
	}

	return (
		<div className='quiz'>
			<span className='subtitle'>
				<CountDownTimer
					hoursMinSecs={hoursMinSecs}
					setTimeLeft={setTimeLeft}
				/>
			</span>

			{questions ? (
				<>
					<div className='quizInfo'>
						<h4>{questions[currQues].category}</h4>
						<h4>Score : {score}</h4>
					</div>
					<Question
						currQues={currQues}
						setCurrQues={setCurrQues}
						questions={questions}
						options={options}
						correct={questions[currQues]?.correct_answer}
						score={score}
						setScore={setScore}
						setQuestions={setQuestions}
					/>
				</>
			) : (
				<CircularProgress
					style={{ margin: 100 }}
					color='inherit'
					size={150}
					thickness={1}
				/>
			)}
		</div>
	)
}

export default Quiz
