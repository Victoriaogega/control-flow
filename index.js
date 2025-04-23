// A user has 3 attempts to log in. Simulate failed login attempts using while. After 3, show "Account locked".

const logInAttempts = () => {
    let logInAttempts = 1;
    while (logInAttempts <= 3) {
        console.log(`login attempt ${logInAttempts}`);
        logInAttempts += 1
        if (logInAttempts > 3) { console.log("Account blocked") }
    }
}
logInAttempts()

// Users are voting on a feature. Use do...while to log each vote from an array until all votes are processed.

const countVotes = (votes) => {
    let count = 0
for(i=0; i<votes.length;i++)
    do{ 
        console.log(`Vote ${votes[i]} has been processed.`)
    count += votes[i];
    }
    while (count <votes.length );
console.log("All votes have been processed.")
};
countVotes(['yes','no','yes'])

//Loop through an array of numbers from 1–7 and use a switch to print the corresponding day name.
function dayNames(dayNumber) {
    dayNumber.map(day => {
        switch (day) {
            case 1:
                console.log("Monday")
                break;
            case 2:
                console.log("Tuesday")
                break;
            case 3:
                console.log("Wednesday")
                break;
            case 4:
                console.log("Thursday")
                break;
            case 5:
                console.log("Friday")
                break;
            case 6:
                console.log("Saturday")
                break;
            case 7:
                console.log("Sunday")
                break;
            default:
                console.log("Not a day")
                break;
        }
    })
}

dayNumber = [1, 2, 3, 4, 5, 6, 7]
dayNames(dayNumber)

//Given an array of password strings, use if...else to: log "Strong" if length >= 8, and "Weak" otherwise

const checkpassword = (password) => {
    password.map(item => {
        if (item.length >= 8) {
            console.log("Strong password.")
        }
        else { console.log("weak password, please enter another password") }
    })

}
let password = ['pass123', 'ogega123', 'boss@123']
checkpassword(password)


// You're building a multilingual site. Use a switch to show greetings based on language codes. I.e "en" → "Hello", "fr" → "Bonjour", "sw" → "Habari".
const multilingualSite = (greetings) => {
    greetings.map(item => {
        switch (item) {
            case "en":
                console.log("Hello")
                break;
            case "fr":
                console.log("Bonjour")
                break;
            case "sw":
                console.log("Habari")
                break;
            default:
                console.log("Language not understood")
                break;
        }

    })
}
let greeting = ['fr','sw','salam']
multilingualSite(greeting)


// You're building a weather dashboard. Loop through an array of temperatures and: If above 30, log "High heat alert!", else if below 15, log "Cold alert!", else, log "Normal conditions"

const weatherDashboard = (temperature) => {
    temperature.map(item => {
     if    (item > 30) {
            console.log("High heat alert!")
        }
else if (item < 15){console.log("Cold alert!")}
else {console.log("Normal conditions")}
    })
}
let temperature = [35,25,12,55]
weatherDashboard(temperature)

// Users are queued to register. Use a while loop to remove and print each name until the queue is empty.

const printNames = (names) => {
        while(names.length > 0){
            let registered = names.shift()
            console.log(`${registered} has been registered.`)
            if(names.length == 0){
                console.log("Queue is empty")
            }
        }
}
names = ['Victoria','Bosibori','Ogega']
printNames(names)




// Students retake a test until they score 50 or more. Use do...while to simulate attempts, increasing the score by 10 each time until it's >= 50.

const retakeTest = (score) => {
    let attempt = 1
  do{  console.log(`In the ${attempt}  attempt the score is ${score}`)
    score += 10 
    attempt ++
    
  } 
  while (score <= 50) 
    return score
}
score = 20
retakeTest(score)