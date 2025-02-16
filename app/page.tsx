'use client'

import { Chat } from '@/components/chat/chat'
import { Header } from '@/components/chat/site-header'

export default function ResearchPage() {
  return (
    <main className="flex flex-col h-screen items-center p-4 bg-[#f6f6f3]">
      <Header />
      <Chat id="research" initialMessages={[]} />
    </main>
  )
}

// FIRECRAWL_KEY=fc-e271f58f93fe4b3fa4885b3234dfa8fb