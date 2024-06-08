import { notesMock } from '@renderer/atoms/mocks'
import { ComponentProps } from 'react'
import { NotePreview } from '../NotePreview'
import { twMerge } from 'tailwind-merge'

export const NotePreViewList = ({ className, ...props }: ComponentProps<'ul'>) => {
  if (notesMock.length === 0) {
    return (
      <ul className={twMerge(' text-center pt-4', className)}>
        <span>No notes Yet!</span>
      </ul>
    )
  }

  return (
    <ul {...props}>
      {notesMock.map((notes) => {
        return (
          <NotePreview
            key={notes.title + notes.lastEditTime}
            title={notes.title}
            content="huehueh"
            isActive={false}
            lastEditTime={notes.lastEditTime}
          />
        )
      })}
    </ul>
  )
}
