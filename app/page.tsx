import InventoryManager from '@/components/ui/butcher-inventory-manager'
import MeatAndGreetInstagram from '@/components/ui/butcher-meat-and-greet'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="py-8">
      <div className="mb-8 relative">
        <Image
          src="/placeholder.svg?height=200&width=1200"
          alt="Butcher shop with various cuts of meat"
          width={1200}
          height={200}
          className="w-full h-[200px] object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
          <h1 className="text-4xl font-bold text-white text-center">The Butcher: Inventory</h1>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <InventoryManager />
        <MeatAndGreetInstagram />
      </div>
    </main>
  )
}

