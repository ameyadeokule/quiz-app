import axios from 'axios'
import { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Instructions from './pages/Instructions'
import Quiz from './pages/Quiz'
import Result from './pages/Result'
import './App.css'

function App() {
	const [questions, setQuestions] = useState()
	const [name, setName] = useState()
	const [score, setScore] = useState(0)

	const fetchQuestions = async (category = '', difficulty = '') => {
		const { data } = await axios.get(
			`https://opentdb.com/api.php?amount=10${
				category && `&category=${category}`
			}${difficulty && `&difficulty=${difficulty}`}&type=multiple`,
		)
		setQuestions(data.results)
		console.log(data.results)
	}

	return (
		<BrowserRouter>
			<div className='app'>
				<Header />
				<Switch>
					<Route path='/' exact>
						<Home
							name={name}
							setName={setName}
							fetchQuestions={fetchQuestions}
						/>
					</Route>
					<Route path='/instructions' exact>
						<Instructions name={name} />
					</Route>
					<Route path='/quiz'>
						<Quiz
							name={name}
							questions={questions}
							score={score}
							setScore={setScore}
							setQuestions={setQuestions}
						/>
					</Route>
					<Route path='/result'>
						<Result name={name} score={score} />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App
