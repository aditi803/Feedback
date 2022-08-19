import React,{useState, useContext, useEffect} from 'react'
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    useEffect(() => {

        if(feedbackEdit.edit ===  true){
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
            setBtnDisabled(false)
        }
    },[feedbackEdit])

    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        } 
        else if(text !== '' && text.trim().length <=10 ){
            setMessage('Message must contain atleast 10 characters.')
            setBtnDisabled(true)
        }
        else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating
            }
                
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }
            else{
                addFeedback(newFeedback);
            } 
            setText('')
        }   
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className='input-group'>
                <input 
                    type='text'
                    placeholder='Write a review'
                    onChange={handleTextChange}
                    value={text}
                />
                <Button
                    type='submit'
                    isDisabled={btnDisabled}
                >Send</Button>           
            </div>
                {message && <div className='message'>{message}</div> }
        </form>
    </Card>
  )
}

export default FeedbackForm