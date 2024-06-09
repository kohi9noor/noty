import { selectedNoteAtom } from '@renderer/atoms'
import { useRecoilValue } from 'recoil'

const useMarkDown = () => {
  const selectedNote = useRecoilValue(selectedNoteAtom)
  return {
    selectedNote
  }
}

export default useMarkDown
