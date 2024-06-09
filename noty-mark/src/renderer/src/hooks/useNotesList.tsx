import { notesAtom, selectedNoteIndexAtom } from '@renderer/atoms'
import { useRecoilState, useRecoilValue } from 'recoil'

const useNotesList = ({ onSelect }: { onSelect?: () => void }) => {
  const notes = useRecoilValue(notesAtom)
  const [selectedNoteIndex, setSelectedNoteIndex] = useRecoilState(selectedNoteIndexAtom)
  const handleNoteSelect = (index: number) => {
    setSelectedNoteIndex(index)
  }
  if (onSelect) {
    onSelect()
  }
  return {
    notes,
    selectedNoteIndex,
    handleNoteSelect
  }
}

export default useNotesList
