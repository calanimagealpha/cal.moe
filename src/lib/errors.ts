export type ExceptionType = 'not_logged_in'

export type Exception = {
    type: ExceptionType
}

export function NotLoggedInException(): Exception {
    return {
        type: 'not_logged_in'
    }
}