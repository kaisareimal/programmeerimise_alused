        // Comment elloello govna
        console.log('Hello World')

        //VARIABLES
        let name = 'Mosh'
        console.log(name)

        //Name cannot be a reserved keyword
        //Name should be meaningful
        //Can't start with a number (1name)
        //Cannot contain a space or a hyphen (-)
        //Case sensitive//

        let firstName = 'Mosh'
        let lastName = 'Hamedani'

        //Last value given is the one logged
        //let interestRate = 0.3;
        //interestRate = 1;
        //console.log(interestRate);

        const interestRate = 0.3
        //interestRate = 1;
        console.log(interestRate)

        //By default use const, let only when you KNOW you need to change the value at some point

        let name2 = 'Mosh' //String literal
        let age = 30 //Number literal
        let isApproved = true //Boolean literal can be true or false
        let firstName2 //undefined
        let selectedColor = null //explicitly make the selection empty, clear the value of a variable

        //reference types

        //giving properties to an object
        let person = {
            name: 'Kaisa', 
            age:29
        }

        //dot notation (cleaner and easier)
        person.name = 'Jeebus'

        //bracket notation
        let selection = 'name'
        person[selection] = 'Hiibahoobahee'

        console.log(person.name)

        //array
        let selectedColors = ['red', 'blue']
        selectedColors[2] = 245
        console.log(selectedColors.length)

        //Function (is preforming a task)
        //name is a parameter
        function greet(name4, lastName4) {
            console.log('Heljouu ' + name4 + ' ' + lastName4)
        }
        //What you give to the function is an argument
        greet('Blobby', 'Kliibo')


        //calculating value
        function square(number) {
            return number * number
        }

        console.log(square(2))

