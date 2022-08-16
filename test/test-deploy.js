const {ethers} = require("hardhat")
const {expect, assert} = require("chai")

//describe("SimpleStorage", () => {}) same
describe("SimpleStorage", function () {
    // let simpleStorageFactory
    // let simpleStorage
    let simpleStorageFactory, simpleStorage //outside of the beforeEach scope
    beforeEach(async function () {//deploy our simpleStorage contract to interact with it
     simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
     simpleStorage = await simpleStorageFactory.deploy()
})
    //what we want this specific test to do and then describe the code that will do that
    it("Should start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        //import both of these from package "chai"
        //assert
        //expect
        assert.equal(currentValue.toString(), expectedValue)
        expect(currentValue.toString()).to.equal(expectedValue)
    })
    it("Should update when we call store", async function () {
        const expectedValue = "7"
        const transactionResponse = await simpleStorage.store(expectedValue)
        await transactionResponse.wait(1)

        const currentValue = await simpleStorage.retrieve()
        assert.equal(currentValue.toString(), expectedValue)
    })
})