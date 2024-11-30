'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useToast } from '@/hooks/use-toast'
import { ImageUpload } from './butcher-image-upload'

export default function ShareToInstagram() {
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
      description: "Your post has been successfully created on Instagram!",
    })
    setPost({ title: '', description: '', image: null })
  }

  return (
    <Card className="bg-white/90 shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Share to Instagram</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Post Title</Label>
            <Input
              id="title"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              placeholder="e.g., Fresh Ribeye Steaks"
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Post Description</Label>
            <Textarea
              id="description"
              value={post.description}
              onChange={(e) => setPost({ ...post, description: e.target.value })}
              placeholder="Describe your cut of meat..."
              required
            />
          </div>
          <div>
            <Label htmlFor="image">Image</Label>
            <ImageUpload onImageUpload={(file) => setPost({ ...post, image: file })} />
          </div>
          <Button type="submit">Create Post</Button>
        </form>
      </CardContent>
    </Card>
  )
}

