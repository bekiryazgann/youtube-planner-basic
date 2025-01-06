import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Editor from '../components/Editor'

export default function NewNotePage() {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSave = () => {
        if (!title.trim() || !content.trim()) return

        const newNote = {
            id: crypto.randomUUID(),
            title: title.trim(),
            content: content.trim(),
            createdAt: new Date().toISOString()
        }

        try {
            const savedNotes = localStorage.getItem('notes')
            const notes = savedNotes ? JSON.parse(savedNotes) : []
            localStorage.setItem('notes', JSON.stringify([newNote, ...notes]))
            navigate(`/notes/${newNote.id}`)
        } catch (error) {
            console.error('Error saving note:', error)
            alert('An error occurred while saving the note. Please try again.')
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto space-y-6">
                <div className="flex items-center justify-end space-x-4">
                    <button
                        type="button"
                        onClick={() => navigate('/')}
                        className="px-4 py-2 text-yt-text-secondary hover:text-yt-text transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={handleSave}
                        className="bg-yt-blue text-yt-text px-4 py-2 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
                        disabled={!title.trim() || !content.trim()}
                    >
                        Save
                    </button>
                </div>

                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Untitled Note"
                    className="w-full text-4xl font-bold bg-transparent text-yt-text border-none outline-none placeholder-yt-text-secondary"
                    autoFocus
                />

                <Editor content={content} onChange={setContent} />
            </div>
        </div>
    )
} 