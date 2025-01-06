import { Editor } from '@tiptap/react'

interface MenuBarProps {
    editor: Editor | null
}

export default function MenuBar({ editor }: MenuBarProps) {
    if (!editor) {
        return null
    }

    const buttonBaseClass = "p-2 rounded hover:bg-yt-light-gray transition-colors"
    const buttonActiveClass = "bg-yt-light-gray"

    return (
        <div className="border-b border-yt-light-gray p-2 mb-3 flex flex-wrap gap-2">
            <div className="flex gap-1">
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editor.can().chain().focus().toggleBold().run()}
                    className={`${buttonBaseClass} ${editor.isActive('bold') ? buttonActiveClass : ''}`}
                    title="Kalın"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="w-5 h-5 text-yt-text">
                        <path fill="currentColor" d="M8 11h4.5a2.5 2.5 0 1 0 0-5H8v5zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5zM8 13v5h5.5a2.5 2.5 0 1 0 0-5H8z" />
                    </svg>
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={!editor.can().chain().focus().toggleItalic().run()}
                    className={`${buttonBaseClass} ${editor.isActive('italic') ? buttonActiveClass : ''}`}
                    title="İtalik"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="w-5 h-5 text-yt-text">
                        <path fill="currentColor" d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z" />
                    </svg>
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    disabled={!editor.can().chain().focus().toggleUnderline().run()}
                    className={`${buttonBaseClass} ${editor.isActive('underline') ? buttonActiveClass : ''}`}
                    title="Altı Çizili"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="w-5 h-5 text-yt-text">
                        <path fill="currentColor" d="M8 3v9a4 4 0 1 0 8 0V3h2v9a6 6 0 1 1-12 0V3h2zM4 20h16v2H4v-2z" />
                    </svg>
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleHighlight().run()}
                    disabled={!editor.can().chain().focus().toggleHighlight().run()}
                    className={`${buttonBaseClass} ${editor.isActive('highlight') ? buttonActiveClass : ''}`}
                    title="Vurgula"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="w-5 h-5 text-yt-text">
                        <path fill="currentColor" d="M15.243 4.515l-6.738 6.737-.707 2.121-1.04 1.041 2.828 2.829 1.04-1.041 2.122-.707 6.737-6.738-4.242-4.242z" />
                    </svg>
                </button>
            </div>

            <div className="w-px h-6 bg-yt-light-gray mx-1" />

            <div className="flex gap-1">
                <button
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    className={`${buttonBaseClass} ${editor.isActive({ textAlign: 'left' }) ? buttonActiveClass : ''}`}
                    title="Sola Hizala"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="w-5 h-5 text-yt-text">
                        <path fill="currentColor" d="M3 4h18v2H3V4zm0 15h14v2H3v-2zm0-5h18v2H3v-2zm0-5h14v2H3V9z" />
                    </svg>
                </button>

                <button
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    className={`${buttonBaseClass} ${editor.isActive({ textAlign: 'center' }) ? buttonActiveClass : ''}`}
                    title="Ortala"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="w-5 h-5 text-yt-text">
                        <path fill="currentColor" d="M3 4h18v2H3V4zm2 15h14v2H5v-2zm-2-5h18v2H3v-2zm2-5h14v2H5V9z" />
                    </svg>
                </button>

                <button
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    className={`${buttonBaseClass} ${editor.isActive({ textAlign: 'right' }) ? buttonActiveClass : ''}`}
                    title="Sağa Hizala"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="w-5 h-5 text-yt-text">
                        <path fill="currentColor" d="M3 4h18v2H3V4zm4 15h14v2H7v-2zm-4-5h18v2H3v-2zm4-5h14v2H7V9z" />
                    </svg>
                </button>
            </div>

            <div className="w-px h-6 bg-yt-light-gray mx-1" />

            <div className="flex gap-1">
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={`${buttonBaseClass} ${editor.isActive('bulletList') ? buttonActiveClass : ''}`}
                    title="Madde İşaretli Liste"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="w-5 h-5 text-yt-text">
                        <path fill="currentColor" d="M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z" />
                    </svg>
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={`${buttonBaseClass} ${editor.isActive('orderedList') ? buttonActiveClass : ''}`}
                    title="Numaralı Liste"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="w-5 h-5 text-yt-text">
                        <path fill="currentColor" d="M8 4h13v2H8V4zM5 3v3h1v1H3V6h1V4H3V3h2zm2 8h13v2H7v-2zm-2-1v3h1v1H3v-1h1v-1H3v-2h2zm2 8h13v2H7v-2zm-2-1v3h1v1H3v-1h1v-1H3v-2h2z" />
                    </svg>
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleTaskList().run()}
                    className={`${buttonBaseClass} ${editor.isActive('taskList') ? buttonActiveClass : ''}`}
                    title="Yapılacaklar Listesi"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="w-5 h-5 text-yt-text">
                        <path fill="currentColor" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm2 2h2v2H7V7zm0 4h2v2H7v-2zm0 4h2v2H7v-2zm4-8h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6v-2z" />
                    </svg>
                </button>
            </div>
        </div>
    )
} 