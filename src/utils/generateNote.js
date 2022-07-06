import { showFormattedDate } from "."

const generateId = new Date()

export const generateNote = (title, body) => {
    return {
        id: +generateId,
        title,
        body,
        createdAt: showFormattedDate(new Date()),
        archived: false
    }
}