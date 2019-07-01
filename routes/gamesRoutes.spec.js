const request = require('supertest');

const db = require('../data/dummyData.js');

const server = require('../api/server');


describe('Games API', () => {

    describe('/games /GET', () => {

        it('returns a status 200', async () => {
            const res = await request(server).get('/games')

            expect(res.status).toBe(200);
        })

        it('should return a list of games', async () => {
            const expected = db
            const res = await request(server).get('/games')

            expect(res.body).toEqual(expected)
        })

        it('should return list of games in an array', async () => {
            const res = await request(server).get('/games')

            expect(Array.isArray(res.body)).toBeTruthy();
        })
    })

    describe('/games /POST', () => {
        it('returns status 422 if required fields are missing', async () => {
            const newGame = {title: "Final Fantasy XIV"}
            const res = await request(server)
        })
    })
})