new Vue({
    el: '#app',
    data: {
        isSmartPhone: isMobile.phone,
        styleVisibility: { 
            visibility: 'hidden'
        },
        styleThemeColor: {
            menuAndFooter: "#545c64"
        },
        headerHeight: 'auto',
        myImage: 'img/frog.jpg',
        fit: "fit",
        skills: {
            languages: [
                {
                    name: "Java",
                    path: "icon-java.png"
                },
                {
                    name: "JavaScript",
                    path: "icon-js.png"
                },
                {
                    name: "HTML",
                    path: "icon-html.png"
                },
                {
                    name: "CSS",
                    path: "icon-css.png"
                },
                {
                    name: "C#",
                    path: "icon-csharp.png"
                },
                {
                    name: "Python",
                    path: "icon-python.png"
                },
                {
                    name: "Kotlin",
                    path: "icon-kotlin.png"
                },
                {
                    name: "Go",
                    path: "icon-golang.png"
                },
            ],
            others: [
                {
                    path: "icon-mysql.png",
                    name: "MySQL",
                    message: ""
                }, 
                {
                    path: "icon-postgres.png",
                    name: "PostgreSQL",
                    message: ""
                }, 
                {
                    path: "icon-oracle.png",
                    name: "ORACLE",
                    message: ""
                }, 
                {
                    path: "icon-sqlserver.png",
                    name: "SQLServer",
                    message: ""
                },  
                {
                    path: "icon-apache.png",
                    name: "Apache HTTP SERVER",
                    message: ""
                },  
                {
                    path: "icon-tomcat.png",
                    name: "Apache Tomcat",
                    message: ""
                },  
                {
                    path: "icon-jboss.png",
                    name: "JBOSS",
                    message: ""
                },  
                {
                    path: "icon-aws.png",
                    name: "AWS",
                    message: ""
                },  

            ],
            clouds: [

            ]
        },
        skillImages: [
            {
                path: "icon-java.png",
                name: "Java",
                message: ""
            }, 
            {
                path: "icon-spring.png",
                name: "Spring",
                message: ""
            }, 
            {
                path: "icon-js.png",
                name: "JavaScript",
                message: ""
            }, 
            {
                path: "icon-jquery.png",
                name: "jQuery",
                message: ""
            }, 
            {
                path: "icon-html.png",
                name: "HTML",
                message: ""
            }, 
            {
                path: "icon-css.png",
                name: "CSS",
                message: ""
            }, 
            {
                path: "icon-bootstrap.png",
                name: "Bootstrap",
                message: ""
            }, 
            {
                path: "icon-mysql.png",
                name: "MySQL",
                message: ""
            }, 
            {
                path: "icon-postgres.png",
                name: "PostgreSQL",
                message: ""
            }, 
            {
                path: "icon-oracle.png",
                name: "ORACLE",
                message: ""
            }, 
            {
                path: "icon-csharp.png",
                name: "C#",
                message: ""
            },
            {
                path: "icon-sqlserver.png",
                name: "SQLServer",
                message: ""
            },  
            {
                path: "icon-aws.png",
                name: "AWS",
                message: ""
            },  
            {
                path: "icon-python.png",
                name: "Python",
                message: ""
            },  
            {
                path: "icon-kotlin.png",
                name: "Kotlin",
                message: ""
            },
            {
                path: "icon-golang.png",
                name: "Go",
                message: ""
            },
        ],
    },
    methods: {
        openFullScreen() {
            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            
            setTimeout(() => {
                loading.close();
                this.styleVisibility = {
                    visibility: 'visible'
                }
            }, 1500);
        },
        switchIsSmartPhone() {
            this.isSmartPhone = window.innerHeight > window.innerWidth
        }
    },
    mounted() {
        this.openFullScreen()
        window.addEventListener('resize', this.switchIsSmartPhone)
    }
})