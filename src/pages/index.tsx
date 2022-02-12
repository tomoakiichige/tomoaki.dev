import type { NextPage } from 'next'
import { IconContext } from 'react-icons'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { SiZenn } from 'react-icons/si'

import { Footer } from '../components/Footer'
import { Head } from '../components/Head'
import { Link } from '../components/Link'
import { WorkCard } from '../components/WorkCard'

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <div className="px-4">
        <div className="mx-auto w-full max-w-screen-md">
          <header className="mt-24">
            <h1 className="text-4xl font-bold">Tomoaki Ichige</h1>
            <div className="flex gap-x-5 mt-4">
              <IconContext.Provider value={{ size: '28px' }}>
                {/* <Link href="https://twitter.com/tomoakiichige">
                  <FaTwitter />
                </Link> */}
                <Link href="https://github.com/tomoakiichige">
                  <FaGithub />
                </Link>
                {/* <Link href="https://zenn.dev/tomoakiichige">
                  <SiZenn />
                </Link> */}
              </IconContext.Provider>
            </div>
          </header>
          <main className="mt-24">
            <h2 className="text-3xl font-medium">作ったもの</h2>
            <div className="grid gap-9 mt-10 sm:grid-cols-2">
              <WorkCard
                image="/img/lottery.png"
                title="オンライン宝くじ"
                year="2021"
                link="/works/lottery"
              >
                第23回神大フェスタ企画用
              </WorkCard>
              <WorkCard
                image="/img/jindaifesta23.png"
                title="第23回神大フェスタ 公式サイト"
                year="2021"
                link="/works/jindaifesta23"
              />
              <WorkCard
                image="/img/cms.png"
                title="大学祭団体企画用CMS"
                year="2021"
                link="/works/cms"
              >
                第23回神大フェスタ用
              </WorkCard>
              <WorkCard
                image="/img/toikuji.png"
                title="Toikuji"
                year="2021"
                link="/works/toikuji"
              >
                オンライン自己紹介で気軽に質問
              </WorkCard>
              <WorkCard
                image="/img/jindaifesta22.png"
                title="第22回神大フェスタ 公式サイト"
                year="2020"
                link="/works/jindaifesta22"
              />
              <WorkCard
                image="/img/reserve.png"
                title="予約システム"
                year="2020"
                link="/works/reserve"
              >
                第22回神大フェスタ企画用
              </WorkCard>
              <WorkCard
                image="/img/jindaifesta21.png"
                title="第21回神大フェスタ 公式サイト"
                year="2019"
                link="/works/jindaifesta21"
              />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home
