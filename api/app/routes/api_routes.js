var ObjectID = require('mongodb').ObjectID;


module.exports = function(app, db) {
    app.get('/login/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id) };
        db.collection('users').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'error occured' });
            } else {
                res.send(item);
            }
        });
    });

    app.delete('/login/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id) };
        db.collection('users').remove(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'error occured' });
            } else {
                res.send('Note deleted!');
            }
        });
    });

    app.put('/login/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id) };
        const user = { text: req.body.body, title: req.body.title };
        db.collection('users').update(details, user, (err, item) => {
            if (err) {
                res.send({ 'error': 'error occured' });
            } else {
                res.send(item);
            }
        });
    });

    app.post('/login', (req, res) => {
        const user = {
            text: req.body.body, 
            title: [
                { 'first' : req.body.titlee },
                { 'second' : req.body.titlee2 }
            ]
        };
        db.collection('users').insert(user, (err, result) => {
            if (err) {
                res.send({ 'error': 'error occured' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    app.post('/attendance', (req, res) => {
        const attData = {
            '_2' : {
                'CSE' : {
                    'A' : {
                        'DBMS' : {
                            'ldskf234' : {
                                'attendance' : {
                                    'enrollment_no' : {
                                        '03320802716' : '21',
                                        '04920802716' : '15'
                                    },
                                    'date' : '29/01/2018'
                                }
                            },
                            'ldskf244' : {
                                'attendance' : {
                                    'enrollment_no' : {
                                        '03320802716' : '22',
                                        '04920802716' : '16'
                                    },
                                    'date' : '30/01/2018'
                                }
                            },
                            'total':'25',
                            'last':'ldskf244'
                        },
                        'CS' : {
                            'ldskf234' : {
                                'attendance' : {
                                    'enrollment_no' : {
                                        '03320802716' : '21',
                                        '04920802716' : '19'
                                    },
                                    'date' : '29/01/2018'
                                }
                            },
                            'ldskf244' : {
                                'attendance' : {
                                    'enrollment_no' : {
                                        '03320802716' : '22',
                                        '04920802716' : '20'
                                    },
                                    'date' : '30/01/2018'
                                }
                            },
                            'total':'27',
                            'last':'ldskf244'
                        },
                        'COA' : {
                            'ldskf234' : {
                                'attendance' : {
                                    'enrollment_no' : {
                                        '03320802716' : '21',
                                        '04920802716' : '27'
                                    },
                                    'date' : '29/01/2018'
                                }
                            },
                            'ldskf244' : {
                                'attendance' : {
                                    'enrollment_no' : {
                                        '03320802716' : '22',
                                        '04920802716' : '28'
                                    },
                                    'date' : '30/01/2018'
                                }
                            },
                            'total':'30',
                            'last':'ldskf244'
                        }
                    }
                }
            },
        };
        db.collection('attendance').insert(attData, (err, result) => {
            if (err) {
                res.send({ 'error': 'error occured' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    app.post('/addtimetable', (req, res) => {
        const timeTableData = {
            '_2' : {
                'CSE' : {
                    'A' : {
                        'MONDAY' : {
                            '_1' : 'Theory of Computation',
                            '_2' : 'Communication System',
                            '_3' : 'Database Management System',
                            '_4' : 'Communication System LAB',
                            '_5' : 'Communication System LAB',
                            '_6' : 'Applied Mathematics',
                            '_7' : 'LIBRARY'
                        },
                        'TUESDAY' : {
                            '_1' : 'Communication System',
                            '_2' : 'Applied Mathematics',
                            '_3' : 'Database Management System',
                            '_4' : 'Theory of Computation',
                            '_5' : 'Computer Organisation and Architecture',
                            '_6' : 'Database Management System LAB',
                            '_7' : 'Database Management System LAB'
                        },
                        'WEDNESDAY' : {
                            '_1' : 'Applied Mathematics',
                            '_2' : 'Computer Organisation and Architecture',
                            '_3' : 'Database Management System',
                            '_4' : 'Object Oriented Programming LAB',
                            '_5' : 'Object Oriented Programming LAB',
                            '_6' : 'Communication System',
                            '_7' : 'Object Oriented Programming'
                        },
                        'THURSDAY' : {
                            '_1' : 'Computer Organisation and Architecture',
                            '_2' : 'Theory of Computation',
                            '_3' : 'Database Management System',
                            '_4' : 'Object Oriented Programming',
                            '_5' : 'Communication System',
                            '_6' : 'Applied Mathematics LAB',
                            '_7' : 'Applied Mathematics LAB'
                        },
                        'FRIDAY' : {
                            '_1' : 'Computer Organisation and Architecture LAB',
                            '_2' : 'Computer Organisation and Architecture LAB',
                            '_3' : 'Computer Organisation and Architecture',
                            '_4' : 'Theory of Computation',
                            '_5' : 'Applied Mathematics',
                            '_6' : 'Object Oriented Programming',
                            '_7' : 'MENTORING'
                        }
                    }
                }
            }
        };
        db.collection('timetable').insert(timeTableData, (err, result) => {
            if (err) {
                res.send({ 'error': 'error occured' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    app.post('/student', (req, res) => {
        const stuData = {
            '2' : {
                'CSE' : {
                    'A' : {
                        'G1' : {
                            '03320802716' : {
                                'roll_no'  : '33',
                                'name' : 'Another Name',
                                'email' : 'xyz@gmail.com',
                                'id' : '568'
                            }
                        },
                        'G2' : {
                            '04920802716' : {
                                'roll_no'  : '49',
                                'name' : 'Nikhil Thakur',
                                'email' : 'abc@gmail.com',
                                'id' : '123'
                            }
                        }
                    }
                }
            }
        }
        db.collection('student').insert(stuData, (err, result) => {
            if (err) {
                res.send({ 'error': 'error occured' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });


    app.post('/logindata', (req, res) => {
        const studentLogin = {
            '03320802716' : {
                'password' : '454545'
            },
            '04920802716' : {
                'password' : '12345'
            }
        }
        db.collection('studentlogin').insert(studentLogin, (err, result) => {
            if (err) {
                res.send({ 'error': 'error occured' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    app.get('/studentatt/:year/:branch', (req, res) => {
        const year = req.params.year;
        const branch = req.params.branch;
        // const details = {year, branch};
        const details = {}
        db.collection('attendance').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'error occured' });
            } else {
                res.send(item);
            }
        });
    });  

    app.get('/timetable/:year/:branch', (req, res) => {
        const year = req.params.year;
        const branch = req.params.branch;
        // const details = {year, branch};
        const details = {}
        db.collection('timetable').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'error occured' });
            } else {
                res.send(item);
            }
        });
    });    
}