import React, { Component } from 'react';
import '../Assets/css/grayscale.css';
import Map from '../Map'


class Geolocalisation extends Component {

		constructor(){
		super();
		this.state = {
			rests: [],
			lat:0,
			lon:0 
		};
	}

	componentDidMount(){
		navigator.geolocation.getCurrentPosition(location => {
	      this.setState({
	        lat: location.coords.latitude,
	        lon: location.coords.longitude
	      })
	    });
		var url = this.props.location.param2
		var nUrl = url.replace(/\s/g,"+")
		fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=stadium+of+'+nUrl+'&key=AIzaSyCGDaXomdein63biZIFPUzp_3gcRsb021M', {
            method: 'GET',
            headers: {
		     "Access-Control-Allow-Origin": '*',
		     "Access-Control-Allow-Methods": 'GET'
		   }
        })
		.then(res => res.json())
		.then(res => {
            this.setState({
			 rests: res.results 
			});
		})
		.catch(error => {
			console.log('error, desolé');
		})


	}

	render () {
		console.log(this.state.rests)
		return (
			<div>
				<header className="ligues">
		      <div className="intro-body">
		        <div className="container">
		          <div className="row">
		            <div className="col-lg-8 mx-auto">
		              <h1 className="brand-heading">{this.props.location.param2}</h1>
		              <a href="" className="btn btn-circle js-scroll-trigger">
		                <i className="fa fa-angle-double-down animated"></i>
		              </a>
		            </div>
		          </div>
		        </div>
		      </div>
		    </header>
		    <h3>Geolocalisation de {this.props.location.param2} </h3>
		    {	
		    	
	    		this.state.rests.map((p,i) => { 
			    	const marker = [
			    		{
			    			lat: p.geometry.location.lat,
			    			lng: p.geometry.location.lng,
			    			name: p.name,
			    			icon:{
						      url: "http://2.bp.blogspot.com/-q7tT99WKZjs/TryUUOjfJBI/AAAAAAAAACY/LKHB7qjvnvs/s35/Soccer-icon.png",
						      /*anchor: new google.maps.Point(32,32),
						      scaledSize: new google.maps.Size(64,64)*/
						    }
		    			},
		    			{
		    				lat:this.state.lat,
		    				lng:this.state.lon,
		    				name: "Votre position",
		    				icon:{
						      url: "http://lh5.googleusercontent.com/-YY5z0ykY2-o/AAAAAAAAAAI/AAAAAAAAAIk/iZv_fmCR810/s35-c/photo.jpg",
						     /* anchor: new google.maps.Point(32,32),
						      scaledSize: new google.maps.Size(64,64)*/
						    }
		    			}
			    	]
			    	const currentPos={
			    		lat:this.state.lat,
		    			lng:this.state.lon
			    	}   			
	    			return(
	    				<div>
		    				<p> {p.name} </p>
		    				<Map markers={marker} currentP={currentPos} />
	    				</div>
	    			)
	    		})
	    	}
			</div>
		);
	}
}

export default Geolocalisation;