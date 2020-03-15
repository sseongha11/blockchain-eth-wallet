const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);
  const tokenMock = await DaiTokenMock.deployed()
  // Mint 1,00 Dai tokens for the deployer
  await tokenMock.mint(
    '0x46B20b73ADD6c6178c65D8EF894Ea558Cb8E1c3b',
    '1000000000000000000000'
  )
};
