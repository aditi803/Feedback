import React, { useState, useContext } from 'react'
import Card from './shared/Card'
import { FaEdit, FaTimes } from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'


const FeedbackItem = ({ item}) => {

    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
    return (
        <Card>
            <div className='num-display'>
                {item.rating}
            </div>
            <button className='close' onClick={() => deleteFeedback(item.id)}>
                <FaTimes color='purple' />
            </button>
            <button className='edit' onClick={() => editFeedback(item)}>
                <FaEdit  color='purple'/>
            </button>
            <div className='text-display'>
                {item.text}
            </div>
        </Card>
    )
}

export default FeedbackItem