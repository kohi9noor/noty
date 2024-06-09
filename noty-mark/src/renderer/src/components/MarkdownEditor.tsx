import {
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin
} from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
import './Buttons/markdown.css'
import useMarkDown from '@renderer/hooks/useMarkDown'
const MarkdownEditor = () => {
  const { selectedNote } = useMarkDown()

  if (!selectedNote) return null

  return (
    <div className="">
      <MDXEditor
        key={selectedNote.title}
        markdown={selectedNote.content}
        contentEditableClassName="outline-none min-h-screen max-w-none text-lg px-8 py-5 caret-yellow-500 prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-[''] text-white"
        plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), markdownShortcutPlugin()]}
      />
    </div>
  )
}

export default MarkdownEditor
