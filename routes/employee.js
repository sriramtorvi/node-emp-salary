const express = require('express');
const Router = express.Router();
const mysql = require('../connection');

Router.get('/greater/:sal',(req, res) => {
    let query = `select * from emp_details where salary > ${req.params.sal}`
  //  console.log(query);
    mysql.query(query, (err, rows) => {
        if(err) {
            res.status(500).json({
                error: err
            })
        } else if (rows){
            const response = {
                count: rows.length,
                employees: rows.map(row => {
                    return {
                        name: row.name,
                        email: row.email
                    }
                })
            }
            res.status(200).json(response);
        }
    })
    
});

Router.get('/less/:sal',(req, res) => {
    let query = `select * from emp_details where salary < ${req.params.sal}`
    //console.log(query);
    mysql.query(query, (err, rows) => {
        if(err) {
            res.status(500).json({
                error: err
            })
        } else if (rows){
            const response = {
                count: rows.length,
                employees: rows.map(row => {
                    return {
                        name: row.name,
                        email: row.email
                    }
                })
            }
            res.status(200).json(response);
        }
    })  
});

Router.post('/',(req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const salary = req.body.salary;
    
    const query = `select * from emp_details where email = '${email}'`;
    mysql.query(query, (err, rows) => {
        if(err) {
            res.status(500).json({
                error: err
            })
        } else if(rows.length > 0){            
            return res.status(409).json({
                message:  'User already exists'
            });
        } else {
            const insertQuery = `insert into emp_details values('${email}','${name}',${salary})`;

            mysql.query(insertQuery, (err, rows) => {
                if(err) {
                    res.status(500).json({
                        error: err
                    })
                } else if(rows) {  
                    if(rows.affectedRows === 1) {
                        res.status(201).json({
                            message: 'User added'
                        });
                    }
                }
            });
        } 
    });
});

module.exports = Router;