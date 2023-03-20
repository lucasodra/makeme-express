const app = require('./app');
const connectDatabase = require('./config/database');
const PORT = process.env.PORT || 3000;

console.log("server.js before");
connectDatabase();

const server = app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});
console.log("server.js after");