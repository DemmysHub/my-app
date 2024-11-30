'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ImageUpload } from './butcher-image-upload'
import { useToast } from '@/hooks/use-toast'

export default function MeatAndGreetInstagram() {
  const [post, setPost] = useState({ title: '', description: '', image: null as File | null })
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!post.image) {
      toast({
        title: "Error",
        description: "Please select an image to post.",
        variant: "destructive",
      })
      return
    }
    // Simulate posting to Instagram
    await new Promise(resolve => setTimeout(resolve, 1000))
    toast({
      title: "Post Created",
      description: "Your meaty masterpiece has been shared on Instagram!",
    })
    setPost({ title: '', description: '', image: null })
  }

  return (
    <Card className="bg-white/90 shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Meat & Greet: Instagram Edition</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Post Title</Label>
            <Input
              id="title"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              placeholder="e.g., Prime Ribeye Perfection"
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Post Description</Label>
            <Textarea
              id="description"
              value={post.description}
              onChange={(e) => setPost({ ...post, description: e.target.value })}
              placeholder="Describe your mouthwatering cut..."
              required
            />
          </div>
          <div>
            <Label htmlFor="image">Meaty Masterpiece</Label>
            <ImageUpload onImageUpload={(file) => setPost({ ...post, image: file })} />
          </div>
          <Button type="submit">Share the Sizzle</Button>
        </form>
      </CardContent>
    </Card>
  )
}

