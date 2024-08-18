import inquirer from 'inquirer';
import { setTimeout } from 'timers/promises';
// Function to start the countdown timer
async function startCountdown(seconds) {
    for (let i = seconds; i >= 0; i--) {
        console.clear(); // Clear the console for each new countdown step
        console.log(`Time left: ${i}s`);
        await setTimeout(1000); // Wait for 1 second
    }
    console.log("Time's up!");
}
// Function to prompt the user for input
async function promptUser() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'seconds',
            message: 'Enter the countdown time in seconds:',
            validate(value) {
                const intValue = parseInt(value, 10);
                if (isNaN(intValue) || intValue <= 0) {
                    return 'Please enter a positive number';
                }
                return true;
            },
        },
    ]);
    const seconds = parseInt(answers.seconds, 10);
    await startCountdown(seconds);
}
// Start the CLI application
promptUser();
