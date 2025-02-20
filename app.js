const express = require('express');
const morgan = require('morgan')



const storeRoutes = require('./routes/storeRoutes');

const app = express();
const PORT = 3000;

app.use(morgan('dev'))
app.use(express.json());
app.use('/stores', storeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});