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

    app.get('/timetable/:year/:branch', (req, res) => {
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
}