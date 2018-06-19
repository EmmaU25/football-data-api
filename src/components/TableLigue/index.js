import React, { Component } from 'react';
import '../Assets/css/grayscale.css';
import { Table } from 'reactstrap';

class TableLigue extends Component {
	constructor(){
		super();
		this.state = {
			table:[]
		};
	}

	componentDidMount(){
		fetch('http://api.football-data.org/v1/competitions/446/leagueTable')
			.then(res => res.json())
			.then(res => {
				this.setState({
				 table: res.standing
				});
			})
			.catch(error => {
				console.log('error dude, desolé');
			})
	}

	render () {
		console.log(this.state.table)
		return (
		<div>
	        <header className="ligues">
			 <div className="intro-body">
		        <div className="container">
		          <div className="row">
		            <div className="col-lg-8 mx-auto">
		              <h1 className="brand-heading">Ligues Football</h1>
		              <a href="" className="btn btn-circle js-scroll-trigger">
		                <i className="fa fa-angle-double-down animated"></i>
		              </a>
		            </div>
		          </div>
		        </div>
		      </div>
		    </header>
		    <h1>Le classement</h1>
			<Table hover>
	        <thead>
	          <tr>
	            <th>#</th>
	            <th>Equipe</th>
	            <th>Matchs Joués</th>
	            <th>Points</th>
	            <th>Buts</th>
	            <th>Buts Contre</th>
	            <th>Différence de buts</th>
	            <th>Matchs gagnés</th>
	            <th>Matchs nuls</th>
	            <th>Matchs perdus</th>
	          </tr>
	        </thead>
	        <tbody>
	         {
	         	this.state.table.map(x=>{
	         		return(
	         			<tr>
				            <th scope="row"> {x.position} </th>
				            <td> {x.teamName} </td>
				            <td> {x.playedGames} </td>
				            <td> {x.points} </td>
				            <td> {x.goals} </td>
				            <td> {x.goalsAgainst} </td>
				            <td> {x.goalDifference} </td>
				            <td> {x.wins} </td>
				            <td> {x.draws} </td>
				            <td> {x.losses} </td>
					    </tr>
	         		);
	         	})
	         }
	        </tbody>
	      </Table>
		</div>
		);
	}
}

export default TableLigue;