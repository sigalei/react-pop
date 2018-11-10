import { prisma } from './generated/prisma-client'


async function main() {
  await prisma.createPopup({
    name: 'popup02',
    elementId: 'whatever2',
    URL: 'whatever2',
    text: 'hehe2',
    location: 'right' 
  })

  const allPopups = await prisma.popups()
  console.log(allPopups)
}

main().catch(e => console.error(e))
