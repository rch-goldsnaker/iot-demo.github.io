<template>

  
    
  <div class="row" v-if="true">

    
    
    <div
      v-for="(widget, index) in widgets"
      :key="index"
      :class="[widget.column]"
      
    >

      <Rtnumberchart
        v-if="widget.widget == 'numberchart'"
        :config="fixWidget(widget)"
        :test="100"
      ></Rtnumberchart>

      <Iotswitch
        v-if="widget.widget == 'switch'"
        :config="fixWidget(widget)"
      ></Iotswitch>

      <Iotbutton
        v-if="widget.widget == 'button'"
        :config="fixWidget(widget)"
      ></Iotbutton>

      <Iotindicator
        v-if="widget.widget == 'indicator'"
        :config="fixWidget(widget)"
      ></Iotindicator>

      <EspCam
        v-if="widget.widget == 'espCam'"
        :config="fixWidget(widget)"
      ></EspCam>
    </div>
  </div>

  <div v-else>
    Select a Device...
  </div>

</template>
<script>

export default {
  middleware: 'authenticated',
  name: 'Dashboard',
  data() {
    return {
      widgets : [
  {
    "userId": "sampleuserid",
    "selectedDevice": {
      "name": "Home",
      "dId": "8888"
    },
    "variableFullName": "Heat Index",
    "typeChart": "areaspline",
    "variable": "IUnSGcDjRj",
    "variableType": "input",
    "variableSendFreq": 30,
    "unit": "°C",
    "class": "success",
    "column": "col-12",
    "decimalPlaces": 2,
    "widget": "numberchart",
    "setValue":15,
    "testTime":1606659071000,
    "icon": "fa-thermometer-full",
    "chartTimeAgo": 60,
    "demo": true
  },
  {
    "userId": "sampleuserid",
    "selectedDevice": {
      "name": "Home",
      "dId": "8888"
    },
    "variableFullName": "Temperature",
    "typeChart": "areaspline",
    "variable": "TjXSiiKr6m",
    "variableType": "input",
    "variableSendFreq": 30,
    "unit": "°C",
    "class": "warning",
    "column": "col-lg-4",
    "decimalPlaces": 2,
    "widget": "numberchart",
    "setValue":12,
    "testTime":1606659071000,
    "icon": "fa-thermometer",
    "chartTimeAgo": 60,
    "demo": true
  },
  {
    "userId": "sampleuserid",
    "selectedDevice": {
      "name": "Home",
      "dId": "8888"
    },
    "variableFullName": "Humidity",
    "typeChart": "areaspline",
    "variable": "R7Ypbaoy4C",
    "variableType": "input",
    "variableSendFreq": 30,
    "unit": "%",
    "class": "primary",
    "column": "col-lg-4",
    "decimalPlaces": 2,
    "widget": "numberchart",
    "setValue":40,
    "testTime":1606659071000,
    "icon": "fa-tint",
    "chartTimeAgo": 60,
    "demo": true
  },
  {
    "userId": "userid",
    "selectedDevice": {
      "name": "Esp32 Cam",
      "dId": "8888"
    },
    "variableFullName": "EspCam32",
    "variable": "kDAfTIMyHT",
    "variableType": "input",
    "widget": "espCam",
    "icon": "fa-camera",
    "column": "col-lg-4",
    "class": "danger"
  },
  {
    "userId": "userid",
    "selectedDevice": {
      "name": "Home",
      "dId": "8888",
      "templateName": "Power Sensor",
      "templateId": "984237562348756ldksjfh",
      "saverRule": false
    },
    "variableFullName": "Led ON",
    "variable": "j6iWecYDYx",
    "variableType": "output",
    "icon": "fa-lightbulb",
    "column": "col-lg-6",
    "widget": "button",
    "class": "success",
    "message": "true",
    "text": "ON"
  },
  {
    "userId": "userid",
    "selectedDevice": {
      "name": "Home",
      "dId": "8888",
      "templateName": "Power Sensor",
      "templateId": "984237562348756ldksjfh",
      "saverRule": false
    },
    "variableFullName": "Led OFF",
    "variable": "CCNLjHe1aI",
    "variableType": "output",
    "icon": "fa-lightbulb",
    "column": "col-lg-6",
    "widget": "button",
    "class": "danger",
    "message": "true",
    "text": "OFF"
  }
]
    } 
  },

  mounted() {

  },

  methods: {

    fixWidget(widget){
      var widgetCopy = JSON.parse(JSON.stringify(widget));
      widgetCopy.selectedDevice.dId = this.$store.state.selectedDevice.dId;
      widgetCopy.selectedDevice.name = this.$store.state.selectedDevice.name;
      widgetCopy.userId = this.$store.state.selectedDevice.userId;

      if (widget.widget =="numberchart"){
        widgetCopy.demo = false;
      }
      
      return widgetCopy;
    }

  }

};
</script>