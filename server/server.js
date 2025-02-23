const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Настройки подключения к базе данных
const pool = new Pool({
    user: 'your_username',
    host: 'localhost',
    database: 'your_database',
    password: 'your_password',
    port: 5432,
});

// Middleware для парсинга JSON
app.use(bodyParser.json());

// Регистрация пользователя
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    try {
        // Проверка, существует ли пользователь
        const userCheckQuery = 'SELECT * FROM users WHERE username = $1';
        const userCheckResult = await pool.query(userCheckQuery, [username]);

        if (userCheckResult.rows.length > 0) {
            return res.status(400).json({ error: 'User  already exists' });
        }

        // Вставка нового пользователя
        const insertQuery = 'INSERT INTO users (username, password) VALUES ($1, $2)';
        await pool.query(insertQuery, [username, password]); // В реальном приложении пароли должны быть захешированы

        return res.status(201).json({ message: 'User  registered successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});