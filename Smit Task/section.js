
    function isPalindrome(str) {
        
        str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        
        
        if (str.length <= 1) {
            return true;
        }
        
      
        if (str[0] !== str[str.length - 1]) {
            return false;
        }
        
       
        return isPalindrome(str.substring(1, str.length - 1));
    }
    


     function checkPalindrome() {
        const inputString = document.getElementById('inputString').value;
        const resultDiv = document.getElementById('result');
        
        if (inputString.trim() === '') {
            resultDiv.innerText = 'Please enter a string.';
            return;
        }
        
        if (isPalindrome(inputString)) {
            resultDiv.innerText = 'The string is a palindrome.';
        } else {
            resultDiv.innerText = 'The string is not a palindrome.';
        }
    }
    

    function findMinMax() {
        const numbersInput = document.getElementById('numbers').value;
        const resultDiv = document.getElementById('result2');
        
        // Convert input string to an array of numbers
        const numbersArray = numbersInput.split(',').map(Number);
        
        // Check if the input is valid
        if (numbersArray.some(isNaN)) {
            resultDiv.innerText = 'Please enter valid numbers separated by commas.';
            return;
        }
        
        // Check if the array is empty
        if (numbersArray.length === 0) {
            resultDiv.innerText = 'Array is empty';
            return;
        }
        
        // Find minimum and maximum numbers
        let min = numbersArray[0];
        let max = numbersArray[0];
        
        for (let i = 1; i < numbersArray.length; i++) {
            if (numbersArray[i] < min) {
                min = numbersArray[i];
            }
            if (numbersArray[i] > max) {
                max = numbersArray[i];
            }
        }
        
        // Display the result
        resultDiv.innerHTML = `Minimum: ${min}<br>Maximum: ${max}`;
    }




    function findMissingNumber() {
        const numbersInput = document.getElementById('numbers3').value;
        const resultDiv = document.getElementById('result3');
        
        // Convert input string to an array of numbers
        const numbersArray = numbersInput.split(',').map(Number);
        
        // Check if the input is valid
        if (numbersArray.some(isNaN)) {
            resultDiv.innerText = 'Please enter valid numbers separated by commas.';
            return;
        }
        
        // Sort the array in ascending order
        numbersArray.sort((a, b) => a - b);
        
        // Find the missing number
        let missingNumber = "No missing number found";
        for (let i = 0; i < numbersArray.length - 1; i++) {
            if (numbersArray[i + 1] - numbersArray[i] !== 1) {
                missingNumber = numbersArray[i] + 1;
                break;
            }
        }
        
        // Display the result
        resultDiv.innerText = `Missing number: ${missingNumber}`;
    }