import React from 'react'

class Winner extends React.Component{
    onChecker(){
        const playerName = this.check()
        if (playerName === 'X'){
            return("Congratulations "+this.props.player1+" (Player X)")
        }
        else if (playerName === 'O'){
            return("Congratulations "+this.props.player2+" (Player O)")}
        else if (this.props.count === 9){
            return("No Winner!")            
        }
    }
    check(){
        if (document.getElementById('cell1') !== null && document.getElementById('cell2') !== null && document.getElementById('cell3') !== null && document.getElementById('cell1').innerText === document.getElementById('cell2').innerText && document.getElementById('cell3').innerText===document.getElementById('cell2').innerText && document.getElementById('cell3').innerText===document.getElementById('cell1').innerText){return(document.getElementById('cell1').innerText)}
        else if (document.getElementById('cell4') !== null && document.getElementById('cell5') !== null && document.getElementById('cell6') !== null && document.getElementById('cell4').innerText === document.getElementById('cell5').innerText && document.getElementById('cell6').innerText===document.getElementById('cell5').innerText && document.getElementById('cell6').innerText===document.getElementById('cell4').innerText){return(document.getElementById('cell4').innerText)}
        else if (document.getElementById('cell7') !== null && document.getElementById('cell8') !== null && document.getElementById('cell9') !== null && document.getElementById('cell7').innerText === document.getElementById('cell8').innerText && document.getElementById('cell9').innerText===document.getElementById('cell8').innerText && document.getElementById('cell9').innerText===document.getElementById('cell7').innerText){return(document.getElementById('cell7').innerText)}
        else if (document.getElementById('cell1') !== null && document.getElementById('cell4') !== null && document.getElementById('cell7') !== null && document.getElementById('cell1').innerText === document.getElementById('cell4').innerText && document.getElementById('cell7').innerText===document.getElementById('cell4').innerText && document.getElementById('cell7').innerText===document.getElementById('cell1').innerText){return(document.getElementById('cell1').innerText)}
        else if (document.getElementById('cell2') !== null && document.getElementById('cell5') !== null && document.getElementById('cell8') !== null && document.getElementById('cell2').innerText === document.getElementById('cell5').innerText && document.getElementById('cell8').innerText===document.getElementById('cell5').innerText && document.getElementById('cell8').innerText===document.getElementById('cell2').innerText){return(document.getElementById('cell2').innerText)}
        else if (document.getElementById('cell3') !== null && document.getElementById('cell6') !== null && document.getElementById('cell9') !== null && document.getElementById('cell3').innerText === document.getElementById('cell6').innerText && document.getElementById('cell9').innerText===document.getElementById('cell6').innerText && document.getElementById('cell9').innerText===document.getElementById('cell3').innerText){return(document.getElementById('cell3').innerText)}
        else if (document.getElementById('cell1') !== null && document.getElementById('cell5') !== null && document.getElementById('cell9') !== null && document.getElementById('cell1').innerText === document.getElementById('cell5').innerText && document.getElementById('cell9').innerText===document.getElementById('cell5').innerText && document.getElementById('cell9').innerText===document.getElementById('cell1').innerText){return(document.getElementById('cell1').innerText)}
        else if (document.getElementById('cell7') !== null && document.getElementById('cell5') !== null && document.getElementById('cell3') !== null && document.getElementById('cell7').innerText === document.getElementById('cell5').innerText && document.getElementById('cell3').innerText===document.getElementById('cell5').innerText && document.getElementById('cell3').innerText===document.getElementById('cell7').innerText){return(document.getElementById('cell7').innerText)}  
    }
    render(){
        return(
            <div>
                <h1>{this.onChecker()}</h1>
            </div>
        )
    }     
}
export default Winner