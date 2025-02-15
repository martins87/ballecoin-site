import { Timeline } from "@/app/components/HowSection/Timeline";

export default function Join() {
  const data = [
    {
      title: "1. Download and Install the Phantom Wallet",
      content: (
        <div>
          <p className="text-black text-xs md:text-sm font-normal mb-4">
            Phantom is a secure wallet recommended for transactions on the Solana network. Follow these steps to set it
            up:
          </p>
          <ul className="list-disc pl-5 mb-4 text-black dark:text-black text-xs md:text-sm">
            <li>Visit the official Phantom Wallet website: phantom.app</li>
            <li>Choose the download option for your browser or mobile device (iOS or Android)</li>
            <li>Install and open Phantom</li>
            <li>Create a new wallet or import an existing one using your seed phrase (12 words)</li>
            <li>Store your seed phrase in a secure location</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2. Add SOL to Your Wallet (Optional)",
      content: (
        <div>
          <p className="text-black text-xs md:text-sm font-normal mb-4">
            Since BalleCoin is on the Solana network, you will need a small amount of SOL to cover transaction fees.
          </p>
          <ul className="list-disc pl-5 mb-4 text-black dark:text-black text-xs md:text-sm">
            <li>Click the "Deposit" button in Phantom</li>
            <li>Choose a method to add SOL (direct purchase via card or transfer from another wallet)</li>
            <li>Wait until the balance is displayed</li>
          </ul>

        </div>
      ),
    },
    {
      title: "3. Add BalleCoin to Your Wallet",      content: (
        <div>
          <p className="text-black text-xs md:text-sm font-normal mb-4">
            To view and manage BalleCoin in Phantom, follow these steps:
          </p>
          <ul className="list-disc pl-5 mb-4 text-black dark:text-black text-xs md:text-sm">
            <li>Open the Phantom Wallet and click "+ Add/Remove Token"</li>
            <li>
              Search for BalleCoin in the list or manually enter the contract (provided on the official BalleCoin page)
            </li>
            <li>Add the token to your wallet list</li>
          </ul>

        </div>
      ),
    },
    {
      title: "4. Access the Liquidity Pool on Radix",
      content: (
        <div>
          <ul className="list-disc pl-5 mb-4 text-black dark:text-black text-xs md:text-sm">
            <li>Visit the official BalleCoin liquidity pool link on Radix</li>
            <li>Connect your Phantom Wallet to Radix by clicking "Connect Wallet"</li>
            <li>Authorize the connection with your wallet</li>          </ul>
          <p className="text-black text-xs md:text-sm font-normal mb-4">
            Note: Ensure the website is legitimate before connecting your wallet to avoid scams.
          </p>

        </div>
      ),
    },
    {
      title: "5. Choose the Artist You Wish to Sponsor",
      content: (
        <div>
          <ul className="list-disc pl-5 mb-4 text-black dark:text-black text-xs md:text-sm">
            <li>The official artist page will display a list of young talents you can support</li>
            <li>Select your desired artist and click "Donate with BalleCoin"</li>
          </ul>

        </div>
      ),
    },
    {
      title: "6. Send the Donation in BalleCoin",      content: (
        <div>
          <ul className="list-disc pl-5 mb-4 text-black dark:text-black text-xs md:text-sm">
            <li>After clicking "Donate," you will be redirected to a payment screen</li>
            <li>Enter the amount of BalleCoin you wish to donate</li>
            <li>Click "Confirm Donation"</li>
            <li>Phantom Wallet will prompt you for confirmation. Click "Approve" to complete the transaction</li>
          </ul>

        </div>
      ),
    },
    {
      title: "7. Wait for Confirmation",
      content: (
        <div>
          <p className="text-black text-xs md:text-sm font-normal mb-4">
            Donations are typically confirmed within a few seconds.          </p>
          <p className="text-black text-xs md:text-sm font-normal mb-4">
            You will see a success message indicating your donation has been completed.
          </p>

        </div>
      ),
    },
    {
      title: "8. Receive Updates",
      content: (
        <div>
          <p className="text-black text-xs md:text-sm font-normal mb-4">
            You can opt to receive updates about the progress of sponsored artists. Check the "Receive Updates" option
            to stay informed.
          </p>

        </div>
      ),
    },  ]

  return (
    <div className="w-full">
      <Timeline data={data} />
      <div className="max-w-2xl mx-auto mt-12 p-6 bg-white dark:bg-gray-100 rounded-lg shadow-lg mb-20">
        <h3 className="text-xl font-bold mb-4 text-black dark:text-black">Important Tips:</h3>
        <ul className="list-disc pl-5 space-y-2 text-black">
          <li>Verify the address: Always ensure the artist&apos;s address is correct before sending tokens.</li>
          <li>Beware of scams: Only use official links provided to access the pool and artist list.</li>
          <li>Backup: Keep your seed phrase secure to avoid losing access to your wallet.</li>
        </ul>
      </div>
    </div>
  )
}