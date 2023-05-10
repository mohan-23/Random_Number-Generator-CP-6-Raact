import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  getGenerateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100)

    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state
    return (
      <div className="body-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.getGenerateNumber}
          >
            Generate
          </button>
          <p className="counter">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
