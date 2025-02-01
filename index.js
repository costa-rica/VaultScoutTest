require("dotenv").config(); // Load environment variables

const arrayPrefix = ["eth_", "arb_", "bsc_", "matic_", "op_", "sepolia_"];

console.log("Your API key is:", process.env.API_KEY_KILN);

async function callVault() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json; charset=utf-8",
      authorization: `Bearer ${process.env.API_KEY_KILN}`,
    },
  };

  for (let elem of arrayPrefix) {
    try {
      const response = await fetch(
        `https://api.kiln.fi/v1/defi/stakes?vaults=${elem}0xdea01fc5289af2c440ca65582e3c44767c0fcf08`,
        options
      );
      const data = await response.json();
      console.log(`${elem} response:`, data);
    } catch (error) {
      console.error(`Error fetching ${elem}:`, error);
    }
  }
}

callVault();
