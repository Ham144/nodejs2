import supertest from "supertest";
import web from "../web.mjs"

describe('testing web', () => {
    it('should be wokring fine', () => {
        supertest(web)
            .get("/")
            .expect(200)
    });

});
