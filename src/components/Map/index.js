import React, { Component } from 'react';
import '../Assets/css/grayscale.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polyline} from 'google-maps-react';

/*export class Map extends Component {
	render () {
		const mapContainer = <div style={{height: '100%', width : '100%'}} ></div>
		const markers = this.props.markers.map((venue,i) =>{
			const marker ={
				position: {
					lag: venue.location.lat,
					lng: venue.location.lng
				}
			}
			return <Marker key={i} {...marker} />
		})

		return (
			<GoogleMapLoader
				containerElement = {mapContainer}
				googleMapElement = {
					<GoogleMap
					defaultZoom={8}
					defaultCenter = {this.props.center}
					option={{streeViewControl:false, mapTypeControl:false}}>
						{markers}
					</GoogleMap>
				} />
		)
	}
	
}

export default Map;*/

export class MapContainer extends React.Component {
	  state = {
	    showingInfoWindow: false,
	    activeMarker: {},
	    selectedPlace: {},
	  };

	  onMarkerClick = (props, marker, e) =>
	    this.setState({
	      selectedPlace: props,
	      activeMarker: marker,
	      showingInfoWindow: true
	    });

	   onMapClicked = (props) => {
	    if (this.state.showingInfoWindow) {
	      this.setState({
	        showingInfoWindow: false,
	        activeMarker: null
	      })
	    }
	  };   

	render() {
		const markers = this.props.markers.map((venue,i) =>{
			const marker ={
				position: {
					lat: venue.lat,
					lng: venue.lng,
				},
				name:venue.name,
				icon:{
					url: venue.icon.url,
					/*anchor: venue.icon.anchor,
					scaledSize: venue.icon.scaledSize,*/
				}

			}
			return <Marker key={i} onClick={this.onMarkerClick} {...marker} />
		})

		var points = [
          {
           lat: 51.5548885,
           lng: -0.108438
       	  },
          {lat: 45.201699399999995, lng: 5.7504795}
        ];
	    return (
	      <Map google={this.props.google} 
	      zoom={5}
	      initialCenter={
           this.props.currentP
          }>
          {markers}
          <InfoWindow
	          marker={this.state.activeMarker}
	          visible={this.state.showingInfoWindow}>
	            <div>
	              <h1 className="noir">{this.state.selectedPlace.name}</h1>
	            </div>
         </InfoWindow>
                 <Polyline
		          paths={this.props.marker}
		          strokeColor="#0000FF"
		          strokeOpacity={0.8}
		          strokeWeight={2} />
	      </Map>
	    );
  	}

}

const LoadingContainer = (props) => (
  <div>Fancy loading container!</div>
)

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBRr2zCSHgwDPQzdvQh1ISiFP7fuDkO_fU'),
  LoadingContainer: LoadingContainer
})(MapContainer)