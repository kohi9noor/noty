import { selectedNoteAtom, selectedNoteIndexAtom } from '@renderer/atoms'
import { ComponentProps } from 'react'
import { useRecoilValue } from 'recoil'
import { twMerge } from 'tailwind-merge'

const FloadtingNotetitle = ({ className, ...props }: ComponentProps<'div'>) => {
  const selectedNote = useRecoilValue(selectedNoteAtom)

  return (
    <div className={twMerge('flex justify-center', className)} {...props}>
      <span className=" text-gray-400">{selectedNote?.title}</span>
    </div>
  )
}

export default FloadtingNotetitle
