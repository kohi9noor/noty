// atoms.ts
import { atom, selector } from 'recoil'
import { NoteInfo } from '@shared/model'
import { notesMock } from './mocks'

export const notesAtom = atom<NoteInfo[]>({
  key: 'notesAtom',
  default: notesMock
})

export const selectedNoteIndexAtom = atom<number | null>({
  key: 'selectedNoteIndex',
  default: null
})

export const selectedNoteAtom = selector<NoteInfo | null>({
  key: 'selectedNote',
  get: ({ get }) => {
    const notes = get(notesAtom)
    const selectedNoteIndex = get(selectedNoteIndexAtom)

    if (selectedNoteIndex === null) return null

    const selectedNote = notes[selectedNoteIndex]

    return {
      ...selectedNote,
      content: `hello from Noty, ${selectedNoteIndex}`
    }
  }
})

export const createEmptyNoteSelector = selector<NoteInfo>({
  key: 'createEmptyNoteSelector',
  get: ({ get }) => {
    const notes = get(notesAtom)
    const title = `Note ${notes.length + 1}`
    const newNote: NoteInfo = {
      title,
      lastEditTime: Date.now()
    }

    return newNote
  },
  set: ({ set, get }, newNote) => {
    if (!newNote) return

    const notes = get(notesAtom)
    set(notesAtom, [newNote, ...notes])
    set(selectedNoteIndexAtom, 0)
  }
})

export const deleteNoteSelector = selector<void>({
  key: 'deleteNoteSelector',
  get: ({ get }) => {
    return
  },
  set: ({ set, get }) => {
    const notes = get(notesAtom)
    const selectedNote = get(selectedNoteAtom)

    if (!selectedNote) return

    const updatedNotes = notes.filter((note) => note.title !== selectedNote.title)
    set(notesAtom, updatedNotes)
    set(selectedNoteIndexAtom, null)
  }
})
