class IncorrectEmailError extends Error {
    constructor() {
        super('Email incorrect');
    }
}

export { IncorrectEmailError }