// Write your code here
import {Component} from 'react'

import './index.css'

const initialState = {
  timeInMinutes: 0,
  timeInSeconds: 0,
}

class Stopwatch extends Component {
  state = initialState

  clearTimeInterval = () => clearInterval(this.timerId)

  onClickStart = () => {
    this.timerId = setInterval(this.timerIncrease, 1000)
  }

  timerIncrease = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  onClickStop = () => {
    this.clearTimeInterval()
  }

  onClickReset = () => {
    this.clearTimeInterval()
    this.setState(initialState)
  }

  getActualTimeFormat = () => {
    const {timeInMinutes, timeInSeconds} = this.state
    const totalTime = timeInMinutes * 60 + timeInSeconds

    const minutes = Math.floor(totalTime / 60)
    const seconds = Math.floor(totalTime % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    return (
      <div className="stopwatch-bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="stopwatch-box-container">
          <div className="timer-icon-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-icon"
            />
            <p className="timer-text">Timer</p>
          </div>
          <h1 className="display-timer">{this.getActualTimeFormat()}</h1>
          <div className="buttons-container">
            <button
              type="button"
              className="button btn-1"
              onClick={this.onClickStart}
            >
              Start
            </button>
            <button
              type="button"
              className="button btn-2"
              onClick={this.onClickStop}
            >
              Stop
            </button>
            <button
              type="button"
              className="button btn-3"
              onClick={this.onClickReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
