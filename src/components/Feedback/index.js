// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {feedbackSelected: false}

  changeFeedback = () => this.setState({feedbackSelected: true})

  renderFeedback = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="bg_container">
        <div className="small_container">
          <h1>
            {' '}
            How satisfied are you with our customer support performance?{' '}
          </h1>
          <div className="emoji_container">
            <ul>
              {emojis.map(item => (
                <li className="list_item">
                  <button type="button" onClick={this.changeFeedback}>
                    <img src={item.imageUrl} alt={item.name} />
                    <p> {item.name}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  renderThankyou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="bg_container">
        <div className="small_container">
          <img src={loveEmojiUrl} alt="love emoji" />
          <h1> Thank You </h1>
          <p>
            {' '}
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {feedbackSelected} = this.state
    return (
      <div>
        {feedbackSelected ? this.renderThankyou() : this.renderFeedback()}
      </div>
    )
  }
}
export default Feedback
