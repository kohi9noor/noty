import { ActionButton, ActionButtonProps } from './ActionButton'
import { FileSignatureIcon } from 'lucide-react'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  return (
    <ActionButton {...props}>
      <FileSignatureIcon className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
