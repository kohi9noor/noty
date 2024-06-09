import { useSetRecoilState } from 'recoil'
import { ActionButton, ActionButtonProps } from './ActionButton'
import { Trash } from 'lucide-react'
import { deleteNoteSelector } from '@renderer/atoms'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  const setDeleteNote = useSetRecoilState(deleteNoteSelector)

  const deleteNoteHandler = () => {
    setDeleteNote(null)
  }

  return (
    <ActionButton {...props}>
      <Trash onClick={deleteNoteHandler} className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
