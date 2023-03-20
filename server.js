const app = require('./app');
const connectDatabase = require('./config/database');
const PORT = process.env.PORT || 3000;

connectDatabase();

const server = app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});