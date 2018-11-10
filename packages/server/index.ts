import { prisma } from './generated/prisma-client'

// A `main` function so that we can use async/await
async function main() {

  // Create a new user called `Alice`
  const newPopup = await prisma.createPopup(
    { name: 'popup02', elementId: 'whatever2', URL: 'whatever2', text: 'hehe2' }
  )
  console.log(
    `Created popup user: ${newPopup.name} 
    (ID: ${newPopup.id}, elementID: ${newPopup.elementId})`
  )

  // Read all users from the database and print them to the console
  const allPopups = await prisma.popups()
  console.log(allPopups)
}

main().catch(e => console.error(e))
