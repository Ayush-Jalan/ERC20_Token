const main = async () => {
    const tokenContractFactory = await hre.ethers.getContractFactory('Wood');
    const tokenContract = await tokenContractFactory.deploy(100000);
    await tokenContract.deployed();
    console.log("Contract deployed to:", tokenContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();