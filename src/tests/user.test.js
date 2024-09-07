const prisma = require("../app/database.js")
const supertest = require("supertest");
const web = require("../app/web.js")



describe('user', () => {
    //menhapus semua user yang terjadi terlebih dulu sebelum testing
    beforeEach(async () => {
        await prisma.user.deleteMany({
            where: {
                username: "yafizham"
            }
        })
    })

    it('Should register new user named yafizham', async () => {
        const result = await supertest(web)
            .post("/register")
            .send({
                username: "yafizham",
                name: "ham",
                password: "password",
            })

        expect(result.status).toBe(200)
        expect(result.body.data.username).toBe("yafizham")
        expect(result.body.data.name).toBe("ham")
        expect(result.body.data.token).toBeUndefined()
    });


});
