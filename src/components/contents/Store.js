// import React, {Component} from 'react';
import {Component} from 'react';

class Store extends Component{
    constructor(){
        super();

        this.data = {
            education : [
                {
                    'degree':'B.Eng. Bachelor of Engineering.',
                    'detail': '2nd Class Honors, Upper Division in Electronics and Computer Engineering.',
                    'institution':'FEDERAL UNIVERSITY OF TECHNOLOGY, OWERRI.',
                    'year': '2012 -2017'
                },
                {
                    'degree':'WAEC/SSCE',
                    'detail': 'Senior School Certificate Exams - Distinctions in WAEC and NECO Exams.',
                    'institution':'SCIENCE AND ARTS SPECIALIST COLLEGE.',
                    'year': '2005 - 2011'
                },
                {
                    'degree':'FSLC',
                    'detail': 'Senior School Certificate Exams - Distinctions in WAEC and NECO Exams.',
                    'institution':`ARMY CHILDRENS' SCHOOL`,
                    'year': '1994 - 2005'
                }
            ],

            experience: [
                {
                    'organisation' : 'September 2018 – Present: Banodex International Limited',
                    'position': 'Software Developer',
                    'task': [
                        'Development and deployment of Customer Relational Management system',
                        'Built a fully functional web site. Fibrehub.com.ng',
                        'Maintenance, development and deployment of new features on Banodex and Fibrehub platforms',
                        'Maintenance and Documentation PHP/LARAVEL base API using Postman, also deployment of Node/Express API.',
                        'Ensuring Application security as well as rapid deployment of bug fix',
                        'Mentorship of interns on application development best practices.'
                    ]   
                },

                {
                    'organisation' : 'September 2017 – 2018: Science and Arts Specialist College',
                    'position': 'Computer Science Instructor',
                    'task': [
                        'Assisted students in connecting computer science, math and technological principles to every day life.',
                        'Provided student progress feedback on a regular basis.',
                        'Practical deployment and maintenance of Bus and Star network topology in school studio'
                    ]
                }
            ],
            project: [
                { 
                    'heading':'FibreHub Web Site', 
                    'description':{
                        'about':`The Fibrehub web project was built with the intent of putting the 
                        organisation in the global industrial market. This two page site simply serve as a front
                        for the companies advert and resgitration for prospective customers`,
                        'goal':'Advertise the Company and Recieve new customers',
                        'technology':'HTML5, CSS3, JavaScript and PHP',
                        'time':'2 Weeks'
                    },
                    'link':'https://www.fibrehub.com.ng'
                },
            
                { 
                    'heading':'Flight Booking', 
                    'description':{
                        'about':`The Touch Core website is a platform for air travel ticket booking, Its two pages website.
                        On the index page customers search for flights by putting in their departure city, destinations city, date of 
                        Departure and/or date of arrival, and also specifying the number of passengers if not one. Then validtion of customer input parameters is carried out at 
                        the backend and if the data is valid, and flight(s) is/are avaliable, a list of flight(s) with travel 
                        time and price is displayed. In a case where input is invalid or flight is not avaliable, the customer is 
                        also notified.`,
                        'goal':'Allow Remote flight bookings',
                        'technology':'HTML5, CSS3, JavaScript, PHP(Laravel) and an API',
                        'time':'5days'
                    },
                    'link':'https://www.flight.intoajohnson.com'
                },
            
                { 
                    'heading':'Customer Relationship Management', 
                    'description':{
                        'about':`Fibrehub CRM software is a multiple page application for management of prospects, customers and staff activities.
                        Built with authentication system that allow only certain members of staff to access customer base and greater 
                        access to management staff to access other staff record and customers too. 
                        It uses data analysis about customers' history with a company to improve business relationships with customers, 
                        specifically focusing on customer retention and ultimately driving sales growth.`,
                        'goal':"To manage a company's interaction with current and potential customers.",
                        'technology':'HTML5, CSS3, JavaScript, JQuery, AJAX, PHP(OOP)',
                        'time':'2 months'
                    },
                    'link':'https://www.fibrehub.com.ng/tracking'
                }
            ],

            skills:[
                {
                   'title': 'Structure',
                   'description' : 'HTML5, XML',
                   'strength': '80',
                   'experience': '3 years'
                },

                {
                    'title' :'presentation',
                    'description': 'CSS3, Bootstrap',
                    'strength': '65',
                    'experience': '3 years'
                },

                {
                    'title' : 'javascript',
                    'description': 'Vallina JavaScript, JQuery, JSON, Ajax,  React, Redux',
                    'strength': '70',
                    'experience': '1 year 6months'
                },

                {
                    'title':'PHP',
                    'description':'PHP/Laravel',
                    'strength': '75',
                    'experience': '2 years'
                },

                {
                    'title':'Databases/ORM',
                    'description':'MySQL, Postgresql, MonogoDB, Eloquent',
                    'strength': '80',
                    'experience': '2 years'

                }
            ]
            
        }

    }   
}

const myData = new Store(); 
export default myData;