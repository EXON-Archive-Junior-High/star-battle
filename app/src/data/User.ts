export default class User {
    stars?: number
    followers?: number

    constructor(stars?: number, followers?: number) {
        this.stars = stars
        this.followers = followers
    }
}