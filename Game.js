import React from 'react'
import Winner from './Winner.js'
import './Styles.css'
class Game extends React.Component{
    constructor(){
        super()
        this.state={
            Player1 : '',
            Player2 : '',
            count : 0
        }
        this.onClick = this.onClick.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    onChange(event){
        const {name, value} = event.target
        return(
            this.setState({
                [name] : value
            })
        )
    }
    onClick(event){
        const cell = event.target.id
        if (this.state.count % 2 === 0){
            if (document.getElementById(cell).innerText === ''){
                document.getElementById(cell).innerText = 'X'
                document.getElementById(cell).style.backgroundColor = '#fac5c5'
                this.setState({count : this.state.count+1})}
            }
        else{
            if (document.getElementById(cell).innerText === ''){
                document.getElementById(cell).innerText = 'O'
                document.getElementById(cell).style.backgroundColor = '#c3fadc'
                this.setState({count : this.state.count+1})}
            }
    }
    render(){
        return(
            <center>
                <div>
                    <h1 id='heading'>Welcome to Tic-Tac-Toe Game</h1>
                    <div id="title">
                        <label>Player 1 :</label>
                        <input type="text" name='Player1' placeholder="Player1" onChange={this.onChange}/>
                        <label>- 'X'</label><br/>
                        <label>Player 2 :</label>
                        <input type="text" name='Player2' placeholder="Player2" onChange={this.onChange}/>
                        <label>- 'O'</label>
                    </div>
                    <table >
                        <tbody>
                            <tr>
                                <td id='cell1' onClick={this.onClick}></td>
                                <td id='cell2' onClick={this.onClick}></td>
                                <td id='cell3' onClick={this.onClick}></td>
                            </tr>
                            <tr>
                                <td id='cell4' onClick={this.onClick}></td>
                                <td id='cell5' onClick={this.onClick}></td>
                                <td id='cell6' onClick={this.onClick}></td>
                            </tr>
                            <tr>
                                <td id='cell7' onClick={this.onClick}></td>
                                <td id='cell8' onClick={this.onClick}></td>
                                <td id='cell9' onClick={this.onClick}></td>
                            </tr>
                        </tbody>
                    </table>
                    <Winner player1={this.state.Player1} player2={this.state.Player2} count={this.state.count}/>
                </div>
            </center>
        )
    }
}

export default Game