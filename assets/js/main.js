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
                h4 : "17 YEARS OF EXPERIENCE 01",
                h1 : "We Are a <br> Web Design <span class='agency_color'>Agency</span> 01",
                p : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,<br> there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the <br> Semantics, a large language ocean.Separated they live in Bookmarksgrove. 01"
                }
            },
            {
                text_section1_1 : 
                {
                h4 : "17 YEARS OF EXPERIENCE 02",
                h1 : "We Are a <br> Web Design <span class='agency_color'>Agency</span> 02",
                p : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,<br> there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the <br> Semantics, a large language ocean.Separated they live in Bookmarksgrove. 02"
                }
            },
            {
                text_section1_2 : 
                {
                h4 : "17 YEARS OF EXPERIENCE 03",
                h1 : "We Are a <br> Web Design <span class='agency_color'>Agency</span> 03",
                p : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,<br> there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the <br> Semantics, a large language ocean.Separated they live in Bookmarksgrove. 03"
                } 
            }
        ],
        social_icon_section1 : [
            "FACEBOOK","INSTAGRAM","YOUTUBE","TWITTER"
        ],
        text_section2 : 
        {
            h2: "We Are Here To<br> Make Your <span class='agency_color'>Website</span><br>Look More <span class='agency_color'>Elegant</span><br>And Stylish!"
        },
        card_section2 : [
            {
                card_section2_1 :
                {
                i : "<i class='fas fa-tachometer-alt'></>",
                h2 : "Speed Optimization",
                p : "Far far away, behind the word mountains, far from the countries Vokalia Separated...1"
                }
            },
            {
                card_section2_2 :
                {
                i : "<i class='fas fa-cloud'></i>",
                h2 : "Cloud Solutions",
                p : "Far far away, behind the word mountains, far from the countries Vokalia Separated...2"
                }
            },
            {
                card_section2_3 :
                {
                i : "<i class='fas fa-tablet-alt'></i>",
                h2 : "Website Design",
                p : "Far far away, behind the word mountains, far from the countries Vokalia Separated...3"
                }
            },
            {
                card_section2_4 :
                {
                i : "<i class='far fa-clock'></i>",
                h2 : "Online Marketing",
                p : "Far far away, behind the word mountains, far from the countries Vokalia Separated...4"
                }
            }
        ],
        text_section3 :
        {
            h3 : "learn more about <br> our <span class='agency_color'>mission</span>",
            p : "Far far away, behind the word mountains, far from the countries Vokalia and<br> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove<br> right at the coast of the Semantics, a large language ocean.Separated they live<br> in Bookmarksgrove.",
        },
        text_section4 :
        {
            h3 : "Our recent <span class='agency_color'>web design</span> &<br> ssome example of<br> past <span class='agency_color'>projects</span>",
            p : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind<br> texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language<br> ocean.Separated they live in Bookmarksgrove. Far far away, behind the word mountains, far from the<br> countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove."
        },
        img_section4 : [
            "assets/img/ina-soulis-227104-unsplash-1024x1024.jpg",
            "assets/img/sunisa-misa-531163-unsplash-1024x1024.jpg",
            "assets/img/355H-1024x1024.jpg",
            "assets/img/photo-1448932252197-d19750584e56-1024x1024.jpg",
            "assets/img/business-competition-PB366D8-1024x1024.jpg",
            "assets/img/cozy-sofa-in-living-room-PQR5AB9-1024x1024.jpg",
            "assets/img/aa9a4539-PQGJ7HU-1024x1024.jpg",
            "assets/img/cody-davis-253928-unsplash-1024x1024.jpg"
        ],
        img_section4_text : [
            {
                h4 : "Title1",
                p : "Branding - Marketing"
            },
            {
                h4 : "Title2",
                p : "Branding - Marketing"
            },
            {
                h4 : "Title3",
                p : "Branding - Marketing"
            },
            {
                h4 : "Title4",
                p : "Branding - Marketing"
            },
            {
                h4 : "Title5",
                p : "Branding - Marketing"
            },
            {
                h4 : "Title6",
                p : "Branding - Marketing"
            },
            {
                h4 : "Title7",
                p : "Branding - Marketing"
            },
            {
                h4 : "Title8",
                p : "Branding - Marketing"
            }
        ],
        text_section5 : 
        {
            h2: "When it comes to barbequing, there are two main schools of thought for the<br> techniques that you can use. Freshly scrambled eggs with applewood smoked bacon<br> - are amazing!",
            img: "assets/img/businesswoman-analysing-document-P8WSNMC-1024x820.jpg",
            h4 : "<span class='agency_color'>LISSA DURBIN</span>",
            h5 : "Client"
        },
        text_section6 :
        {
            h2: "Latest News & Our <span class='agency_color'>Blog</span>"
        },
        img_section6 : [
            "assets/img/serious-businesswoman-with-documents-talking-on-P9Q6LX6-1024.jpg",
            "assets/img/Businessman-at-the-desk-in-his-office-resting--1024x768.jpg",
            "assets/img/simple-home-office-with-tree-PBXRXYB-large-1024x768.jpg",
        ],
        img_section7 : [
            "assets/img/client-1-2x.png",
            "assets/img/client-9-2x.png",
            "assets/img/client-7-2x.png",
            "assets/img/client-3-2x.png",
            "assets/img/client-4-2x.png",
            "assets/img/client-5-2x.png",
        ],
        info_section8 : [
            {
                link : {
                    h3 : "QUICk LINKS",
                    li : [
                     "Careers",
                     "News",
                     "Terms of use",
                     "Privacy Projects",
                     "About",
                     "Contact"
                    ]
                },
                contact : {
                    h3 : "CONTACT",
                    p : [
                        "Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX 76051",
                        "info@yourdomain.com",
                        "+99 (0) 101 0000 888",
                       ]
                },
                location : {
                    h3 : "LOCATION ON MAP",
                    img : [
                         'assets/img/map.png',
                       ]
                }
            }
        ] 
    },
    methods: {
        next(){
            this.counter++;
            if(this.counter > this.img_section1.length -1){
                this.counter = 0;
            }
        },
        scrollTop(){
            window.scrollTo(0,0);
        }
    },
    created: function(){
        setInterval(this.next, 5000);
    }

});