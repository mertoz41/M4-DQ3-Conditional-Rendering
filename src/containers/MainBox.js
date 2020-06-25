import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(){
    super()
    this.state = {
      rendering: "profile"
    }
  }

  changeView = (e) => {
    this.setState({
      rendering: e.currentTarget.id
    })

  }


  render() {
    let detailsToDisplay
    if (this.state.rendering === "profile") {
      detailsToDisplay = < Profile />
    } else if (this.state.rendering === "photo") {
      detailsToDisplay = < Photos />
    } else if (this.state.rendering === "cocktail") {
      detailsToDisplay = < Cocktails />
    } else {
      detailsToDisplay = <Pokemon />
    }

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */
   



    

    return (
      <div>
        <MenuBar passBack={this.state.rendering} changeView={this.changeView}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
