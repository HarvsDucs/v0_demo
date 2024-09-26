'use client'

import { useState } from 'react'
import { Calendar, Settings, LogOut, Plus } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface Note {
  id: number
  title: string
  content: string
  color: string
}

export function StickyWallComponent() {
  const [notes, setNotes] = useState<Note[]>([
    { id: 1, title: 'Social Media', content: '- Plan social content\n- Build content calendar\n- Plan promotion and distribution', color: 'bg-yellow-100' },
    { id: 2, title: 'Content Strategy', content: 'Would need time to get insights (goals, personas, budget, audits), but after, it would be good to focus on assembling my team (start with SEO specialist, then perhaps an email marketer?). Also need to brainstorm on tooling.', color: 'bg-blue-100' },
    { id: 3, title: 'Email A/B Tests', content: '- Subject lines\n- Sender\n- CTA\n- Sending times', color: 'bg-red-100' },
    { id: 4, title: 'Banner Ads', content: 'Notes from the workshop:\n- Sizing matters\n- Choose distinctive imagery\n- The landing page must match the display ad', color: 'bg-orange-100' },
  ])

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <Input type="text" placeholder="Search" className="mb-4" />
        <div className="mb-8">
          <h3 className="font-semibold mb-2">TASKS</h3>
          <ul>
            <li className="flex justify-between items-center mb-2">
              <span>Upcoming</span>
              <span className="bg-gray-200 rounded-full px-2 text-sm">12</span>
            </li>
            <li className="flex justify-between items-center mb-2">
              <span>Today</span>
              <span className="bg-gray-200 rounded-full px-2 text-sm">5</span>
            </li>
            <li className="flex items-center mb-2">
              <Calendar className="mr-2" size={16} />
              <span>Calendar</span>
            </li>
            <li className="flex items-center mb-2 bg-gray-200 p-2 rounded">
              <span>Sticky Wall</span>
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="font-semibold mb-2">LISTS</h3>
          <ul>
            <li className="flex justify-between items-center mb-2">
              <span>Personal</span>
              <span className="bg-gray-200 rounded-full px-2 text-sm">3</span>
            </li>
            <li className="flex justify-between items-center mb-2">
              <span>Work</span>
              <span className="bg-gray-200 rounded-full px-2 text-sm">3</span>
            </li>
            <li className="flex justify-between items-center mb-2">
              <span>List 1</span>
              <span className="bg-gray-200 rounded-full px-2 text-sm">3</span>
            </li>
          </ul>
          <Button variant="ghost" className="w-full justify-start">
            <Plus className="mr-2" size={16} />
            Add New List
          </Button>
        </div>
        <div className="mb-8">
          <h3 className="font-semibold mb-2">TAGS</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Tag 1</span>
            <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded">Tag 2</span>
            <Button variant="outline" size="sm">
              <Plus size={16} />
              Add Tag
            </Button>
          </div>
        </div>
        <div className="mt-auto">
          <Button variant="ghost" className="w-full justify-start mb-2">
            <Settings className="mr-2" size={16} />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <LogOut className="mr-2" size={16} />
            Sign out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Sticky Wall</h1>
        <div className="grid grid-cols-3 gap-4">
          {notes.map((note) => (
            <div key={note.id} className={`${note.color} p-4 rounded-lg shadow`}>
              <h3 className="font-bold mb-2">{note.title}</h3>
              <p className="whitespace-pre-line">{note.content}</p>
            </div>
          ))}
          <div className="bg-white p-4 rounded-lg shadow flex items-center justify-center">
            <Button variant="ghost">
              <Plus size={24} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}