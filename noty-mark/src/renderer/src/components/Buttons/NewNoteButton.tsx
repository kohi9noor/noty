import { useSetRecoilState } from 'recoil'
import { ActionButton, ActionButtonProps } from './ActionButton'
import { FileSignatureIcon } from 'lucide-react'
import { createEmptyNoteSelector } from '@renderer/atoms'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  const setCreateEmptyNote = useSetRecoilState(createEmptyNoteSelector)

  const handleCreation = () => {
    const newNote = {
      title: `Note ${Math.floor(Math.random() * 10)}`, // generate unique title
      lastEditTime: Date.now()
    }
    setCreateEmptyNote(newNote)
  }

  return (
    <ActionButton {...props}>
      <FileSignatureIcon onClick={handleCreation} className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
