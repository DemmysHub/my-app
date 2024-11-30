'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

type InventoryItem = {
  id: number
  name: string
  quantity: number
  unit: 'kg' | 'oz'
}

export default function InventoryManager() {
  const [inventory, setInventory] = useState<InventoryItem[]>([])
  const [newItem, setNewItem] = useState({ name: '', quantity: '', unit: 'kg' as 'kg' | 'oz' })

  const addItem = () => {
    if (newItem.name && newItem.quantity) {
      setInventory([...inventory, { id: Date.now(), ...newItem, quantity: Number(newItem.quantity) }])
      setNewItem({ name: '', quantity: '', unit: 'kg' })
    }
  }

  return (
    <Card className="bg-white/90 shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Inventory Manager</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div>
            <Label htmlFor="name">Item Name</Label>
            <Input
              id="name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              placeholder="e.g., Ribeye"
            />
          </div>
          <div>
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              value={newItem.quantity}
              onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
              placeholder="e.g., 10"
            />
          </div>
          <div>
            <Label htmlFor="unit">Unit</Label>
            <Select
              value={newItem.unit}
              onValueChange={(value: 'kg' | 'oz') => setNewItem({ ...newItem, unit: value })}
            >
              <SelectTrigger id="unit">
                <SelectValue placeholder="Select unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kg">kg</SelectItem>
                <SelectItem value="oz">oz</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end">
            <Button onClick={addItem}>Add Item</Button>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Unit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventory.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.unit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

