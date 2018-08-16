<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br/>

    </div>
    <br>
    <gmap-map
      :center="center"
      :zoom="2"
      style="width:100%;  height: 400px;"
      @click = "handleClick"
    >
      <gmap-marker
        :key="index"
        v-for="(marker, index) in markers"
        :position="marker.position"
        @click="center=marker.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      markers: [{position: {lat: 28.3949, lng: 84.124}},{position: {lat: -38.4161, lng: -63.6167}},{position: {lat: -35.6751, lng: -71.543}},{position: {lat: 60.472, lng: 8.46895}},{position: {lat: -40.9006, lng: 174.886}}],
      places: [],
      currentPlace: null,
      profilePostsUrl: "https://travel-bug-backend.herokuapp.com/posts/profile/1",
    };
  },
  mounted() {
    this.geolocate();
    // this.getData()
  }, {
   fetch(this.profilePostsUrl, {
      method: "get",
      mode: "cors",
      credentials: "same-origin",
      headers: new Headers({ "Content-Type": "application/json" })
    })
      .then(resp => resp.json())
      .then(resp => {
        this.profileData = resp;
        console.log(this.profileData.profile);
      })
  }

  methods: {
    handleClick(event) {
      console.log('handleClick', event.latLng.lng(), event.latLng.lat())
    },
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>
