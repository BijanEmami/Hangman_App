'use strict'
class Hangman {
    constructor (word, guessNum) {
        this.word = word.toLowerCase().split('')
        this.guessNum = guessNum
        this.guessLetter = []
        this.status = 'Playing'
    }
    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessLetter.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })

        return puzzle
    }
    makeGuess (userGuess) {
        userGuess = userGuess.toLowerCase()
        const isUnique = !this.guessLetter.includes(userGuess)
        const isBadGuess = !this.word.includes(userGuess)
        
        if (this.status === 'Playing') {
    
            if ( isUnique ) {
                this.guessLetter.push(userGuess)
            }
            
            if ( isUnique && isBadGuess) {
                this.guessNum--
            } 
        }
    
        this.statusProperty()
    }
    statusProperty() {
            let finished = true
        this.word.forEach((letter) => {
            if (this.guessLetter.includes(letter) || letter === ' ') {

            } else {
                finished = false
            }
        })

        if (this.guessNum === 0) {
            return this.status = 'Failed'
        } else if (finished) {
            return this.status = 'Finished!'
        } else {
            return this.status = 'Playing'
        }
    }
    get statusText () {
        
        if (this.status === 'Playing') {
            return  `${this.status} -> Guesses left: ${this.guessNum}`
        } else if (this.status === 'Failed') {
            return `${this.status} -> Nice try! The word was "${this.word.join('')}"`
        } else {
            return `Finished! -> Great work! You guessed the word!`
        }
    }
}





 