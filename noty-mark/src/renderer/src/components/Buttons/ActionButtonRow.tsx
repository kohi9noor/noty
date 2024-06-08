import { ComponentProps } from 'react'
import { DeleteNoteButton } from './DeleteNoteButton'
import { NewNoteButton } from './NewNoteButton'

const ActionButtonRow = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <NewNoteButton />
      <DeleteNoteButton />
    </div>
  )
}

export default ActionButtonRow
