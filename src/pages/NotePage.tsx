import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Editor from '../components/Editor'

interface Note {
    id: string
    title: string
    content: string
    createdAt: string
}

export default function NotePage() {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const [note, setNote] = useState<Note | null>(null)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        const savedNotes = localStorage.getItem('notes')
        if (savedNotes) {
            try {
                const notes: Note[] = JSON.parse(savedNotes)
                const foundNote = notes.find(n => n.id === id)
                if (foundNote) {
                    setNote(foundNote)
                    setTitle(foundNote.title)
                    setContent(foundNote.content)
                } else {
                    navigate('/')
                }
            } catch (error) {
                console.error('Error loading note:', error)
                navigate('/')
            }
        } else {
            navigate('/')
        }
    }, [id, navigate])

    const handleSave = () => {
        if (!note || !title.trim() || !content.trim()) return

        try {
            const updatedNote = {
                ...note,
                title: title.trim(),
                content: content.trim()
            }

            const savedNotes = localStorage.getItem('notes')
            if (savedNotes) {
                const notes: Note[] = JSON.parse(savedNotes)
                const updatedNotes = notes.map(n => n.id === id ? updatedNote : n)
                localStorage.setItem('notes', JSON.stringify(updatedNotes))
                setNote(updatedNote)
                setIsEditing(false)
            }
        } catch (error) {
            console.error('Error saving note:', error)
            alert('An error occurred while saving the note. Please try again.')
        }
    }

    if (!note) return null

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto space-y-6">
                <div className="flex items-center justify-between">
                    <button
                        type="button"
                        onClick={() => navigate('/')}
                        className="text-yt-text-secondary hover:text-yt-text transition-colors"
                    >
                        ← Back
                    </button>
                    <div className="space-x-4">
                        {isEditing ? (
                            <>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setTitle(note.title)
                                        setContent(note.content)
                                        setIsEditing(false)
                                    }}
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
                            </>
                        ) : (
                            <button
                                type="button"
                                onClick={() => setIsEditing(true)}
                                className="bg-yt-gray text-yt-text px-4 py-2 rounded-full hover:bg-yt-light-gray transition-colors"
                            >
                                Edit
                            </button>
                        )}
                    </div>
                </div>

                {isEditing ? (
                    <>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full text-4xl font-bold bg-transparent text-yt-text border-none outline-none"
                        />
                        <Editor content={content} onChange={setContent} />
                    </>
                ) : (
                    <div className="text-yt-text">
                        <h1 className="text-4xl font-bold mb-6">{note.title}</h1>
                        <div
                            className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto prose-invert prose-p:text-yt-text prose-headings:text-yt-text prose-strong:text-yt-text"
                            dangerouslySetInnerHTML={{ __html: note.content }}
                        />
                    </div>
                )}
            </div>
        </div>
    )
} 