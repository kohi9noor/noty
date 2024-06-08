import { ActionButton, ActionButtonProps } from './ActionButton'
import { Trash } from 'lucide-react'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  return (
    <ActionButton {...props}>
      <Trash className=" w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
