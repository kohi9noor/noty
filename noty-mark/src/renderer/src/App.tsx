import { Content, RootLayout, SideBar } from './components/Applayout'
import { NotePreViewList } from './components/Buttons'
import ActionButtonRow from './components/Buttons/ActionButtonRow'

const App = () => {
  return (
    <>
      <RootLayout>
        <SideBar className="p-2">
          <ActionButtonRow className=" flex justify-between mt-3 mb-5" />
          <NotePreViewList className="mt-5" />
        </SideBar>
        <Content className=" border-l bg-zinc-900 border-l-white/20">Content</Content>
      </RootLayout>
    </>
  )
}

export default App
