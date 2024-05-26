function printHello() {
    console.log('Hello');
}
setTimeout(printHello, 1000);
console.log('My First!');

function printHello1() {
    console.log('Hello!');
}
setTimeout(printHello1, 0);
function blockFor1Sec() {
    console.log('Block');
}
blockFor1Sec();
console.log('Me First');

// Initial Work.

async function postData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                name: 'Suzy',
                company: 'Amazon',
                designation: 'Devloper',
            }),
            headers: {
                'Content-type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`Error in Fetching`);
        }
        const reusult = await response.json();
        console.log(reusult);
    } catch (err) {
        console.log(err);
    }
}
postData();