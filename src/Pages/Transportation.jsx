import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FaTaxi } from "react-icons/fa6";

const Transportation = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [clickedLocation, setClickedLocation] = useState(null);
    const [routeGeometry, setRouteGeometry] = useState([]);
    const [book,setBook]=useState(true)
    const [vehicle, setVehicle] = useState('');
    const [volunteerNeeded, setVolunteerNeeded] = useState(false);
    const [location, setLocation] = useState('');
    const price = 500;
    const handleVehicleChange = (e) => {
      setVehicle(e.target.value);
    };
  
    const handleVolunteerChange = (e) => {
      setVolunteerNeeded(e.target.checked);
    };
  
    const handleLocationChange = (e) => {
      setLocation(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();

    };
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation([latitude, longitude]);
                },
                (error) => {
                    console.error("Error getting user's location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    const handleClick = async (event) => {
        const { lat, lng } = event.latlng;
        setClickedLocation([lat, lng]);
        setBook(prev => !prev)
           
        if (userLocation) {
            try {
                const response = await fetch(`https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248e323d8eb82f549da9e7d75fa2f629c1c&start=${userLocation[1]},${userLocation[0]}&end=${lng},${lat}`);
                const data = await response.json();
                const geometry = data.features[0].geometry.coordinates;
                setRouteGeometry(geometry);
            } catch (error) {
                console.error("Error fetching route:", error);
            }
        }
    };

    const ClickHandler = () => {
        useMapEvents({
            click: (event) => {
                handleClick(event);
            },
        });
        return null;
    };

    return (
        <div className='w-full  flex flex-col  items-center justify-center'>
            <div className='w-4/5 font-semibold text-4xl' id='textColor'>
                <div className='flex my-4'>
                    <FaTaxi /> &nbsp; &nbsp;
                     <h1 className='text-4xl font-medium'>Transportation</h1>
                </div>
            </div>
            <div className='w-4/5 text-4xl'>
            {book?       <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vehicle">
            Select a vehicle:
          </label>
          <div>
            <input
              className="mr-2 leading-tight"
              type="radio"
              id="car"
              name="vehicle"
              value="car"
              checked={vehicle === 'car'}
              onChange={handleVehicleChange}
            />
            <label className="inline-block text-sm text-gray-700" htmlFor="car">
              Car
            </label>
          </div>
          <div>
            <input
              className="mr-2 leading-tight"
              type="radio"
              id="bike"
              name="vehicle"
              value="bike"
              checked={vehicle === 'bike'}
              onChange={handleVehicleChange}
            />
            <label className="inline-block text-sm text-gray-700" htmlFor="bike">
              Bike
            </label>
          </div>
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            id="volunteer"
            name="volunteer"
            checked={volunteerNeeded}
            onChange={handleVolunteerChange}
          />
          <label className="inline-block text-sm text-gray-700 ml-2" htmlFor="volunteer">
            Volunteer needed
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Location:
          </label>
          <input
            className="shadow appearance-none border rounded w-2/5 font-normal text-xl text-gray-700  focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder="Location"
            value={location}
            onChange={handleLocationChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-green-500 hover:bg-green-600 text-xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
 : <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
 <div className="mb-4">
   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vehicle">
     Select a vehicle:
   </label>
   <div>
     <input
       className="mr-2 leading-tight"
       type="radio"
       id="car"
       name="vehicle"
       value="car"
       checked={vehicle === 'car'}
       onChange={handleVehicleChange}
       readOnly
     />
     <label className="inline-block text-sm text-gray-700" htmlFor="car">
       Car
     </label>
   </div>
   <div>
     <input
       className="mr-2 leading-tight"
       type="radio"
       id="bike"
       name="vehicle"
       value="bike"
       checked='true'
      
       readOnly
     />
     <label className="inline-block text-sm text-gray-700" htmlFor="bike">
       Bike
     </label>
   </div>
 </div>
 <div className="mb-4">
   <input
     type="checkbox"
     id="volunteer"
     name="volunteer"
     checked='true'
     readOnly
   />
   <label className="inline-block text-sm text-gray-700 ml-2" htmlFor="volunteer">
     Volunteer needed
   </label>
 </div>
 <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Location:
          </label>
          <input
            className="shadow appearance-none border rounded w-2/5 font-normal text-xl text-gray-700  focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder="Location"
            value='Sadobato, Kathmandu'
            readOnly
          />
        </div>
 <div className="flex items-center justify-start">
   <p className=" font-bold text-xl text-green-500 mb-2">Total Cost: रु{price}</p>
 </div>
 <div className="flex items-center justify-center">
   <button
     className="bg-green-500 hover:bg-green-600 text-white text-2xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
     type="submit"
   >
     Book Now
   </button>
 </div>
</form> }
            </div>
            <div className="w-4/5 h-screen  flex justify-center items-start">
                {userLocation && (
                    <div className="h-5/6 w-full">
                        <MapContainer center={userLocation} zoom={13} style={{ height: '100%', width: '100%' }}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            {/* Display route */}
                            {routeGeometry.length > 0 && <Polyline positions={routeGeometry} color="blue" />}

                            {/* Marker for user's current location */}
                            <Marker position={userLocation}>
                                <Popup>Your Location</Popup>
                            </Marker>

                            {/* Marker for clicked location */}
                            {clickedLocation && (
                                <Marker position={clickedLocation}>
                                    <Popup>Clicked Location</Popup>
                                </Marker>
                            )}

                            {/* Click handler */}
                            <ClickHandler />
                        </MapContainer>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Transportation;
