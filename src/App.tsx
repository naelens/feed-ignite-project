import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';

import styles from './App.module.css'


const posts: PostType[] = [
  { 
    id: 1,
    author: {
      avatarUrl: "https://github.com/naelens.png",
      name: "Naelem Souza",
      role: "Web Developer",
    },
    content: [
        { type: 'paragraph', content: 'Fala, galera 😉'},
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        { type: 'link', content:'👉jane.design/doctorcare'}, 
    ],
    publishedAt: new Date('2023-02-25 12:06'),
  },

  { 
    id: 2,
    author: {
      avatarUrl: 'https://github.com/eliezercm.png',
      name: 'Eliezer Martins',
      role: 'Desenvolvedor Full Stack',
    },
    content: [
        { type: 'paragraph', content: 'Oi, pessoal!'},
        { type: 'paragraph', content: 'Finalizei um novo projeto na Rocketseat. Criei um Feed com as tecnologias React e TypeScript.'},
        { type: 'link', content:'🤙eliezercmm.github.io/feed_ignite'}, 
    ],
    publishedAt: new Date('2023-02-27 19:32'),
  },  
]

export function App() {
  return (

    <div>
      <Header />

      <div className={styles.wrapper}>
          <Sidebar />

          <main>
            {posts.map(post => {
              return ( 
                <Post 
                    key={post.id}
                    post={post}
                />
              )
            })}
          </main>

      </div>

    </div>

  )
}

