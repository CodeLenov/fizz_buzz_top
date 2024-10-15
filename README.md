# fizz_buzz_top
Fizz Buzz | JavaScript, CSS, HTML | Front End Foundations (JavaScript, CSS, HTML, Git) | 02.1/05 | The Odin Project | 2024

0. Let’s solve Fizz Buzz - https://en.wikipedia.org/wiki/Fizz_buzz
	Write a program that takes a user’s input and prints the numbers from one to the number the user entered. However, for multiples of three print `Fizz` instead of the number and for the multiples of five print `Buzz`. For numbers which are multiples of both three and five print `FizzBuzz`.

1. Understanding the problem
	This is the big picture problem we will be solving. But we can always make it clearer by rewording it.
	Write a program that allows the user to enter a number, print each number between one and the number the user entered, but for numbers that divide by 3 without a remainder print `Fizz` instead. For numbers that divide by 5 without a remainder print `Buzz` and finally for numbers that divide by both 3 and 5 without a remainder print `FizzBuzz`.

2. Planning
	- Does your program have an interface? What will it look like?
	- What inputs will your program have? Will the user enter data or will you get input from somewhere else?
	- What’s the desired output?
		The desired output is a list of numbers from 1 to the number the user entered. But each number that is divisible by 3 will output `Fizz`, each number that is divisible by 5 will output `Buzz` and each number that is divisible by both 3 and 5 will output `FizzBuzz`.

3. Writing the pseudocode
	- What are the steps necessary to return the desired output?
		Here is an algorithm in pseudocode for this problem:

		```
		When a user inputs a number
		Loop from 1 to the entered number
		If the current number is divisible by 3 then print "Fizz"
		If the current number is divisible by 5 then print "Buzz"
		If the current number is divisible by 3 and 5 then print "FizzBuzz"
		Otherwise print the current number
		```

4. Dividing and conquering
	- As we can see from the algorithm we developed, the first subproblem we can solve is getting input from the user. So let’s start there and verify it works by printing the entered number.
	- With that done, let’s move on to the next subproblem: “Loop from 1 to the entered number”.
	- With that working, let’s move on to the next problem: If the current number is divisible by 3, then print `Fizz`.
		The final few subproblems should be easy to solve as the basic structure is in place and they are just different variations of the condition we’ve already got in place.
	- Let’s tackle the next one: If the current number is divisible by 5 then print `Buzz`.
	- We have one more subproblem to solve to complete the program: If the current number is divisible by 3 and 5 then print `FizzBuzz`.
	- The program is now complete!
