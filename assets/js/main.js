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
        text_section1 : [
            {
            text_section1_0 : 
                {
                h4 : "17 YEARS OF EXPERIENCE 00",
                h1 : "We Are a <br> Wer Design <span class='agency_color'>Agency</span> 00",
                p : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,<br> there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the <br> Semantics, a large language ocean.Separated they live in Bookmarksgrove. 00"
                }
            },
            {
                text_section1_1 : 
                {
                h4 : "17 YEARS OF EXPERIENCE 01",
                h1 : "We Are a <br> Wer Design <span class='agency_color'>Agency</span> 01",
                p : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,<br> there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the <br> Semantics, a large language ocean.Separated they live in Bookmarksgrove. 01"
                }
            },
            {
                text_section1_2 : 
                {
                h4 : "17 YEARS OF EXPERIENCE 02",
                h1 : "We Are a <br> Wer Design <span class='agency_color'>Agency</span> 02",
                p : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,<br> there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the <br> Semantics, a large language ocean.Separated they live in Bookmarksgrove. 02"
                } 
            }
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