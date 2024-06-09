import { useRef } from 'react'
import { Content, RootLayout, SideBar } from './components/Applayout'
import { NotePreViewList } from './components/Buttons'
import ActionButtonRow from './components/Buttons/ActionButtonRow'
import FloadtingNotetitle from './components/Buttons/FloadtingNotetitle'
import MarkdownEditor from './components/MarkdownEditor'

const App = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null)
  const resetScroll = () => {
    contentContainerRef?.current?.scrollTo(0, 0)
  }

  return (
    <>
      <RootLayout>
        <SideBar className="p-2">
          <ActionButtonRow className=" flex justify-between mt-3 mb-5" />
          <NotePreViewList onSelect={resetScroll} className="mt-5" />
        </SideBar>
        <Content ref={contentContainerRef} className=" border-l bg-zinc-900 border-l-white/20">
          <FloadtingNotetitle className="py-2" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
