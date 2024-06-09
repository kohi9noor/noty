import { ComponentProps } from 'react'
import { NotePreview } from '../NotePreview'
import { twMerge } from 'tailwind-merge'
import useNotesList from '@renderer/hooks/useNotesList'

export type NotePreviewlistProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export const NotePreViewList = ({ className, onSelect, ...props }: NotePreviewlistProps) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({ onSelect })

  if (notes.length === 0) {
    return (
      <ul className={twMerge(' text-center pt-4', className)}>
        <span>No notes Yet!</span>
      </ul>
    )
  }

  return (
    <ul {...props}>
      {notes.map((notes, index) => {
        return (
          <NotePreview
            key={notes.title + notes.lastEditTime}
            title={notes.title}
            content="huehueh"
            isActive={selectedNoteIndex === index}
            onClick={() => handleNoteSelect(index)}
            lastEditTime={notes.lastEditTime}
          />
        )
      })}
    </ul>
  )
}
