// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
    name: {
        firstname: "Vladislav",
        lastname: "Angelov",
    },
    position: 'Junior Fullstack JS Developer',
    salary: '600$ в місяць',
    address: 'Ukraine, Odesa',
};

var footer = {
    social: {
        email: {
            text: 'enotpoloskynn@gmail.com',
            href: 'mailto:enotpoloskynn@gmail.com',
        },
        phone: {
            text: '+380737718116',
            href: 'tel:+380737718116',
        },
    linkedin: {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/dmytro-test',
        },
    },
};

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
    res.render('summary', {
        // ↙ сюди вводимо JSON дані

        page: {
            title: 'Resume | Summary',
        },

        header,

        main: {
            summary: {
                title:'Summary',
                text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
                work on a new project I learn the domain and try to understand the idea of the project. Good team
                player, every colleague is a friend to me.`,
            },
        
            experience: {
            title: 'Other experience',
            text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
                tournament position, goals etc), analyzing by simple mathematics models and preparing probability
                for such events like: money line - first win / draw / second win, totals etc.`,
            },
        },
        
        footer,

    })
 
})

// ================================================================


//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
    res.render('skills', {
    // ↙ сюди вводимо JSON дані

        page: {
            title: 'Resume | Skills',
        },

        header,

        main: {
            skills: [
                {
                    name: 'HTML',
                    point: 10,
                    isTop: true,
                },
                {
                    name: 'Handlebars',
                    point: 8,
                    isTop: true,
                },
                {
                    name: 'VS Code & NPM',
                    point: 10,
                    isTop: false,
                },
                {
                    name: 'Git & Terminal',
                    point: 9,
                },
                {
                    name: 'React.js',
                    point: 0,
                },
                {
                    name: 'PHP',
                    point: null,
                },
            ],
            hobbies: [
                {
                    name: 'Photo',
                    isMain: true,
                },
                {
                    name: 'Rollerblading',
                    isMain: true,
                },
                {
                    name: 'GYM',
                    isMain: false,
                },
            ],
        },
        
        footer,

    })

})

// ================================================================


//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('education', {
        // ↙ сюди вводимо JSON дані
  
        page: {
          title: 'Resume | Education',
        },
  
        header,
  
        main: {
            education: [
                {
                    name: 'ОЗОШ №38',
                    isEnd: true,
                },
                {
                    name: 'ОАДК ОНПУ',
                    isEnd: true,
                },
                {
                    name: 'ОНМУ',
                    isEnd: false,
                },
                {
                    name: 'IT Brains',
                    isEnd: false,
                },
            ],
            certificates: [
                {
                    name: 'License',
                    id: 322223,
                },
                {
                    name: 'Passport',
                    id: 13521,
                },
                {
                    name: 'Cod',
                    id: 288872,
                },
            ],
        },
        
        footer,
    
    })
    
})


// ================================================================


//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('work', {
        // ↙ сюди вводимо JSON дані

        layout: 'big',
  
        page: {
          title: 'Resume | Work',
        },
  
        header,
  
        main: {
            works: [
                {
                    position: 'Junior Fullstack Developer',
                    company: {
                        name: 'IT Brains',
                        url: 'https://it-brains.com.ua',
                    },
                    duration: {
                        from: '10.12.2022',
                        to: null,
                    },
                    projectAmount: 3,

                    projects: [
                        {
                            name: 'Resume',
                            url: 'https://it-brains.com.ua',
                            about: 'Lorem in what tam i dont remember',
                            stack: [
                                {
                                    name: 'React.js',
                                },
                                {
                                    name: 'HTML / CSS',
                                },
                                {
                                    name: 'Node.js',
                                },
                            ],
                            awards: [
                                {
                                    name: 'Second text about my awards'
                                },
                                {
                                    name: 'Here ne budet texta'
                                },
                            ],

                            stackAmount: 3,
                            awardAmount: 5,
                        },
                    ],
                },
            ],
        },
        
        footer,
    
    })
    
})

router.get('/person', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('person', {
      layout: 'person',
      title: 'person',
      
      person: {
        name: 'Emma Johnson',
        age: 32,
        gender: 'Female',
        address: {
          street: '123 Main St',
          city: 'New York',
          state: 'NY',
          zip: '10001',
          country: 'USA',
        },
        education: [
          {
            degree: 'Bachelor of Science',
            major: 'Computer Science',
            university:
              'Massachusetts Institute of Technology',
            graduationYear: 2012,
          },
        ],
        workExperience: [
          {
            company: 'Google',
            title: 'Software Engineer',
            startDate: '2012-06-01',
            endDate: '2016-12-31',
            responsibilities: [
              'Developed new features for Google Maps',
              'Worked on improving search algorithms',
            ],
            year_founded: 1990,
            industry: 'Technology',
            employees: [
              {
                name: 'John Smith',
                position: 'CEO',
                department: 'Executive',
                projects: [
                  {
                    name: 'Project Alpha',
                    description:
                      'Developing new software platform',
                    status: 'In Progress',
                    teams: [
                      {
                        team_name: 'Awesome Team',
                        team_leader: {
                          name: 'John Smith',
                          title: 'Team Leader',
                          email: 'john.smith@example.com',
                        },
                        team_members: [
                          {
                            name: 'Alice Johnson',
                            title: 'Software Engineer',
                            email:
                              'alice.johnson@example.com',
                            skills: ['Java', 'Python', 'SQL'],
                            projects: [
                              {
                                name: 'Project A',
                                description:
                                  'Lorem ipsum dolor sit amet',
                                technologies: [
                                  'Java',
                                  'Spring Framework',
                                ],
                                team_members: [
                                  {
                                    name: 'Bob Lee',
                                    title:
                                      'Software Engineer',
                                  },
                                  {
                                    name: 'Cindy Chen',
                                    title: 'UI Designer',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    })
  })
  
  // ================================================================
// Підключаємо роутер до бек-енду
module.exports = router
