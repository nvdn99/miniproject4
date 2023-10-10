const fs = require('fs');

// Creates a text file with the intent of producing a simple Welcome Car Enthusiasts  text response 
fs.writeFile('example.txt', 'Welcome Car Enthusiasts !', 'utf8', (err) => {
    if (err) {
        console.error('Error creating the file:', err);
        return;
    }
    console.log('File created successfully.');

    // Reads the previous file/ line of code, thus producing the Welcome Car Enthusiasts  text 
    fs.readFile('example.txt', 'utf8', (readErr, data) => {
        if (readErr) {
            console.error('Error reading the file:', readErr);
            return;
        }
        console.log('File content:', data);

        // Deletes the previous Welcome Car Enthusiasts text file 
        fs.unlink('example.txt', (deleteErr) => {
            if (deleteErr) {
                console.error('Error deleting the file:', deleteErr);
                return;
            }
            console.log('File deleted successfully.');
        });
    });
});