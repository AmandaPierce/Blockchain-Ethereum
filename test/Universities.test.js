const UniversityDegreeAuthenticator = artifacts.require("UniversityDegreeAuthenticator");
//const University = artifacts.require("University");
const Companies = artifacts.require("Companies");

require('chai')
.use(require('chai-as-promised'))
.should()

contract("UniversityDegreeAuthenticator", accounts => {
    let universityAuthInstance;

    before(async () => {
        universityAuthInstance = await UniversityDegreeAuthenticator.deployed();
    });

    describe("deployment" , async () => {

        it("should deploy", async () => {
            const address = await universityAuthInstance.address;
            assert.notEqual(address, "");
            assert.notEqual(address, 0x0);
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);
          });

        it("Should get the currentUniversity", async () => {
            const name = await universityAuthInstance.getName({from:"0xB71075dd72b94C65a69235A511B69Af30161272C"});
            assert.equal(name, "Stellenbosch University");
        });

        it("should return university", async() => {
            const result = await universityAuthInstance.isRegisteredUser({from:"0xB71075dd72b94C65a69235A511B69Af30161272C"});
            assert.equal(result,"university");
            const name = await universityAuthInstance.getName({from:"0xB71075dd72b94C65a69235A511B69Af30161272C"});
            assert.equal(name, "Stellenbosch University");
        });

        it("should return student", async() => {
            const result = await universityAuthInstance.isRegisteredUser({from:"0x7A6aE73a9A9a84fb315ffdC46f28f48446833658"});
            assert.equal(result,"student");
            const name = await universityAuthInstance.getName({from:"0x7A6aE73a9A9a84fb315ffdC46f28f48446833658"});
            assert.equal(name, "19026672: Amanda Pierce");
        });

        it("Should get the student information", async () => {
            const studentInfo = await universityAuthInstance.getStudentInformation({from:"0x7A6aE73a9A9a84fb315ffdC46f28f48446833658"});
            assert.equal(studentInfo.name, "Amanda");
        });

        it("should create a new request", async() => {
            const result = await universityAuthInstance.requestDocument("19018150", "Computer Science", "BA", "informatics");
            const totalRequests = await universityAuthInstance.getTotalRequests();
            assert.equal(totalRequests,1);
        });

        it("should handle a request", async() => {
            const totalRequests = await universityAuthInstance.getTotalRequests();
            assert.equal(totalRequests,1);

            await universityAuthInstance.handleRequest("19018150", "123Haha", "19018150BAMultimedia");
            const totalsupply2 = await universityAuthInstance.getTotalDegrees();
            assert.equal(totalsupply2, 1);
        });

        it("should get the hash of document", async() => {
            const totalRequests = await universityAuthInstance.getTotalRequests();
            assert.equal(totalRequests,0);
    
            const hash = await universityAuthInstance.getDegreeHash("Computer Science", "BA", "informatics");
            assert.equal(hash, "123Haha");
    
        });
      
    });

  });

contract("CompanyVerifier", accounts => {
    let ADVInstance;

    before(async () => {
        ADVInstance = await Companies.deployed();
    });

    describe("deployment" , async () => {

        it("should deploy", async () => {
            const address = await ADVInstance.address;
            assert.notEqual(address, "");
            assert.notEqual(address, 0x0);
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);
          });
        });

        it("should add a company", async () => {
            await ADVInstance.addCompany("Amazon", accounts[3]);
        });
    });