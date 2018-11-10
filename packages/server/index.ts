import { prisma } from './generated/prisma-client'

// A `main` function so that we can use async/await
async function main() {

  // Create a new user called `Alice`
  const newPopup = await prisma.createPopup({ URL: 'whatever', text: 'whatever' })
  console.log(`Created new user: ${newPopup.URL} (ID: ${newPopup.id})`)

  // Read all users from the database and print them to the console
  const allPopups = await prisma.popups()
  console.log(allPopups)
}

main().catch(e => console.error(e))
