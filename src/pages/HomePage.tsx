import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function stripHtml(html: string) {
    const doc = new DOMParser().parseFromString(html, 'text/html')
    return doc.body.textContent || ''
}

function truncateText(text: string, maxLength: number) {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength).trim() + '...'
}

interface Note {
    id: string
    title: string
    content: string
    createdAt: string
}

interface NoteCardProps {
    note: Note
    onDelete: (id: string) => void
}

function NoteCard({ note, onDelete }: NoteCardProps) {
    const cleanContent = truncateText(stripHtml(note.content), 150)

    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (window.confirm('Are you sure you want to delete this note?')) {
            onDelete(note.id)
        }
    }

    return (
        <div className="bg-yt-gray rounded-lg overflow-hidden hover:bg-yt-light-gray transition-colors">
            <div className="p-4">
                <div className="flex justify-between items-start mb-3">
                    <div>
                        <Link to={`/notes/${note.id}`} className="block">
                            <h2 className="text-xl font-semibold text-yt-text hover:text-yt-blue transition-colors line-clamp-2">
                                {note.title}
                            </h2>
                            <p className="text-yt-text-secondary text-sm mt-1">
                                {new Date(note.createdAt).toLocaleDateString('en-US')}
                            </p>
                        </Link>
                    </div>
                    <button
                        onClick={handleDelete}
                        className="text-yt-text-secondary hover:text-yt-red ml-4 transition-colors p-2 rounded hover:bg-yt-light-gray"
                        title="Delete"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <Link to={`/notes/${note.id}`} className="block">
                    <p className="text-yt-text-secondary line-clamp-3">{cleanContent}</p>
                </Link>
            </div>
        </div>
    )
}

export default function HomePage() {
    const [notes, setNotes] = useState<Note[]>([])

    useEffect(() => {
        const savedNotes = localStorage.getItem('notes')
        if (savedNotes) {
            try {
                const parsedNotes = JSON.parse(savedNotes)
                setNotes(parsedNotes)
            } catch (error) {
                console.error('Notes parsing error:', error)
                localStorage.removeItem('notes')
            }
        }
    }, [])

    useEffect(() => {
        if (notes.length > 0) {
            localStorage.setItem('notes', JSON.stringify(notes))
        }
    }, [notes])

    const handleDelete = (id: string) => {
        setNotes(prev => {
            const newNotes = prev.filter(note => note.id !== id)
            if (newNotes.length === 0) {
                localStorage.removeItem('notes')
            }
            return newNotes
        })
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-yt-text">YouTube Planner</h1>
                <Link
                    to="/new"
                    className="bg-yt-blue text-yt-text px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
                >
                    New Note
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {notes.map(note => (
                    <NoteCard
                        key={note.id}
                        note={note}
                        onDelete={handleDelete}
                    />
                ))}
            </div>

            {notes.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-yt-text-secondary text-lg">No notes yet</p>
                </div>
            )}
        </div>
    )
} 