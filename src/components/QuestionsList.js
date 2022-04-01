import React from 'react'
import Question from './Question'

function QuestionsList(props) {
    const { idsList, emptyListMessage } = props

    return (
		<div>
			<h3 className="text-center my-3"> Would You Rather </h3>
			{idsList.length ? (
				idsList.map((id) => <Question key={id} id={id} />)
			) : (
				<p className="text-center">{emptyListMessage}</p>
			)}
		</div>
	)
}


export default QuestionsList