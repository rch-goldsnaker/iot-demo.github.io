<template>
  <card type="chart">

        <template slot="header">


            <h5 class="card-category pull-right">{{getTimeAgo((nowTime - time) / 1000)}} ago </h5>

          
            <h5 class="card-category">{{ config.selectedDevice.name }} Device 2- {{ config.variableFullName }}</h5>

            <h3 class="card-title">
                <i class="fa " :class="[config.icon, getIconColorClass()]" aria-hidden="true"
                    style="font-size: 30px;"></i>
            </h3>

        </template>

        <div class="img-area">
            <img :src="img" height="100%" width= "380">
        </div>

    </card>
</template>

<script>
    export default {
        name: 'espCam',
        props: ['config'],
        
        data() {
            return {
                receivedTime: 0,
                value: 0,
                time: Date.now(),
                nowTime: Date.now(),
                isMounted: false,
                topic: "",
                img:"img/LedOff.jpeg",
                wsHost : process.env.ws_host,
                wsPort : process.env.ws_port
            };
        },
        mounted(){

            this.$nuxt.$on("messageLedButton", this.ledFunction );

            this.getNow();

            const WS_URL = `ws:///${this.wsHost}:${this.wsPort}`;
            const ws = new WebSocket(WS_URL);
            let urlObject;
            ws.onopen = () => console.log(`Connected to ${WS_URL}`);
            ws.onmessage = message => {
                const arrayBuffer = message.data;
                if(urlObject){
                    URL.revokeObjectURL(urlObject);
                }
                this.img= URL.createObjectURL(new Blob([arrayBuffer]));
            }
        },
        methods: {

            ledFunction(index){
                if(index == "true"){
                    this.img = "img/LedOn.jpeg";
                }else if(index == "false"){
                    this.img = "img/LedOff.jpeg";
                }
            },

            getNow() {
                this.nowTime = Date.now();
                setTimeout(() => {
                    this.getNow();
                }, 1000);
            },
            getTimeAgo(seconds) {

                if (seconds < 0) {
                    seconds = 0;
                }

                if (seconds < 59) {
                    return seconds.toFixed() + " secs";
                }

                if (seconds > 59 && seconds <= 3600) {
                    seconds = seconds / 60;
                    return seconds.toFixed() + " min";
                }

                if (seconds > 3600 && seconds <= 86400) {
                    seconds = seconds / 3600;
                    return seconds.toFixed() + " hour";
                }

                if (seconds > 86400) {
                    seconds = seconds / 86400;
                    return seconds.toFixed() + " day";
                }


            },

            getIconColorClass() {

                if (this.config.class == "success") {
                    return "text-success";
                }
                if (this.config.class == "primary") {
                    return "text-primary";
                }
                if (this.config.class == "warning") {
                    return "text-warning";
                }
                if (this.config.class == "danger") {
                    return "text-danger";
                }
            }
        }
    };
</script>
<style>
</style>