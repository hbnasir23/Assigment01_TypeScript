// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function makeshirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`You've ordered a ${size} shirt with the message: "${message}".`);
}

makeshirt();

makeshirt("medium");

makeshirt("small", "PYTHON IS THE BEST!");
