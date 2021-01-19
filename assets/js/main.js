let app = new Vue ({
    el: "#app",
    data : {
        number_phone : {
            prefix : "(001)",
            number_phone1 : "88451234",
            number_phone2 : "88455438"
        },
        menu_nav : ["HOME","ABOUT","SERVICES","SHOWCASE","BLOG","CONTACT"],
        counter: 0,
        img_section1 : [
            "assets/img/Group-36-2x.png",
            "assets/img/Group-40-2x.png",
            "assets/img/Group-35-2x.png"
        ],
        social_icon_section1 : ["FACEBOOK","YOUTUBE","INSTAGRAM","TWITTER"] 
    },
    methods: {
        next(){
            this.counter++;
            if(this.counter > this.img_section1.length -1){
                this.counter = 0;
            }
        }
    },
    created: function(){
        setInterval(this.next, 5000);
    }

});