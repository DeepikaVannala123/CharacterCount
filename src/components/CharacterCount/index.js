import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'

class CharacterCount extends Component {
  state = {isClicked: false, userInput: '', characterCountList: []}

  onChangeUSerInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAddUserInput = () => {
    const {userInput, characterCountList} = this.state
    const newUserInput = {
      id: v4(),
      name: userInput,
      count: userInput.length,
    }
    this.setState(prevState => ({
      characterCountList: [...prevState.characterCountList, newUserInput],
      userInput: '',
      isClicked: true,
    }))
    console.log(characterCountList)
  }

  render() {
    const {userInput, characterCountList, isClicked} = this.state
    return (
      <div className="app-container">
        <div className="whole-container">
          <div className="container-1">
            <div className="top-cont">
              <h1 className="heading">Count the Characters like a Boss...</h1>
            </div>
            {isClicked ? (
              <div className="bottom-container">
                <ul className="words-list">
                  {characterCountList.map(each => (
                    <li key={each.id} className="each-item">
                      <p className="name">
                        {each.name}: <span className="count">{each.count}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="bottom-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="image"
                />
              </div>
            )}
          </div>
          <div className="container-2">
            <h1 className="heading2">Character Counter</h1>
            <form className="input-container">
              <input
                type="text"
                className="input-box"
                placeholder="Enter the Characters here"
                value={userInput}
                onChange={this.onChangeUSerInput}
              />
              <button
                onClick={this.onAddUserInput}
                type="button"
                className="add-btn"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCount
