import Conversation from '@/app/Components/inbox/conversation'

const InboxPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6 space-y-4">
      <h1 className="text-2xl my-6 "> My Inbox</h1>
      <Conversation />
      <Conversation />
      <Conversation />
    </main>
  )
}

export default InboxPage
