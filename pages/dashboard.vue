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
    "variableFullName": "temperature",
    "typeChart": "areaspline",
    "variable": "iFKrw99Mmf",
    "variableType": "input",
    "variableSendFreq": "30",
    "unit": "Watts",
    "class": "success",
    "column": "col-12",
    "decimalPlaces": 2,
    "widget": "numberchart",
    "icon": "fa-sun",
    "chartTimeAgo": 60,
    "demo": true
  },
  {
    "userId": "sampleuserid",
    "selectedDevice": {
      "name": "Home",
      "dId": "8888"
    },
    "variableFullName": "temperature",
    "typeChart": "areaspline",
    "variable": "idadm8eYhh",
    "variableType": "input",
    "variableSendFreq": "30",
    "unit": "Watts",
    "class": "success",
    "column": "col-lg-4",
    "decimalPlaces": 2,
    "widget": "numberchart",
    "icon": "fa-sun",
    "chartTimeAgo": 60,
    "demo": true
  },
  {
    "userId": "sampleuserid",
    "selectedDevice": {
      "name": "Home",
      "dId": "8888"
    },
    "variableFullName": "temperature",
    "typeChart": "areaspline",
    "variable": "jiMoDe1Bja",
    "variableType": "input",
    "variableSendFreq": "30",
    "unit": "Watts",
    "class": "success",
    "column": "col-lg-4",
    "decimalPlaces": 2,
    "widget": "numberchart",
    "icon": "fa-sun",
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
    "variable": "b1Kau1br5p",
    "variableType": "input",
    "widget": "espCam",
    "icon": "fa-camera",
    "column": "col-lg-4"
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
    "variableFullName": "Pump",
    "variable": "uKEXktxzIE",
    "variableType": "output",
    "icon": "fa-lightbulb",
    "column": "col-lg-6",
    "widget": "button",
    "class": "danger",
    "message": "{'fanstatus': 'stop'}"
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
    "variableFullName": "Pump",
    "variable": "vu2UyNRind",
    "variableType": "output",
    "icon": "fa-lightbulb",
    "column": "col-lg-6",
    "widget": "button",
    "class": "danger",
    "message": "{'fanstatus': 'stop'}"
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