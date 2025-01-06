import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Underline from '@tiptap/extension-underline'
import TextStyle from '@tiptap/extension-text-style'
import Highlight from '@tiptap/extension-highlight'
import MenuBar from './MenuBar'

interface EditorProps {
    content: string
    onChange: (content: string) => void
}

export default function Editor({ content, onChange }: EditorProps) {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: {
                    HTMLAttributes: {
                        class: 'text-yt-text',
                    },
                },
                paragraph: {
                    HTMLAttributes: {
                        class: 'text-yt-text',
                    },
                },
                bold: {
                    HTMLAttributes: {
                        class: 'text-yt-text',
                    },
                },
                italic: {
                    HTMLAttributes: {
                        class: 'text-yt-text',
                    },
                },
            }),
            Placeholder.configure({
                placeholder: 'Write your note content here...',
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            TaskList.configure({
                HTMLAttributes: {
                    class: 'text-yt-text',
                },
            }),
            TaskItem.configure({
                nested: true,
                HTMLAttributes: {
                    class: 'text-yt-text',
                },
            }),
            Underline.configure({
                HTMLAttributes: {
                    class: 'text-yt-text',
                },
            }),
            TextStyle,
            Highlight.configure({
                multicolor: false,
                HTMLAttributes: {
                    class: 'bg-yt-blue/20 text-yt-text',
                },
            }),
        ],
        content,
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[200px] prose-invert prose-p:text-yt-text prose-headings:text-yt-text prose-strong:text-yt-text prose-em:text-yt-text prose-li:text-yt-text',
            },
        },
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML())
        },
    })

    return (
        <div className="w-full border border-yt-light-gray rounded-lg bg-yt-gray">
            <MenuBar editor={editor} />
            <div className="p-4">
                <EditorContent editor={editor} />
            </div>
        </div>
    )
} 