const express = require("express");
const router = express.Router();
const pool = require("../db/db"); // MySQL connection pool

// ======================
// 🧑 Student Table Routes
// ======================

/**
 * GET /api/v1/studentportal
 * Fetch all students from the student_table.
 */
router.get("/api/v1/studentportal", (req, res) => {
    const sql = "SELECT * FROM student_table";
    pool.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});

/**
 * POST /api/v1/studentportal
 * Add a new student to the student_table.
 * Expects: name, program, batch, roll_number, date_of_birth, department
 */
router.post("/api/v1/studentportal", (req, res) => {
    const sql = `
        INSERT INTO student_table
        (name, program, batch, roll_number, date_of_birth, department)
        VALUES (?, ?, ?, ?, ?, ?)
    `;
    const values = [
        req.body.name,
        req.body.program,
        req.body.batch,
        req.body.roll_number,
        req.body.date_of_birth,
        req.body.department
    ];

    pool.query(sql, values, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});

// =============================
// 📚 Library Zone Table Routes
// =============================

/**
 * GET /api/v1/libraryzoneportal
 * Fetch all records from the library_zone_table.
 */
router.get("/api/v1/libraryzoneportal", (req, res) => {
    const sql = "SELECT * FROM library_zone_table";
    pool.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});

/**
 * POST /api/v1/libraryzoneportal
 * Log an entry or exit record in the library_zone_table.
 * Expects: name, roll_number, program, department, time_in, time_out, purpose, status
 */
router.post("/api/v1/libraryzoneportal", (req, res) => {
    const sql = `
        INSERT INTO library_zone_table
        (name, roll_number, program, department, time_in, time_out, purpose, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
        req.body.name,
        req.body.roll_number,
        req.body.program,
        req.body.department,
        req.body.time_in,
        req.body.time_out,
        req.body.purpose,
        req.body.status
    ];

    pool.query(sql, values, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});

module.exports = router;
