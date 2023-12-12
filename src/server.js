const express = require('express');
const cors = require('cors');



const app = express();
const port = 3001; // Change this to a different port, for example, 3001

app.use(cors());
app.use(express.json());

app.post('/api/register', async (req, res) => {
    try {
        // Assuming req.body contains the form data
        const formData = req.body;

        // Your code to handle form data goes here...

        res.status(200).json({ message: 'Form data saved successfully' });
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
