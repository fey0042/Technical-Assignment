import { expect } from "chai";
import supertest from "supertest";
const request = supertest('https://api.tmsandbox.co.nz/v1/Categories/6328/Details.json?catalogue=false');

describe('Technical Assignment', () => {
    it('Name = "Badges"', (done) => {
        request.get('/Name')
        .end((err, res) => {
            expect(res.body.Name).to.be.eq('Badges');
            done();
        })
    })
    it('CanRelist = true', (done) => {
        request.get('/CanRelist')
        .end((err, res) => {
            expect(res.body.CanRelist).to.be.true;
            done();
        })
    })
    it('The Promotions element with Name = "Feature" has a Description that contains the text "Better position in category"', (done) => {
        request.get('/Promotions')
        .end((err, res) => {
            expect(res.body.Promotions[2].Description).to.be.eq('Better position in category');
            done();
        })
    })
})